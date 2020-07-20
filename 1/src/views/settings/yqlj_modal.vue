<template>
  <el-dialog title="友情链接" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <el-form :model="formData" ref="form" label-width="100px" :rules="rules">
      <el-form-item label="链接名称" prop="ljname">
        <el-input v-model="formData.ljname"></el-input>
      </el-form-item>
      <el-form-item label="链接URL" prop="ljurl">
        <el-input v-model="formData.ljurl"></el-input>
      </el-form-item>
      <el-form-item label="链接LOGO" prop="ljlogo">
        <img-upload :action="action" v-model="formData.ljlogo"></img-upload>
      </el-form-item>
      <el-form-item label="链接权重" prop="ljqz">
        <el-input v-model="formData.ljqz"></el-input>
      </el-form-item>
      <el-form-item v-show="isEdit">
        <el-button type="primary" @click="btn_save">确 定</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { setYqlj, addYqlj } from "@/api/settings/yqlj";
export default {
  name: "yqlj_modal",
  data() {
    return {
      dialogVisible: false,
      formData: {},
      action: "",
      rules: {
        ljname: [{ required: true, message: "不能为空" }],
        ljurl: [{ required: true, message: "不能为空" }],
        ljlogo: [{ required: true, message: "请上传LOGO" }],
        ljqz: [{ required: true, message: "不能为空" }]
      },
      action: "/yqlj/file/ajax/upload_file"
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
            setYqlj(this.formData).then(res => {
              _this.handleRes(res);
            });
          } else {
            addYqlj(this.formData).then(res => {
              _this.handleRes(res);
            });
          }
        }
      });
    },
    handleClose() {
      this.$refs.form.resetFields();
      this.$emit("close");
    }
  }
};
</script>
