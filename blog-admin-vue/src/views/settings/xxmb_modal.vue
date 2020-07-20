<template>
  <el-dialog title="模板信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <el-form :model="formData" ref="form" label-width="100px" :rules="rules">
      <el-form-item label="消息类型">
        <el-select v-model="formData.xxlx" placeholder="请选择消息类型">
          <el-option label="短信" :value=1></el-option>
          <el-option label="微信" :value=2></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="消息主题">
        <el-input v-model="formData.xxzt"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="nr">
        <el-input type="textarea" v-model="formData.nr"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-checkbox-group v-model="formData.zt">
          <el-checkbox label="激活" name="type" :true-label=1 :false-label=0></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-show="isEdit">
        <el-button type="primary" @click="btn_save">确 定</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { addXxmb, setXxmb } from "@/api/settings/xxmb";
export default {
  name: "xxmb_modal",
  data() {
    return {
      dialogVisible: false,
      formData: {},
      rules: {
        nr: [{ required: true, message: "不能为空" }]
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
            setXxmb(this.formData).then(res => {
              _this.handleRes(res);
            });
          } else {
            addXxmb(this.formData).then(res => {
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
