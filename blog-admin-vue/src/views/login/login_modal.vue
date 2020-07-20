<template>
  <el-dialog title="授权" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <el-form :model="formData" ref="form" label-width="80px" :rules="rules">
      <el-form-item label="申请码" prop="apply">
        <el-input v-model="formData.apply"></el-input>
      </el-form-item>
      <el-form-item label="授权码" prop="power">
        <el-input v-model="formData.power"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="btn_save">确 定</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { checkLicense } from "@/api/login";
export default {
  name: "login_modal",
  data() {
    return {
      dialogVisible: false,
      formData: {},
      rules: {
        apply: [{ required: true, message: "不能为空" }],
        power: [{ required: true, message: "不能为空" }]
      }
    };
  },
  props: {
    modalShow: Boolean,
    apply: ""
  },
  watch: {
    modalShow(val) {
      this.formData.apply = this.apply;
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
          checkLicense(this.formData.power).then(res => {
            _this.handleRes(res);
          });
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