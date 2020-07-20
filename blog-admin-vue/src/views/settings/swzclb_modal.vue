<template>
    <el-dialog title="账号信息" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <el-form :model="formData" ref="form" label-width="100px" :rules="rules">
            <el-form-item label="类别名称" prop="lbmc">
                <el-input v-model="formData.lbmc"></el-input>
            </el-form-item>
            <el-form-item label="类别编码" prop="lbbm">
                <el-input v-model="formData.lbbm"></el-input>
            </el-form-item>
            <el-form-item label="信息表单" prop="xxbd">
                <el-select v-model="formData.xxbd">
                    <el-option v-for="item in options" :label="item.lbmc" :value="item.lbmc" :key="item.lbmc"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item v-show="isEdit">
                <el-button type="primary" @click="btn_save">确 定</el-button>
                <el-button @click="handleClose">取 消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<script>
import { getXxbd, addLb, setLb } from "@/api/settings/swzclb";
export default {
  name: "swzclb_modal",
  data() {
    return {
      dialogVisible: false,
      formData: {},
      rules: {
        lbmc: [{ required: true, message: "不能为空" }],
        lbbm: [{ required: true, message: "不能为空" }],
        xxbd: [{ required: true, message: "不能为空" }]
      },
      options: []
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
            setLb(this.formData).then(res => {
              _this.handleRes(res);
            });
          } else {
            addLb(this.formData).then(res => {
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
    getXxbd() {
      getXxbd().then(res => {
        let data = res.data;
        if (data.success) {
          this.options = data.msg;
        }
      });
    }
  },
  mounted() {
    this.getXxbd();
  }
};
</script>
