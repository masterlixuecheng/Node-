<template>
  <div class="bmgl">
    <el-form :inline="true" :model="queryFrom">
      <el-form-item label="模板名称">
        <el-input v-model="queryFrom.mbname" placeholder="模板名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="btn_search">查询</el-button>
        <el-button type="success" icon="el-icon-plus" v-permission="'wend_add'" @click="btn_detail('','edit')">添加模板</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
      <el-table-column prop="mbname" label="模板名称"></el-table-column>
      <el-table-column prop="mblx" label="模板类型" :formatter="lxFormatter"></el-table-column>
      <el-table-column prop="lzfs" label="流转方向" :formatter="fxFormatter"></el-table-column>
      <el-table-column prop="address" label="操作" width="230">
        <template slot-scope="scope">
          <el-button plain size="mini" type="success" @click="btn_detail(scope.row)">查看</el-button>
          <el-button plain size="mini" type="warning" v-permission="'wend_edit'" @click="btn_detail(scope.row,'edit')">修改</el-button>
          <el-button plain size="mini" type="danger" v-permission="'wend_del'" @click="btn_del(scope.row)">删除</el-button>
          <!-- <el-button plain size="mini" type="primary" v-permission="'wend_open'" @click="btn_open(scope.row)">{{scope.row.sffb=='0'?'启用':'未启用'}}</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @current-change="handleCurrentChange" :current-page.sync="pageObj.pageNo" :page-size="pageObj.pageSize" layout="total, prev, pager, next" :total="pageObj.totalCount"></el-pagination>
  </div>
</template>
<script>
import { getWdmbList, delWdmb, openWdmb } from "@/api/settings/wend";
export default {
  name: "wend",
  data() {
    return {
      queryFrom: {},
      pageObj: {
        pageNo: 1,
        pageSize: 10,
        totalCount: 0
      },
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
    lxFormatter(row, column) {
      return { 
        "0": "合同", 
        "1": "鉴证书", 
        "2": "报名承诺函",
        "3": "竞价须知", 
        "4": "他项权证", 
        "5": "经营权证", 
        "6": "消息提醒",
        "7": "服务条款",
        "8": "用户须知",
        "9": "隐私相关政策",
        }[row.mblx];
    },
    fxFormatter(row, column) {
      return { "1": "转出", "2": "需求", "3": "招标" }[row.lzfs];
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
      this.$router.push({
        name: "wendDetail",
        params: { isEdit: this.isEdit, id: (row && row.id) || "-1" }
      });
    },
    btn_search() {
      let obj = Object.assign({}, this.queryFrom, this.pageObj);
      getWdmbList(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.tableData = data.msg.data;
          this.pageObj.totalCount = data.msg.totalCount;
        }
      });
    },
    btn_open(row) {
      openWdmb(row.id, row.mblx).then(res => {
        let data = res.data;
        if (data.success) {
          this.handleRes(res);
        }
      });
    },
    btn_del(row) {
      // if(row.id == 47 ){
      //   alert('他项权证模板，不可删除！')
      //   return false
      // }
      this.$confirm("你确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        delWdmb(row.id).then(res => {
          this.handleRes(res);
        });
      });
    }
  },
  mounted() {
    this.btn_search();
  }
};
</script>
