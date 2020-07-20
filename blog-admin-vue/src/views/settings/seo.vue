<template>
  <div class="bmgl">
    <el-form :inline="true" :model="queryFrom">
      <el-form-item label="门户名称">
        <el-input v-model.trim="queryFrom.mhname" placeholder="请输入门户名称" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="btn_search(1)">查询</el-button>
        <el-button
          type="success"
          icon="el-icon-plus"
          v-permission="'seo_add'"
          @click="btn_add"
        >添加</el-button>
        <el-button type="info" icon="el-icon-back" @click="$router.push({ name: 'mhxx' })">返回</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="序号" width="60"></el-table-column> 
      <el-table-column prop="bt" label="标题"></el-table-column>
      <el-table-column prop="mhname" label="链接地址"></el-table-column>
      <el-table-column prop="address" label="操作" width="240">
        <template slot-scope="scope">
          <el-button plain size="mini" type="success" @click="btn_detail(scope.row)">查看</el-button>
          <el-button
            plain
            size="mini"
            type="warning"
            v-permission="'seo_edit'"
            @click="btn_detail(scope.row,'edit')"
          >修改</el-button>
          <el-button
            plain
            size="mini"
            type="danger"
            v-permission="'seo_del'"
            @click="btn_del(scope.row)"
          >删除</el-button>
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
    <xModal :modalShow="modalShow" :data="data" :isEdit="isEdit" :mhpassid="mhpassid" @close="close" @edit="btn_search"></xModal>
  </div>
</template>
<script>
import { getSEO, delSEO } from "@/api/settings/seo";
import xModal from "./seo_modal";
export default {
  name: "seo",
  components: {
    xModal
  },
  data() {
    return {
      id:'',
      mhpassid:'',
      queryFrom: {},
      pageObj: {
        pageNo: 1,
        pageSize: 10,
        totalCount: 0
      },
      data: {},
      modalShow: false,
      tableData: [],
      isEdit: false
    };
  },
  methods: {
    btn_add(){
      this.isEdit = true;
      this.modalShow=true;
      this.mhpassid=this.$route.params.id; 
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
      this.data = {};
      this.isEdit = false;
      this.modalShow = false;
    },
    btn_detail(row, edit) {
      this.data = row;
      if (edit) {
        this.isEdit = true;
      }
      this.modalShow = true;
    },
    btn_search(pageNo) {
      if (pageNo) {
        this.pageObj.pageNo = pageNo;
      }
      let obj = Object.assign({}, this.queryFrom, this.pageObj);
      getSEO(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.tableData = data.msg.data.map(d => {
            d.xzqhCodeList = (d.xzqhcode && d.xzqhcode.split(",")) || [];
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
          delSEO(row.id).then(res => {
            this.handleRes(res);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.pageObj.mhid = this.id;
    this.btn_search();
  }
};
</script>
