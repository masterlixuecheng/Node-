<template>
  <div class="bmgl">
    <el-form :inline="true" :model="queryFrom">
      <el-form-item>
        <el-button type="primary" icon="el-icon-plus" v-permission="'xxmb_add'" @click="isEdit = true;modalShow=true">添加消息模板</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
      <el-table-column prop="xxlx" label="类型" :formatter="lxFormatter"></el-table-column>
      <el-table-column prop="xxzt" label="消息主题"></el-table-column>
      <el-table-column prop="zt" label="状态">
        <template slot-scope="scope">
          <el-tag size="small" :type="scope.row.zt?'success':'danger'">{{scope.row.zt?"已激活":"未激活"}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作" width="240">
        <template slot-scope="scope">
          <el-button plain size="mini" type="success" @click="btn_detail(scope.row)">查看</el-button>
          <el-button plain size="mini" type="warning" v-permission="'xxmb_edit'" @click="btn_detail(scope.row,'edit')">修改</el-button>
          <el-button plain size="mini" type="danger" v-permission="'xxmb_del'" @click="btn_del(scope.row)">删除</el-button>
          <!-- <el-button plain size="mini" type="primary" @click="btn_del(scope.row)">{{scope.row.zt?"取消激活":"激活"}}</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @current-change="handleCurrentChange" :current-page.sync="pageObj.pageNo" :page-size="pageObj.pageSize" layout="total, prev, pager, next" :total="pageObj.totalCount"></el-pagination>
    <xModal :modalShow="modalShow" :data=data :isEdit="isEdit" @close="close" @edit="btn_search"></xModal>
  </div>
</template>
<script>
import { getXxmb, delXxmb } from "@/api/settings/xxmb";
import xModal from "./xxmb_modal";
export default {
  name: "xxmb",
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
      this.btn_search();
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
      return { "1": "短信", "2": "微信" }[row.xxlx];
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
    btn_search() {
      let obj = Object.assign({}, this.queryFrom, this.pageObj);
      getXxmb(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.tableData = data.msg.data;
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
          delXxmb(row.id).then(res => {
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
