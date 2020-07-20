<template>
    <el-dialog title="栏目信息" :visible.sync="dialogVisible" width="40%" :before-close="handleClose" id="zxlmxx">
        <el-scrollbar>
            <el-form :model="formData" ref="form" label-width="150px">
                <el-form-item label="广告名称" prop="ggname">
                    <el-input v-model="formData.ggname"></el-input>
                </el-form-item>
                <el-form-item label="广告链接" prop="gglj">
                    <el-input v-model="formData.gglj"></el-input>
                </el-form-item>
                <el-form-item label="是否显示在首页" prop="sfxszsy">
                    <el-radio v-model="sy" label="1">显示</el-radio>
                    <el-radio v-model="sy" label="0">不显示</el-radio>
                </el-form-item>
                <el-form-item label="显示位置" prop="xswz">
                    <el-radio v-model="wz" label="1">左侧</el-radio>
                    <el-radio v-model="wz" label="2">浮动</el-radio>
                    <el-radio v-model="wz" label="3">右侧</el-radio>
                </el-form-item>
                <el-form-item label="显示宽度" prop="xsku">
                    <el-input v-model="formData.xsku"></el-input>
                </el-form-item>
                <el-form-item label="显示高度" prop="xsgd">
                    <el-input v-model="formData.xsgd"></el-input>
                </el-form-item>
                <el-form-item label="提示内容" prop="tsnr">
                    <el-input v-model="formData.tsnr"></el-input>
                </el-form-item>
                <el-form-item label="内容样式" prop="nrys">
                    <el-input v-model="formData.nrys"></el-input>
                </el-form-item>
                <el-form-item label="上传图片">
                    <img-upload :action="action" v-model="formData.ggaddress"></img-upload>
                </el-form-item>
                <el-form-item v-show="isEdit">
                    <el-button type="primary" @click="btn_save">确 定</el-button>
                    <el-button @click="handleClose">取 消</el-button>
                </el-form-item>
            </el-form>
        </el-scrollbar>
    </el-dialog>
</template>
<script>
import { getRegion } from "@/api/settings/zzjg";
import { ggwszAdd, ggwszUpdate, getSj } from "@/api/settings/ggwsz";
import { validPassword, validdateMobile, validEmail } from "@/utils/validate";
import { handleEmpty } from "@/utils/config";
export default {
  name: "ggwsz_modal",
  data() {
    return {
      dialogVisible: false,
      formData: {},
      props: {
        value: "code"
      },
      lmShow: true,
      sy: "1",
      wz: "1",
      action: "/ggwsz/file/ajax/upload_file"
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
      this.sy = this.data.sfxszsy + "";
      this.wz = this.data.xswz + "";
      this.dialogVisible = val;
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    btn_save() {
      let _this = this;
      if (_this.formData.id) {
        //修改
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData);
            obj.sfxszsy = this.sy;
            obj.xswz = this.wz;
            ggwszUpdate(obj).then(res => {
              let data = res.data;
              if (data.success) {
                _this.handleClose();
                _this.$emit("edit");
                _this.$message({
                  message: data.msg,
                  type: "success"
                });
              } else {
                _this.$message({
                  message: data.msg
                });
              }
            });
          }
        });
      } else {
        //添加
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData);
            obj.sfxszsy = this.sy;
            obj.xswz = this.wz;
            ggwszAdd(obj).then(res => {
              let data = res.data;
              if (data.success) {
                _this.handleClose();
                _this.$emit("edit");
                _this.$message({
                  message: data.msg,
                  type: "success"
                });
              } else {
                _this.$message({
                  message: data.msg
                });
              }
            });
          }
        });
      }
    },
    handleClose() {
      this.$refs.form.resetFields();
      this.$emit("close");
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
#zxlmxx .el-scrollbar__wrap {
  overflow-x: hidden;
  height: 60vh;
}
</style>

