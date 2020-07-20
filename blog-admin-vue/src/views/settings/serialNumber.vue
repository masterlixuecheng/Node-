<template>
  <div class="serialNumber">
    <el-form :inline="true" :model="queryFrom">
      <el-form-item label="标题">
        <el-input v-model="queryFrom.kz2" placeholder="名称" clearable></el-input>
      </el-form-item>
      <el-form-item label="所属区域">
        <el-cascader style="width:350px;" id="xzqh" :options="options" v-model="queryFrom.xzqh" change-on-select @change="handleItemChange" :props="props" clearable></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="btn_search">查询</el-button>
        <el-button type="success" icon="el-icon-plus" v-permission="'jiaoy_add'" @click="isEdit = true;modalShow=true">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
      <el-table-column prop="kz2" label="标题"></el-table-column>
      <el-table-column prop="kz5" label="所属区划" width="250" show-overflow-tooltip></el-table-column>
      <el-table-column prop="qyjc" label="区域简称"></el-table-column>
      <el-table-column prop="qllb" label="权利类型" :formatter="qllbMap"></el-table-column>
      <el-table-column prop="kz1" label="项目类型" :formatter="kz1Map"></el-table-column>
      <el-table-column prop="dqxl" label="当前序列"></el-table-column>   
      <el-table-column prop="address" label="操作" width="220">
        <template slot-scope="scope">
          <el-button plain size="mini" type="success" @click="btn_detail(scope.row)">查看</el-button>
          <el-button plain size="mini" type="warning" v-permission="'jiaoy_edit'" @click="btn_detail(scope.row,'edit')">修改</el-button>
          <el-button plain size="mini" type="danger" v-permission="'jiaoy_del'" @click="btn_del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination  @current-change="handleCurrentChange" :current-page.sync="pageObj.pageNo" :page-size="pageObj.pageSize" layout="total, prev, pager, next" :total="totalCount"></el-pagination>
    <xModal :modalShow="modalShow" :data="data" :isEdit="isEdit" @close="close" @edit="btn_search"></xModal>
  </div>
</template>
<script>
import { getLed, delLed } from "@/api/settings/led";
import { findSerialList, delSerial, selectSerialById, addSerial, updateSerial } from "@/api/settings/SerialNumber";
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
import { formatDate } from "@/utils/data";
import xModal from "./serialNumber_modal";
export default {
  filters: {
    dateFormat(val) {
      return formatDate(val, "yyyy-MM-dd hh:mm:ss");
    }
  }, 
  name: "serialNumber",
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
      options: [],
      props: {
        value: "code",
        label: "name"
      },
    };
  },
  methods: {
    qllbMap(row) {
      return { "CQ": "产权", "LQ": "林权", "GQ": "股权", "DQ": "其它" }[row.qllb];
    },
    kz1Map(row) {
      return { "R": "需求", "S": "供应"}[row.kz1];
    },
    dateFormatter(row) {
      return formatDate(row.createdate, "yyyy-MM-dd hh:mm:ss");
    },
    getRegion() {
      getNextRegion(0).then(res => {
        let data = res.data;
        if (data) {
          this.options = data;
        }
      });
    },
    //行政区划-联级查询
    handleItemChange(val) {
      let _this = this;
      let code = '';
      let currentCode = val || '0';
      if (typeof val != "string") {
        currentCode = val[val.length - 1];//非首次加载，获取当前最后一位行政区划，作为参数传递
        code = currentCode;
      } else {
        code = currentCode;//首次加载
      }
      getNextRegion(code).then(res => {
        let data = res.data;
        if (data) {
          if (code.length == 9) {//删除村的children
            data.map(d => {
              delete d.children;
            });
          }
          _this.options = moreMenu(currentCode, _this.options, handleNextCode(code,sessionStorage.getItem("xzqhOfLastUser"),data));
        }
      });
    },
    indexMethod(index) {
      let start = (this.pageObj.pageNo - 1) * this.pageObj.pageSize;
      return start + index + 1;
    },
    handleCurrentChange(val) {
      this.$nextTick( ()=>{
        this.btn_search();
      })
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
        this.isEdit = edit ? true : false
        this.data = row; 
        this.modalShow = true;
    },
    btn_search() {
      let obj = Object.assign({}, this.queryFrom, this.pageObj); 
      if(obj.xzqh){
        obj.xzqh = obj.xzqh[obj.xzqh.length-1]
      }
      findSerialList(obj).then(res => {
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
          delSerial(row.id,).then(res => {
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
    this.getRegion();
    this.btn_search();
  }
};
</script>
<style lang="scss">
  .serialNumber{
    .el-cascader{
      width:330px;
    }
  }
</style> 


