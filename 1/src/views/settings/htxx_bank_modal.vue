<template>
  <el-dialog
    title="划入账户信息"
    :visible.sync="dialogVisible"
    width="60%"
    :before-close="handleClose"
    id="htxxModal"
  >
    <el-scrollbar>
      <el-form :model="formData" ref="form" label-width="200px" :rules="rules">
        <el-form-item label="类型" prop="lx">
          <!-- <el-select v-model="formData.lx" placeholder="请选择" clearable>
            <el-option label="产权" value="产权"></el-option>
            <el-option label="林权" value="林权"></el-option>
            <el-option label="股权" value="股权"></el-option>
            <el-option label="农村小微工程" value="农村小微工程"></el-option>
          </el-select> -->
          <el-input v-model="formData.lx" placeholder="请输入项目分类"></el-input>
        </el-form-item>
        <el-form-item label="所属区划" prop="xzcode">
        <!-- <el-cascader id="xzqh" :options="options" v-model="formData.xzcode" change-on-select @change="handleItemChange" :props="props" clearable></el-cascader> -->
        <el-cascader id="xzqh" :options="options" v-model="formData.xzcode" :props="props"></el-cascader>
        </el-form-item>
        <el-form-item label="账号开户银行" prop="khh">
          <el-input v-model="formData.khh" placeholder="请输入账号开户银行"></el-input>
        </el-form-item>
        <el-form-item label="账号名称" prop="hkr">
          <el-input v-model="formData.hkr" placeholder="请输入账号名称"></el-input>
        </el-form-item>
        <el-form-item label="价款划入账号" prop="c1">
          <el-input v-model="formData.c1" placeholder="请输入价款划入账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="btn_save">确 定</el-button>
          <el-button @click="handleClose">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-scrollbar>
  </el-dialog>
</template>
<script>
import { addBank, updateBank } from "@/api/settings/htxx";
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
export default {
  name: "htxx_bank_modal",
  data() {
    return {
      dialogVisible: false,
      formData: {},
      rules: {
        lx: [{ required: true, message: "请选择类型" }],
        khh: [{ required: true, message: "请输入开户行" }],
        hkr: [{ required: true, message: "请输入开户人" }],
        c1: [{ required: true, message: "请输入开户账号" }],
        xzcode: [{ required: true, message: "请选择所属区划" }]
      },
      options: [],
      props: {
        value: "code",
        label: "name",
        checkStrictly: true,
        lazy: true,
        lazyLoad(node, resolve) {
          const { level, data } = node;
          if (!level) {
            return;
          }
          node.children = [];
          getNextRegion(data.code).then(res => {
            let data = res.data;
            if (data) {
              resolve(data);
            } else {
              resolve([]);
            }
          });
        }
      },
    };
  },
  props: {
    isEdit: Boolean,
    modalShow: Boolean,
    data: {
      default: () => {}
    },
    xtid: ""
  },
  watch: {
    modalShow(val) {
      this.dialogVisible = val;
      if(val){
        this.formData = Object.assign({}, this.data);
        if(this.formData.xzcode.length>0){
          this.getSuperiorXzqh(this.formData.xzcode[this.formData.xzcode.length - 1]);
        }
      }
      
    }
  },
  methods: {
    getSuperiorXzqh(code) {
      getSuperiorXzqh(code).then(res => {
        let data = res.data;
        if (data.success) {
          this.options = handleEmpty(data.msg);
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
    btn_save() {
      let obj = Object.assign({}, this.formData);
      obj.xzcode = obj.xzcode.join(",");
      obj.c2 = document.getElementById("xzqh").getElementsByClassName("el-input__inner")[0].value; 
      this.$refs.form.validate(valid => {
        if (valid) {
          if (obj.xtid) {
            updateBank(obj).then(res => {
              this.handleRes(res);
            });
          } else {
            obj.xtid = this.xtid;
            addBank(obj).then(res => {
              this.handleRes(res);
            });
          }
        }
      });
    },
    handleClose() {
      this.$refs.form.resetFields();
      this.formData = {};
      this.$emit("close");
    },
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        this.$message({
          message: data.msg,
          type: "success"
        });
        this.handleClose();
      } else {
        this.$message({
          message: data.msg
        });
      }
    }
  },
  mounted() {
    this.getRegion();
  }
};
</script>
<style lang="scss">
#htxxModal .el-scrollbar__wrap {
  overflow-x: hidden;
  height: 60vh;
}
</style>

