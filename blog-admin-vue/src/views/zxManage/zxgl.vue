<template>
  <div class="zxglList">
    <el-form :inline="true" :model="queryFrom">

      <el-form-item label="标题">
        <el-input v-model="queryFrom.keyword" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="btn_search(1)">查询</el-button>
        <el-button type="success" icon="el-icon-plus" @click="btn_add()">添加</el-button>
        <!-- <el-button type="warning" icon="el-icon-setting" @click="btn_share">批量分享</el-button> -->
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="序号" width="60"></el-table-column>
      <el-table-column prop="title" show-overflow-tooltip label="标题"></el-table-column>
      <el-table-column prop="author" show-overflow-tooltip label="创建人"></el-table-column>
      <el-table-column prop="content" show-overflow-tooltip label="内容"></el-table-column>
      <el-table-column prop="createtime" :formatter="dateFormatter" show-overflow-tooltip label="创建时间"></el-table-column>
      <el-table-column prop="address" label="操作" width="260">
        <template slot-scope="scope">
          <el-button plain size="mini" type="primary" @click="btn_look(scope.row)">查看</el-button>
          <el-button plain size="mini" type="success" @click="btn_detail(scope.row)">修改</el-button>
          <el-button plain size="mini" type="danger" @click="btn_del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @current-change="handleCurrentChange" :current-page.sync="pageObj.pageNo" :page-size="pageObj.pageSize" layout="total, prev, pager, next"
      :total="pageObj.totalCount"></el-pagination>
  </div>
</template>
<script>
  import {
    mapGetters
  } from "vuex";
  import {
    formatDate
  } from "@/utils/data";
  import { postMethod, getMethod} from "@/api/zxManage/zxgl";
  export default {
    name: "zxgl",
    components: {},
    data() {
      return {
        rizhiShow: false,
        lmIds: "",
        queryFrom: {},
        pageObj: {
          pageNo: 1,
          pageSize: 50
        },
        tableData: [],
        multipleSelection: [],
        options: [],
        lmOptions: [],
        checkId: "",
        checkShow: false,
      };
    },
    methods: {
      btn_preview(row) {
        let {
          href
        } = this.$router.resolve({
          name: "zxglPreview",
          params: {
            id: row.id
          }
        });
        window.open(href, '_blank');
      },
      close() {
        this.checkId = "";
        this.rizhiShow = false;
        this.btn_search();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
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
      dateFormatter(row, column) {
        return formatDate(row.createtime);
      },
      handleRes(res, type) {
        let data = res.data;
        if (data.success) {
          this.$message({
            message: data.msg || "操作成功",
            type: "success"
          });
          this.btn_search();
        } else {
          this.$message({
            message: data.msg
          });
        }
      },
      //添加
      btn_add() {
        this.$router.push({
          name: "zxglDetail",
          params: {
            id: "-1",
            name: this.$route.name,
            parent: 0,
            isEdit: true,
            operation: false
          }
        });
      },
      //查看
      btn_look(row) {
        // let {
        //   href
        // } = this.$router.resolve({
        //   name: "zxglDetail",
        //   params: {
        //     id: (row && row.id) || "-1",
        //     name: this.$route.name,
        //     parent: 0,
        //     isEdit: false,
        //     operation: false
        //   }
        // });
        // window.open(href, '_blank');
        this.$router.push({
          name: "zxglDetail",
          params: {
            id: (row && row.id) || "-1",
            name: this.$route.name,
            parent: 0,
            isEdit: false,
            operation: true
          }
        });
      },
      //修改
      btn_detail(row) {
        if (row.taskZt == "1" && this.type != "0") {
          this.$message.error("工作流已开启, 请先撤回后再修改");
          return;
        }
        this.$router.push({
          name: "zxglDetail",
          params: {
            id: (row && row.id) || "-1",
            name: this.$route.name,
            parent: 0,
            isEdit: (row && row.taskZt == "0") || true,
            operation: true
          }
        });

        // let {href} = this.$router.resolve({
        //   name: "zxglDetail",
        //   params: {
        //     id: (row && row.id) || "-1",
        //     name: this.$route.name,
        //     parent: 0,
        //     isEdit: (row && row.taskZt == "0") || true,
        //     operation: true
        //   }
        // }); 
        // window.open(href, '_blank');
      },
      btn_search(pageNo) {
        let obj = Object.assign({}, this.pageObj)
        if (this.queryFrom.keyword) {
          obj.keyword = this.queryFrom.keyword
        }
        postMethod('/blog/list', obj).then(res => {
          let data = res.data;
          if (data.success) {
            this.tableData = data.dataList;
            this.pageObj.totalCount = data.totalCount;
          }
        });
      },
      btn_del(row) {
        this.$confirm("你确定删除吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          let obj = {
            id: row.id
          }
          getMethod('/blog/del', obj).then(res => {
            this.handleRes(res);
          });
        });
      },
    },
    computed: {
      ...mapGetters(["xzqh", "userId", "type"])
    },
    mounted() {
      this.btn_search();
    }
  };

</script>
<style lang="scss">
  .zxglList {
    .activeButton {
      background: url("../../assets/images/duihao.png") no-repeat #fdf6ec top right;
    }
  }

</style>
