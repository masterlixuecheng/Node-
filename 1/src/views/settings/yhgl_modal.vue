<template>
  <el-dialog title="用户信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <el-form :model="formData.uUserPortal" ref="form" label-width="100px" :rules="rules">
      <el-form-item label="手机号码" prop="tel">
        <el-input v-model="formData.uUserPortal.tel"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="formData.uUserPortal.password"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="nickname">
        <el-input v-model="formData.uUserPortal.nickname"></el-input>
      </el-form-item>
      <el-form-item v-show="isEdit">
        <el-button type="primary" @click="btn_save">确 定</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { userAdd } from "@/api/settings/yhgl";
import { validPassword, validdateMobile } from "@/utils/validate";
let Base64 = require("js-base64").Base64;
export default {
  name: "yhgl_modal",
  data() {
    const PassWord = (rule, value, callback) => {
      if (!validPassword(value)) {
        callback(new Error("密码由6-20字母和数字组成"));
      } else {
        callback();
      }
    };
    const Tel = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号码"));
      } else if (!validdateMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    return {
      dialogVisible: false,
      formData: {
        uUserPortal: {},
        uUserInfoPortal: {}
      },
      rules: {
        nickname: [{ required: true, message: "不能为空" }],
        password: [
          {
            required: true,
            validator: PassWord,
            trigger: "blur"
          }
        ],
        tel: [
          {
            required: true,
            validator: Tel,
            trigger: "blur"
          }
        ]
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
      this.formData.uUserPortal = Object.assign({}, this.data);
      this.dialogVisible = val;
    }
  },
  methods: {
    btn_save() {
      let _this = this;
      this.$refs.form.validate(valid => {
        if (valid) {
          this.formData.uUserPortal.password = Base64.encode(this.formData.uUserPortal.password);
          userAdd(this.formData).then(res => {
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
    },
    handleClose() {
      this.$refs.form.resetFields();
      this.$emit("close");
    }
  }
};
</script>
