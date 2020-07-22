<template>
    <el-dialog title="模板信息" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
        
    </el-dialog>
</template>
<script>
import { setXxts } from "@/api/settings/xxmb";
export default {
  name: "xxmb_modal",
  data() {
    return {
      dialogVisible: false,
      formData: {},
      rules: {
        nickname: [{ required: true, message: "不能为空" }]
      },
      options: [],
      props: {
        value: "code"
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
    btn_save() {
      let _this = this;
      this.$refs.form.validate(valid => {
        if (valid) {
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
