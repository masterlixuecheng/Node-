<template>
  <div class="bmgl">
    <el-form :inline="true" :model="queryFrom">
      <el-form-item label="友链名称">
        <el-input v-model="queryFrom.ljname" placeholder="友链名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="btn_search">查询</el-button>
        <el-button type="success" icon="el-icon-plus" @click="btn_detail('','edit')">创建友链</el-button>
        <el-button type="info" icon="el-icon-back" @click="$router.push({ name: 'mhxx' })">返回</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
      <el-table-column prop="ljname" label="链接名称"></el-table-column>
      <el-table-column prop="ljurl" label="链接URL"></el-table-column>
      <el-table-column prop="ljlogo" label="链接LOGO" width="220">
        <template slot-scope="scope">
          <img class="table_img" :src="baseUrl + scope.row.ljlogo" v-if="scope.row.ljlogo" style="width:220px">
        </template>
      </el-table-column>
      <el-table-column prop="ljqz" label="链接权重"></el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button plain size="mini" type="warning" @click="btn_detail(scope.row,'edit')">修改</el-button>
          <el-button plain size="mini" type="danger" @click="btn_del(scope.row)">删除</el-button>
          <el-button plain size="mini" type="primary" @click="btn_share(scope.row)">共享</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @current-change="handleCurrentChange" :current-page.sync="pageObj.pageNo" :page-size="pageObj.pageSize" layout="total, prev, pager, next" :total="pageObj.totalCount"></el-pagination>
    <xModal :modalShow="modalShow" :data="data" :isEdit="isEdit" @close="close" @edit="btn_search"></xModal>
    <shareModal :shareShow="shareShow" :yqljid="yqljid" @close="close" @edit="btn_search"></shareModal>
  </div>
</template>
<script>
import { getYqlj, delYqlj } from "@/api/settings/yqlj";
import xModal from "./yqlj_modal";
import shareModal from "./yqlj_share_modal";
export default {
  name: "yqlj",
  components: {
    xModal,
    shareModal
  },
  data() {
    return {
      id: "",
      yqljid: "",
      queryFrom: {},
      pageObj: {
        mhid: "",
        pageNo: 1,
        pageSize: 10,
        totalCount: 0
      },
      data: {},
      modalShow: false,
      shareShow: false,
      tableData: [],
      isEdit: false,
      baseUrl: process.env.DOWNLOAD_URL
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
    close() {
      this.data = {};
      this.yqljid = "";
      this.isEdit = false;
      this.modalShow = false;
      this.shareShow = false;
    },
    btn_detail(row, edit) {
      this.data = Object.assign({}, row);
      this.data.mhid = this.id;
      if (edit) {
        this.isEdit = true;
      }
      this.modalShow = true;
    },
    btn_search() {
      let obj = Object.assign({}, this.queryFrom, this.pageObj);
      getYqlj(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.tableData = data.msg.data;
          this.pageObj.totalCount = data.msg.totalCount;
        }
      });
    },
    btn_share(row) {
      this.yqljid = row.id;
      this.shareShow = true;
    },
    btn_del(row) {
      this.$confirm("你确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delYqlj(row.id).then(res => {
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
<style lang="scss" scoped>
.bmgl {
  .table_img {
    position: absolute;
    top: 1px;
    width: 50px;
    height: 50px;
  }
}
</style>
