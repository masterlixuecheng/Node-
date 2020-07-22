<template>
  <div class="bmgl">
    <el-form :inline="true" :model="queryFrom">
      <el-form-item label="任务名称">
        <el-select v-model="queryFrom.taskName" placeholder="请选择" clearable>
          <el-option v-for="item in options" :key="item.name" :label="item.name" :value="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="btn_search(1)">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" align="center" >
      <el-table-column type="index" :index="indexMethod" label="序号" width="60"></el-table-column>
      <el-table-column prop="title" show-overflow-tooltip label="标题"></el-table-column>
      <el-table-column prop="keywords" show-overflow-tooltip label="关键字"></el-table-column>
      <el-table-column prop="source" show-overflow-tooltip label="来源"></el-table-column>
      <el-table-column prop="createdtime" label="创建时间" :formatter="dateFormatter"></el-table-column>
      <el-table-column prop="address" label="操作" width="160">
        <template slot-scope="scope">
          <el-button plain size="mini" type="success" @click="btn_detail(scope.row)">查看</el-button>
          <el-button plain size="mini" type="warning" v-permission="'zxgl_task'" @click="btn_check(scope.row)">{{scope.row.taskName}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @current-change="handleCurrentChange" :current-page.sync="pageObj.pageNo" :page-size="pageObj.pageSize" layout="total, prev, pager, next" :total="totalCount"></el-pagination>
    <checkModal :modalShow="checkShow" :id="checkId" @close="close"></checkModal>
    <bacCheckModal :modalShow="bacheckShow" :id="checkId" @close="close"></bacCheckModal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { formatDate } from "@/utils/data";
import checkModal from "./zxgl_check_modal";
import bacCheckModal from "./zxgl_beian_check_modal";
import { getProcess, getProSelect, processSh, proUpStatus } from "@/api/zxManage/myTask";
export default {
  name: "myTask",
  components: {
    checkModal,
    bacCheckModal
  },
  data() {
    return {
      processId: process.env.PROCESS_ID,
      queryFrom: {},
      pageObj: {
        pageNo: 1,
        pageSize: 10,
        userId: "",
        bussinesskey: "newId"
      },
      totalCount: 0,
      tableData: [],
      options: [],
      checkId: "",
      bacheckShow:false,
      checkShow: false
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
    close() {
      this.checkId = "";
      this.checkShow = false;
      this.bacheckShow = false;
      this.btn_search();
    },
    ztFormatter(row, column) {
      return {
        created: "已创建",
        requested: "已上报",
        approved: "已通过",
        rejected: "已驳回",
        published: "已发布",
        withdrawed: "已撤回"
      }[row.status];
    },
    dateFormatter(row, column) {
      return formatDate(row.createdtime);
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
    //申请,审核,发布
    btn_check(row) {
      if (row.taskName == "审核") {
        this.checkId = row.taskId;
        this.checkShow = true;
      } else if(row.taskName == "备案") {
        this.checkId = row.taskId;
        this.bacheckShow = true;
      }else {
        let obj = {};
        obj.taskId = row.taskId;
        obj.userId = this.userId;
        processSh(obj).then(res => {
          this.handleRes(res);
          proUpStatus(row.id);
        });
      }
    },
    //详情
    btn_detail(row) {
      this.$router.push({
        name: "zxglDetail",
        params: {
          id: row.id,
          name: this.$route.name,
          parent: row.parentNewsTypeId,
          isEdit: false
        }
      });
    },
    btn_search(pageNo) {
      if (pageNo) {
        this.pageObj.pageNo = pageNo;
      }
      let obj = Object.assign({}, this.queryFrom, this.pageObj);
      getProcess(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.tableData = data.list;
          this.totalCount = data.count;
        }
      });
    },
    btn_del(row) {
      this.$confirm("你确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        delXw(row.id).then(res => {
          this.handleRes(res);
        });
      });
    },
    getProSelect() {
      getProSelect(this.processId).then(res => {
        let data = res.data;
        if (data.success) {
          this.options = data.list;
        }
      });
    }
  },
  computed: {
    ...mapGetters(["xzqh", "userId"])
  },
  mounted() {
    this.pageObj.userId = this.userId;
    this.getProSelect();
    this.btn_search();
  }
};
</script>
