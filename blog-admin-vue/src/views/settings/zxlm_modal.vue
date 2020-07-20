<template>
    <el-dialog title="栏目信息" :visible.sync="dialogVisible" width="40%" :before-close="handleClose" id="zxlmxx">
        <el-form :model="formData" ref="form" label-width="100px" :rules="rules">
            <el-form-item label="栏目名称" prop="lmmc">
                <el-input v-model="formData.lmmc"></el-input>
            </el-form-item>
            <el-form-item label="栏目编码" prop="url">
                <el-input v-model="formData.url"></el-input>
            </el-form-item>
            <el-form-item label="栏目序号" prop="lmxh">
                <el-input v-model="formData.lmxh"></el-input>
            </el-form-item>
            <el-form-item label="上级栏目" :prop="lmShow?'sjlm':''" v-show="lmShow">
                <el-select v-model="formData.sjlm">
                    <el-option v-for="item in optionsj" :key="item.type" :label="item.type" :value="item.type">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="栏目级别" prop="lmjb">
                <el-select v-model="formData.lmjb" @change="changeLm" :disabled="!isEdit">
                    <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上传icon">
                <img-upload :action="action" v-model="formData.address"></img-upload>
            </el-form-item>
            <el-form-item v-show="isEdit">
                <el-button type="primary" @click="btn_save">确 定</el-button>
                <el-button @click="handleClose">取 消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<script>
import { getRegion } from "@/api/settings/zzjg";
import { zxlmAdd, zxlmUpdate, getSj } from "@/api/settings/zxlm";
import { validPassword, validdateMobile, validEmail } from "@/utils/validate";
import { handleEmpty } from "@/utils/config";
export default {
  name: "zxlm_modal",
  data() {
    return {
      dialogVisible: false,
      formData: {},
      options: [{ name: "级别1", value: "1" }, { name: "级别2", value: "2" }],
      optionsj: [],
      props: {
        value: "code"
      },
      rules: {
        lmmc: [{ required: true, message: "不能为空" }],
        url: [{ required: true, message: "不能为空" }],
        lmxh: [{ required: true, message: "不能为空" }],
        sjlm: [{ required: true, message: "不能为空" }],
        lmjb: [{ required: true, message: "不能为空" }]
      },
      lmShow: true,
      action: "/zxlm/file/ajax/upload_file"
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
      if (this.formData.lmjb == "2") {
        this.lmShow = true;
      } else {
        this.lmShow = false;
      }
      this.dialogVisible = val;
    }
  },
  methods: {
    btn_save() {
      let _this = this;
      if (_this.formData.id) {
        //修改
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData);
            zxlmUpdate(obj).then(res => {
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
            zxlmAdd(obj).then(res => {
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
    },
    getRegion() {
      getSj().then(res => {
        let data = res.data;
        if (data.success) {
          this.optionsj = data.msg;
        }
      });
    },
    changeLm(val) {
      if (val == "1") {
        this.lmShow = false;
      } else {
        this.lmShow = true;
      }
    }
  },
  mounted() {},
  created() {
    this.options = JSON.parse(sessionStorage.getItem("xzqhList"));
  }
};
</script>
<style lang="scss">
#zxlmxx .el-scrollbar__wrap {
  overflow-x: hidden;
  height: 60vh;
}
</style>

