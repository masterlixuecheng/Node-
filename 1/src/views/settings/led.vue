<template>
  <div class="bmgl">
    <el-form :inline="true" :model="queryFrom">
      <el-form-item label="名称">
        <el-input v-model="queryFrom.name" placeholder="名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="btn_search">查询</el-button>
        <el-button
          type="success"
          icon="el-icon-plus"
          v-permission="'led-add'"
          @click="isEdit = true;modalShow=true"
        >添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
      <el-table-column prop="name" label="标题"></el-table-column>
      <el-table-column prop="kz1" label="所属区划"></el-table-column>
      <el-table-column prop="timeDev" label="滚动间隔(秒)"></el-table-column>
      <el-table-column prop="createdate" label="创建时间" :formatter="dateFormatter"></el-table-column>
      <el-table-column prop="createname" label="创建人"></el-table-column>
      <el-table-column prop="address" label="操作" width="220">
        <template slot-scope="scope">
          <el-button plain size="mini" type="success" @click="btn_detail(scope.row)">查看</el-button>
          <el-button
            plain
            size="mini"
            type="warning"
            v-permission="'led-update'"
            @click="btn_detail(scope.row,'edit')"
          >修改</el-button>
          <el-button
            plain
            size="mini"
            type="danger"
            v-permission="'led-del'"
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
      :total="totalCount"
    ></el-pagination>
    <xModal :modalShow="modalShow" :data="data" :isEdit="isEdit" @close="close" @edit="btn_search"></xModal>
  </div>
</template>
<script>
import { getLed, delLed } from "@/api/settings/led";
import { getRegion , getRegionByCode} from "@/api/settings/zzjg";
import { handleEmpty } from "@/utils/config";
import { formatDate } from "@/utils/data";
import xModal from "./led_modal";
export default {
  filters: {
    dateFormat(val) {
      return formatDate(val, "yyyy-MM-dd hh:mm:ss");
    }
  }, 
  name: "led",
  components: {
    xModal
  },
  data() {
    return {
      queryFrom: {},
      pageObj: {
        pageNo: 1,
        pageSize: 10,
        token: ""
      },
      totalCount: 0,
      data: {},
      modalShow: false,
      tableData: [],
      isEdit: false,
    };
  },
  methods: {
    dateFormatter(row) {
      return formatDate(row.createdate, "yyyy-MM-dd hh:mm:ss");
    },
    getRegion(val) {
      getRegionByCode(val).then(res => {
        let data = res.data;
        if (data.success) {
          this.options = handleEmpty(data.msg);
        }
      });
    },
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
    close() {
      this.data = {};
      this.isEdit = false;
      this.modalShow = false;
    },
    btn_detail(row, edit) { 
      if (edit) {
        this.data = row;
        this.isEdit = true;
        this.modalShow = true;
      } else {
        this.$router.push({
          name: "bigLED",
          params: {
            time: row.timeDev,
            name: row.name,
            content: row.content,
            ksdate: row.ksdate,
            jsdate: row.jsdate,
            xzcode: row.xzqh
          }
        });
      }
    },
    btn_search() {
      let obj = Object.assign({}, this.queryFrom, this.pageObj);
      getLed(obj).then(res => {
        let data = res.data;
        if (data.success) { 
        this.tableData = data.msg.data.map(d => {
            d.xzqh = (d.xzqh && d.xzqh.split(",")) || [];
            return d;
        });
          this.totalCount = data.msg.totalCount;
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
          delLed(row.id, this.$store.getters.token).then(res => {
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
    handleChange(value) { 
    }
  },
  mounted() {
    this.pageObj.token = this.$store.getters.token;
    this.btn_search();
  }
};
</script>
