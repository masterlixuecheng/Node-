<template>
  <div class="apppzAdd">
    <el-form :model="formData" ref="form" label-width="150px" :rules="rules">
      <el-form-item label="名称" prop="mc">
        <el-input v-model="formData.mc"></el-input>
      </el-form-item>
      <el-form-item label="logo">
        <el-button size="small" type="danger" @click="btn_clear('logo')">清除logo</el-button>
        <logo-upload :action="action" v-model="formData.logo"></logo-upload>
      </el-form-item>
      <el-form-item label="初始化图片">
        <el-button size="small" type="danger" @click="btn_clear('cshtp')">清除初始化图片</el-button>
        <logo-upload :action="action" v-model="formData.cshtp"></logo-upload>
      </el-form-item>
      <el-form-item label="轮播图片">
        <el-button size="small" type="danger" @click="btn_clear('lbt')">清除轮播图片</el-button>
        <logo-upload :action="action" v-model="lbt[0]"></logo-upload>
        <logo-upload :action="action" v-model="lbt[1]"></logo-upload>
        <logo-upload :action="action" v-model="lbt[2]"></logo-upload>
      </el-form-item>
      <el-form-item label="所属区域">
        <el-cascader id="xzqh" :options="options" v-model="a" change-on-select @change="handleItemChange" :props="props" clearable></el-cascader>
       </el-form-item>
       <el-form-item label="级别">
        <el-select v-model="formData.jb" placeholder="请选择" clearable>
          <el-option label="省" value="0"></el-option>
          <el-option label="市" value="2"></el-option>
          <el-option label="县" value="4"></el-option>
          <el-option label="乡" value="6"></el-option>
          <el-option label="村" value="9"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否分站" prop="mhurllb">
          <el-switch v-model="sffz"  active-text="启用" inactive-text="关闭" @change="changeUrl"></el-switch>
      </el-form-item>

      <el-form-item label="界面风格">
          <el-color-picker v-model="color1"></el-color-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="btn_save" v-if="isEdit">确定</el-button>
        <el-button @click="btn_back">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getApppz, addApppz, setApppz } from "@/api/settings/apppz";
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
export default {
  name: "apppzadd",
  data() {
    return {
      a:[],
      lbt:[],
      sffz:false,
      id: "",
      isEdit: false,
      formData: {},
      color1: '#333333',
      rules: {
        mc: [{ required: true, message: "不能为空" }],
        jb: [{ required: true, message: "不能为空"}],
      },
      options: [],
      props: {
        value: "code",
        label: "name"
      },
      action: "/mhxx/file/ajax/upload_file"
    };
  },
  methods: {
    changeUrl(val){
      if(val){
        this.formData.sffz = '1';
        // setApppz(this.formData).then(res => {
        //   this.handleRes(res);
        // }); 
      } else{
        this.formData.sffz = '0';

        // setApppz(this.formData).then(res => {
        //   this.handleRes(res);
        // });
      }
    },
    btn_save() { 
      this.formData.lbt = this.lbt.toString();
      let _this = this;
      this.$refs.form.validate(valid => {
        if (valid) {
          this.formData.sffz = this.sffz ? '1' : '0';
        //   console.log(this.formData);
          // this.formData.xzcode=JSON.stringify(this.a) ;
          this.formData.xzqhList = this.a ;
          this.formData.jb =  this.formData.jb;
          this.formData.jmfg = this.color1;
          this.formData.by2 = document.getElementById("xzqh").innerText.replace(">", "").replace(/\s+/g,""); 
          if (this.formData.id) {
            setApppz(this.formData).then(res => {
              _this.handleRes(res,'back');
            });
          } else {
            addApppz(this.formData).then(res => {
              _this.handleRes(res,'back');
            });
          }
        }
      });
    },
    btn_clear(val) {
      if (val == "logo") {
        this.formData.logo = "";
      } else if (val == "cshtp") {
        this.formData.cshtp = "";
      }  else if (val == "lbt") {
        this.lbt = [];
      }
    },
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        if(type == 'back'){ 
          this.$message({
            message: data.msg,
            type: "success"
          });
          this.btn_back();
        }else{
          this.$message({
            message: this.sffz ? '启用成功' : '关闭成功',
            type: "success"
          });
        }
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    btn_back() {
      this.$router.push({ name: "apppz" });
    },
    getApppz() {
      getApppz(this.id).then(res => {
        let data = res.data;
        if (data.success) {
          this.formData = data.msg;
          this.sffz = this.formData.sffz == '1' ? true : false;
          this.lbt = this.formData.lbt.split(',');
          this.a = this.formData.xzqhList || [];
          if(this.a.length>0){
            this.getSuperiorXzqh(this.a[this.a.length - 1]);
          }
        }
      });
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
    this.id = this.$route.params.id;
    this.isEdit = this.$route.params.isEdit;
    this.options = JSON.parse(sessionStorage.getItem("xzqhList"));
    if (this.id != "-1") {
      this.getApppz();
    }else{
      this.getRegion();
    }
  }
};
</script>
<style lang="scss" scoped>
.apppzAdd {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
