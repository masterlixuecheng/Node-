<template>
  <el-dialog title="SEO信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <el-form :model="formData" ref="form" label-width="100px" :rules="rules">
      <el-form-item label="标题" prop="bt">
        <el-input v-model="formData.bt"></el-input>
      </el-form-item>
      <el-form-item label="链接地址" prop="mhname">
        <el-input v-model="formData.mhname"></el-input>
      </el-form-item>
      <el-form-item label="区域">
      <el-cascader id="xzqh" :options="options" v-model="formData.xzqhCodeList" change-on-select @change="handleItemChange" :props="props" clearable></el-cascader>
      </el-form-item>
      <el-form-item label="关键词">
        <el-input v-model="formData.gjz"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="formData.ms"></el-input>
      </el-form-item>
      <el-form-item label="图片上传">
        <img-upload :action="action" v-model="formData.url"></img-upload>
      </el-form-item>
      <el-form-item v-show="isEdit">
        <el-button type="primary" @click="btn_save">确 定</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { addSEO, setSEO } from "@/api/settings/seo";
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
export default {
  name: "seo_modal",
  data() {
    return {
      dialogVisible: false,
      formData: {},
      rules: {
        bt: [{ required: true, message: "不能为空" }],
        mhname: [{ required: true, message: "不能为空" }]
      },
      options: [],
      props: {
        value: "code",
        label: "name"
      },
      action: "/CqjyFz/file/ajax/upload_file"
    };
  },
  props: {
    isEdit: Boolean,
    modalShow: Boolean,
    data: {
      default: () => {}
    },
    mhpassid:''
  },
  watch: {
    modalShow(val) {
      this.formData = Object.assign({}, this.data);
      if(this.data.id){
        if(this.data.xzqhCodeList.length >0){
          this.getSuperiorXzqh(this.data.xzqhCodeList[this.data.xzqhCodeList.length - 1]);
        }
      }else{  
        this.getRegion();
      }
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
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.formData.id) {
            setSEO(this.formData).then(res => {
              _this.handleRes(res);
            });
          } else {
            this.formData.mhid = this.mhpassid;
            addSEO(this.formData).then(res => {
              _this.handleRes(res);
            });
          }
        }
      });
    },
    handleClose() {
      this.$refs.form.resetFields();
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
