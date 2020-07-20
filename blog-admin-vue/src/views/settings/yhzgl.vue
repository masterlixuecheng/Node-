<template>
  <div class="bmgl">
    <el-form :inline="true" :model="queryForm">
      <el-form-item label="名称">
        <el-input v-model="queryForm.deptname"></el-input>
      </el-form-item>
      <el-form-item label="地区">
        <el-cascader
          :options="options"
          v-model="queryForm.areaList"
          change-on-select
          @change="handleItemChange"
          :props="props"
          clearable
        ></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="bm_search(1)">查询</el-button>
        <el-button
          type="success"
          icon="el-icon-plus"
          v-permission="'bmgl_add'"
          @click="isEdit = true;bmModal=true"
        >添加</el-button>
        <!-- <el-button type="warning" icon="el-icon-setting" @click="authModal=true">批量设置权限</el-button> -->
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
      <el-table-column prop="deptname" label="名称"></el-table-column>
      <el-table-column prop="areaname" label="地区"></el-table-column>
      <el-table-column prop="description" label="备注"></el-table-column>
      <el-table-column prop="address" label="操作" width="320">
        <template slot-scope="scope">
          <el-button plain size="mini" type="success" @click="bm_detail(scope.row)">查看</el-button>
          <el-button
            plain
            size="mini"
            type="warning"
            v-permission="'bmgl_edit'"
            @click="bm_detail(scope.row,'edit')"
          >修改</el-button>
          <el-button
            plain
            size="mini"
            type="danger"
            v-permission="'bmgl_del'"
            @click="bm_del(scope.row)"
          >删除</el-button>
          <el-button
            plain
            size="mini"
            type="primary"
            v-permission="'bmgl_people'"
            @click="bm_account(scope.row)"
          >关联用户</el-button>
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
    <bmModal :bmModal="bmModal" :data="bmData" :isEdit="isEdit" @close="close" @edit="bm_search"></bmModal>
    <peoModal
      :modalShow="peoModal"
      :id="peoId"
      :areacode="areacode"
      @close="close"
      @edit="bm_search"
    ></peoModal>
  </div>
</template>
<script>
import { getBm, delBm } from "@/api/settings/yhzgl";
import bmModal from "./yhzgl_modal";
import peoModal from "./yhzgl_people_modal";
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
export default {
  name: "yhzgl",
  components: {
    bmModal,
    peoModal
  },
  data() {
    return {
      queryForm: {},
      multipleSelection: [],
      pageObj: {
        pageNo: 1,
        pageSize: 10,
        totalCount: 0
      },
      bmData: {},
      bmModal: false,
      authModal: false,
      peoModal: false,
      isEdit: false,
      authId: "",
      peoId: "",
      tableData: [],
      options: [],
      props: {
        value: "code",
        label: "name"
      },
      areacode: ""
    };
  },
  methods: {
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
      let code = "";
      let currentCode = val || "0";
      if (typeof val != "string") {
        currentCode = val[val.length - 1]; //非首次加载，获取当前最后一位行政区划，作为参数传递
        code = currentCode;
      } else {
        code = currentCode; //首次加载
      }
      getNextRegion(code).then(res => {
        let data = res.data;
        if (data) {
          if (code.length == 9) {
            //删除村的children
            data.map(d => {
              delete d.children;
            });
          }
          _this.options = moreMenu(
            currentCode,
            _this.options,
            handleNextCode(code, sessionStorage.getItem("xzqhOfLastUser"), data)
          );
        }
      });
    },
    bm_search(pageNo) {
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
    handleCurrentChange(val) {
      this.$nextTick(() => {
        this.bm_search();
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    indexMethod(index) {
      let start = (this.pageObj.pageNo - 1) * this.pageObj.pageSize;
      return start + index + 1;
    },
    close() {
      this.peoId = "";
      this.authId = "";
      this.bmData = {};
      this.isEdit = false;
      this.bmModal = false;
      this.authModal = false;
      this.peoModal = false;
    },
    bm_detail(row, edit) {
      this.bmData = row;
      if (edit) {
        this.isEdit = true;
      }
      this.bmModal = true;
    },
    bm_authManage(row) {
      this.authId = row.id;
      this.authModal = true;
    },
    bm_account(row) {
      this.peoId = row.id;
      this.areacode = row.areacode;
      this.peoModal = true;
    },
    bm_del(row) {
      this.$confirm("你确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delBm(row.id).then(res => {
            let data = res.data;
            if (data.success) {
              this.$message({
                message: data.msg,
                type: "success"
              });
              this.bm_search();
            } else {
              this.$message({
                message: data.msg
              });
            }
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
    this.getRegion();
    this.bm_search();
  }
};
</script>
