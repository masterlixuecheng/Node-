<template>
  <div class="bmgl">
    <el-form :inline="true" :model="queryForm">
      <el-form-item label="账号">
        <el-input v-model="queryForm.username" placeholder="请输入账号" clearable></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="queryForm.nickname" placeholder="请输入姓名" clearable></el-input>
      </el-form-item>
      <el-form-item label="地区">
        <el-cascader :options="options" v-model="queryForm.xzqhList" change-on-select @change="handleItemChange" :props="props" clearable></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="btn_search(1)">查询</el-button>
        <el-button type="success" icon="el-icon-plus" v-permission="'zhgl_add'" @click="isEdit = true;modalShow=true;editType='editInfoAndPwd'">添加员工</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
      <el-table-column prop="username" label="账号"></el-table-column>
      <el-table-column prop="nickname" label="姓名"></el-table-column>
      <el-table-column prop="tel" label="电话"></el-table-column>
      <!-- <el-table-column prop="stauts" label="状态" :formatter="ztFormatter"></el-table-column> -->
      <el-table-column prop="sjbh" label="登录次数"></el-table-column>
      <el-table-column prop="address" label="操作" width="350">
        <template slot-scope="scope">
          <el-button plain size="mini" type="success" @click="btn_detail(scope.row,'editInfo')">查看</el-button>
          <el-button plain size="mini" type="warning" v-permission="'zhgl_edit'" @click="btn_detail(scope.row,'editInfo')">修改信息</el-button>
          <el-button plain size="mini" type="primary" v-permission="'zhgl_edit_password'" @click="btn_detail(scope.row,'editPassword')">修改密码</el-button>
          <el-button plain size="mini" type="danger" v-permission="'zhgl_del'" @click="btn_del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @current-change="handleCurrentChange" :current-page.sync="pageObj.pageNo" :page-size="pageObj.pageSize" layout="total, prev, pager, next" :total="pageObj.totalCount"></el-pagination>
    <xModal :modalShow="modalShow" :data=data :isEdit="isEdit" :editType="editType" @close="close" @edit="btn_search"></xModal>
  </div>
</template>
<script>
import { userSearch, userByid, userDel } from "@/api/settings/zhgl";
import xModal from "./zhgl_modal";
import { getToken } from "@/utils/auth";
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
export default {
  name: "zhgl",
  components: {
    xModal
  },
  data() {
    return {
      editType:'',
      queryForm: {},
      pageObj: {
        pageNo: 1,
        pageSize: 10,
        totalCount: 0
      },
      data: {},
      modalShow: false,
      tableData: [],
      isEdit: false,
      options: [],
      props: {
        value: "code",
        label: "name"
      }
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
        this.editType = edit;
        this.isEdit = true;
      }
      this.modalShow = true;
    },
    btn_search(pageNo) {
      if (pageNo) {
        this.pageObj.pageNo = pageNo;
      }
      let obj = Object.assign({}, this.queryForm, this.pageObj);
      obj.token = getToken();
      userSearch(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.tableData = data.data.map(d => {
            d.xzqhList = (d.xzqh && d.xzqh.split(",")) || [];
            return d;
          });
          this.pageObj.totalCount = data.totalCount;
        }
      });
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
    this.getRegion();
    this.btn_search();
  }
};
</script>
