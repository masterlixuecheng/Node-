<template>
  <el-dialog title="项目号配置" :visible.sync="dialogVisible" width="60%" :before-close="handleClose" id="serialNumber_modal">
    <el-scrollbar>
      <el-form :model="formData" ref="form" label-width="100px" :rules="rules">
        <el-form-item label="标题" prop="kz2">
          <el-input v-model="formData.kz2"></el-input>
        </el-form-item>
        <el-form-item label="所属区域" prop="xzqh">
        <el-cascader style="width:100%" id="xzqhInner" :options="options" v-model="formData.xzqh" change-on-select @change="handleItemChange" :props="props" clearable></el-cascader>
        </el-form-item> 
        <el-row>
          <el-col :span="12">
            <el-form-item label="区域简称" prop="qyjc">
              <el-input v-model="formData.qyjc"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" >
            <el-form-item label="当前序列">
              <el-input v-model="formData.dqxl" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>  
        <el-form-item label="权利类别" prop="qllb"> 
          <el-select v-model="formData.qllb" class="f80" placeholder="请选择权利类别">
            <el-option label="产权" value="CQ"></el-option>
            <el-option label="林权" value="LQ"></el-option>
            <el-option label="股权" value="GQ"></el-option>
            <el-option label="其它" value="DQ"></el-option> 
        </el-select>
          <el-input v-model="formData.qllb"  disabled class="f20" ></el-input> 
        </el-form-item>
        <el-form-item label="项目类型" prop="kz1"> 
          <el-select v-model="formData.kz1" class="f80" placeholder="请选择项目类型">
            <el-option label="需求" value="R"></el-option>
            <el-option label="供应" value="S"></el-option> 
        </el-select>
          <el-input v-model="formData.kz1" disabled class="f20"></el-input> 
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" :rows="4" v-model="formData.kz3"></el-input>
        </el-form-item> 
        <el-form-item v-show="isEdit">
              <el-button type="primary" @click="btn_save">保 存</el-button>
              <el-button @click="handleClose">取 消</el-button>
        </el-form-item> 
        
      </el-form>
    </el-scrollbar>
  </el-dialog>
</template>
<script> 
import {selectSerialById, addSerial, updateSerial } from "@/api/settings/SerialNumber";
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
export default {
  name: "serial_modal",
  data() {  
    return {
      dialogVisible: false,
      formData: {
        xzqh:[],
      },
      rules: {
        kz2: [{required: true,message: "请输入标题"}], 
        kz1: [{required: true,message: "请选择项目类型"}], 
        qllb: [{required: true,message: "请选择权利类别"}],  
        qyjc: [{required: true,message: "请输入区域简称"}], 
        xzqh: [{required: true,message: "请选择所属区域"}], 
      },
      options: [],
      props: {
        value: "code",
        label: "name"
      }
    };
  },
  props: {
    isEdit: Boolean,
    modalShow: Boolean,
    data: {
      default: () => {}
    }
  },
  watch: {
    modalShow(val) {
      this.formData = Object.assign({}, this.data);
      if(this.data.id){
         if(this.data.xzqh.length>0){
            this.getSuperiorXzqh(this.data.xzqh[this.data.xzqh.length - 1]);
          }
      }else {
        this.getRegion();
      }
      // this.formData.token = this.$store.getters.token;
      // if (this.$refs.editor) {
      //   this.$refs.editor.setContent(this.formData.content || "");
      // }
      this.dialogVisible = val;
    }
  },
  methods: {
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        this.handleClose();
        this.$emit("edit");
        this.$message({
          message: data.msg,
          type: "success"
        });
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    btn_save() {
      let _this = this;
      if (_this.formData.id) {
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData);
            obj.xzqh = obj.xzqh.join(','); 
            obj.kz5 = document.getElementById("xzqhInner").innerText.replace(">", "").replace(/\s+/g,"");
            updateSerial(obj).then(res => {
              _this.handleRes(res);
            });
          }
        });
      } else { 
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData);
            obj.xzqh = obj.xzqh.join(','); 
            obj.kz5 = document.getElementById("xzqhInner").innerText.replace(">", "").replace(/\s+/g,"");
            addSerial(obj).then(res => {
              _this.handleRes(res);
            });
          }
        });
      }
    },
    handleClose() {
      this.$refs.form.resetFields();
      this.formData = {};
      this.$emit("close");
    },
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
  },
  mounted() {
  }
};
</script>
<style lang="scss">
#serialNumber_modal .el-scrollbar__wrap {
  overflow-x: hidden;
  height: 60vh; 
} 
#serialNumber_modal{
  .f80{
    width:80%;
    float:left;
  }
  .f20{
    width:20%;
    float:left;
  }
}
  
</style>

