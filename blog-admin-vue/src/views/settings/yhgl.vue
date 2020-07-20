<template>
  <div class="bmgl">
    <el-form :inline="true" :model="queryFrom">
      <el-form-item label="姓名">
        <el-input v-model="queryFrom.nickname" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="queryFrom.tel" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <!-- <el-form-item label="状态">
        <el-select v-model="queryFrom.stauts" clearable placeholder="请选择状态">
          <el-option label="正常" value="1"></el-option>
          <el-option label="不正常" value="0"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="btn_search(1)">查询</el-button>
        <el-button type="success" icon="el-icon-plus" v-permission="'yhgl_add'" @click="isEdit = true;modalShow=true">添加用户</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="序号" width="60"></el-table-column>
      <el-table-column prop="nickname" label="姓名"></el-table-column>
      <el-table-column prop="tel" label="手机号码"></el-table-column>
      <!-- <el-table-column prop="stauts" label="状态" :formatter="ztFormatter">></el-table-column> -->
      <el-table-column prop="sjbh" label="登录次数"></el-table-column>
      <el-table-column prop="address" label="操作" width="220">
        <template slot-scope="scope">
          <el-button plain size="mini" type="success" @click="btn_detail(scope.row)">查看</el-button>
          <el-button plain size="mini" type="warning" v-permission="'yhgl_edit'" @click="btn_detail(scope.row,'edit')">修改</el-button>
          <el-button plain size="mini" type="danger" v-permission="'yhgl_del'" @click="btn_del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @current-change="handleCurrentChange" :current-page.sync="pageObj.pageNo" :page-size="pageObj.pageSize" layout="total, prev, pager, next" :total="pageObj.totalCount"></el-pagination>
    <xModal :modalShow="modalShow" :data=data :isEdit="isEdit" @close="close" @edit="btn_search"></xModal>
  </div>
</template>
<script>
import { userSearch, userDel } from "@/api/settings/yhgl";
import xModal from "./yhgl_modal";
export default {
  name: "yhgl",
  components: {
    xModal
  },
  data() {
    return {
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
    ztFormatter(row, column) {
      return { "1": "正常", "0": "不正常" }[row.stauts];
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
      userSearch(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.tableData = data.data;
          this.pageObj.totalCount = data.totalCount;
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
          let arr = [];
          arr.push(row.id);
          userDel(arr).then(res => {
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
    this.btn_search();
  }
};
</script>
