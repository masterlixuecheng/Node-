<template>
  <el-dialog title="提示信息" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
    <el-scrollbar>
      <el-form :model="formData" ref="form" label-width="100px" :rules="rules">
        <el-form-item label="消息类型">
          <el-select v-model="formData.category" placeholder="请选择消息类型">
            <el-option label="类型一" value="qweqw"></el-option>
            <el-option label="类型二" value="qe"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="formData.bt"></el-input>
        </el-form-item>
        <el-form-item label="提示内容" prop="content">
          <Tinymce ref="editor" v-model="formData.content" />
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
import { addXxts, setXxts } from "@/api/settings/xxts";
export default {
  name: "xxts_modal",
  data() {
    return {
      dialogVisible: false,
      formData: {},
      rules: {
        content: [{ required: true, message: "不能为空" }]
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
      this.$nextTick(() => {
        this.$refs.editor.setContent(this.formData.content || "");
      });
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
            setXxts(this.formData).then(res => {
              _this.handleRes(res);
            });
          } else {
            addXxts(this.formData).then(res => {
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
