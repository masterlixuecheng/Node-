<template>
  <div class="bmgl">
    <el-form :inline="true" :model="queryFrom">
      <el-form-item label="门户名称">
        <el-input v-model="queryFrom.mhname" placeholder="请输入门户名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="btn_search(1)">查询</el-button>
        <el-button
          type="success"
          icon="el-icon-plus"
          v-permission="'mhxx_add'"
          @click="btn_detail('','edit')"
        >添加门户</el-button>
        <el-button type="warning" icon="el-icon-setting" @click="btn_source">门户资源管理</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="序号" width="60"></el-table-column>
      <el-table-column prop="mhname" label="门户名称" show-overflow-tooltip></el-table-column>
      <el-table-column prop="jjdtname" label="竞价大厅名称" show-overflow-tooltip></el-table-column>
      <el-table-column prop="szqq" label="所属区划" show-overflow-tooltip></el-table-column>
      <el-table-column prop="sfzz" label="是否主站" show-overflow-tooltip width="150">
        <template slot-scope="scope">
          <span>
            <el-switch v-model="scope.row.sfzz" active-text="启用" inactive-text="关闭" disabled></el-switch>
          </span>
        </template>
        <!-- <el-switch v-model="sffz"  active-text="启用" inactive-text="关闭" show-overflow-tooltip></el-switch> -->
      </el-table-column>

      <el-table-column prop="address" label="操作" width="500">
        <template slot-scope="scope">
          <el-button plain size="mini" type="success" @click="btn_detail(scope.row)">查看</el-button>
          <el-button
            plain
            size="mini"
            type="warning"
            v-permission="'mhxx_edit'"
            @click="btn_detail(scope.row,'edit')"
          >修改</el-button>
          <el-button
            plain
            size="mini"
            type="danger"
            v-permission="'mhxx_del'"
            @click="btn_del(scope.row)"
          >删除</el-button>
          <el-button
            plain
            size="mini"
            type="primary"
            v-permission="'mhxx_yqlj'"
            @click="btn_yqlj(scope.row)"
          >友情链接</el-button>
          <el-button
            plain
            size="mini"
            type="warning"
            v-permission="'bmgl_auth'"
            @click="bm_urlManage(scope.row)"
          >系统集成</el-button>
          <el-button
            plain
            size="mini"
            type="success"
            v-permission="'bmgl_auth'"
            @click="bm_mhxxPermissionManage(scope.row)"
          >权限配置</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="pageObj.pageNo"
      :page-size="pageObj.pageSize"
      layout="total, prev, pager, next"
      :total="pageObj.totalCount"
    ></el-pagination>
    <mhxxPermissionModal :mhxxModal="mhxxModal" :id="mhxxId" @close="close" @edit="mhxx_search"></mhxxPermissionModal>
  </div>
</template>
<script>
import { getMhxxList, delMhxx } from "@/api/settings/mhxx";
import mhxxPermissionModal from "./mhxx_permission_modal.vue";
export default {
  name: "mhxx",
  components: {
    mhxxPermissionModal
  },
  data() {
    return {
      queryFrom: {},
      pageObj: {
        pageNo: 1,
        pageSize: 10,
        totalCount: 0
      },
      props: {
        value: "code"
      },
      tableData: [],
      isEdit: false,
      mhxxId: "",
      mhxxModal: false
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    mhxx_search(pageNo) {
      if (pageNo) {
        this.pageObj.pageNo = pageNo;
      }
      let obj = Object.assign({}, this.queryForm, this.pageObj);
      if (obj.areaList && !obj.areaList.length) {
        delete obj.areaList;
      }
      getBm(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.tableData = data.msg.data.map(d => {
            d.areaList = (d.areacode && d.areacode.split(",")) || [];
            return d;
          });
          this.pageObj.totalCount = data.msg.totalCount;
        }
      });
    },
    btn_source() {
      this.$router.push({
        name: "mhSource",
        params: {}
      });
    },
    indexMethod(index) {
      let start = (this.pageObj.pageNo - 1) * this.pageObj.pageSize;
      return start + index + 1;
    },
    handleCurrentChange(val) {
      this.$nextTick(() => {
        this.btn_search();
      });
    },
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        this.$message({
          message: data.msg,
          type: "success"
        });
        this.btn_search();
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    close() {
      this.isEdit = false;
      this.mhxxModal = false;
    },
    btn_detail(row, edit) {
      if (edit) {
        this.isEdit = true;
      }
      this.$router.push({
        name: "mhxxDetail",
        params: { isEdit: this.isEdit, id: (row && row.id) || "-1" }
      });
    },
    //友情链接
    btn_yqlj(row) {
      this.$router.push({
        name: "yqlj",
        params: { id: (row && row.id) || "-1" }
      });
    },
    //门户url
    bm_urlManage(row) {
      this.$router.push({
        name: "seo",
        params: { id: (row && row.id) || "-1" }
      });
    },
    btn_search(pageNo) {
      if (pageNo) {
        this.pageObj.pageNo = pageNo;
      }
      let obj = Object.assign({}, this.queryFrom, this.pageObj);
      getMhxxList(obj).then(res => {
        let data = res.data;
        if (data.success) {
          // this.tableData = data.msg.data;
          this.tableData = data.msg.data.map(d => {
            d.mhssqy = (d.mhssqy && d.mhssqy.split(",")) || [];
            d.sfzz = d.sfzz == "1" ? true : false;
            return d;
          });
          this.pageObj.totalCount = data.msg.totalCount;
        }
      });
    },
    btn_del(row) {
      this.$confirm("你确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delMhxx(row.id).then(res => {
            this.handleRes(res);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    bm_mhxxPermissionManage(row) {
      this.mhxxId = row.id;
      this.mhxxModal = true;
    }
  },
  mounted() {
    this.btn_search();
  }
};
</script>
