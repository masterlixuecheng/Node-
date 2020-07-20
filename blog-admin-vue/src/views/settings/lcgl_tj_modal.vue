<template>
  <el-dialog title="设置路由条件" :visible.sync="modalShow" width="30%" :before-close="handleClose">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="路由条件">
        <el-select v-model="form.lytj" placeholder="请选择路由条件">
          <el-option label="小于" value="小于"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="行政级别">
        <el-select v-model="form.xzjb" placeholder="请选择行政级别">
          <el-option label="省" value="2"></el-option>
          <el-option label="市" value="4"></el-option>
          <el-option label="县" value="6"></el-option>
          <el-option label="乡" value="9"></el-option>
          <el-option label="村" value="12"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="级别数">
        <el-input v-model="form.xzjb" disabled></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="btn_save">确定</el-button>
      <el-button @click="handleClose">取消</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { setTj } from "@/api/settings/lcgl";
export default {
  name: "lcgl_modal",
  data() {
    return {
      form: {
        lytj: "小于",
        xzjb: "2"
      }
    };
  },
  props: {
    id: "",
    by1: "",
    modalShow: Boolean
  },
  methods: {
    handleRes(res) {
      let data = res.data;
      if (data.success) {
        this.$message({
          message: data.msg,
          type: "success"
        });
        this.handleClose();
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    btn_save() {
      let obj = Object.assign({}, this.form);
      obj.jbs = obj.xzjb;
      obj.id = this.id;
      obj.by1 = this.by1;
      setTj(obj).then(res => {
        this.handleRes(res);
      });
    },
    handleClose() {
      this.$emit("update:modalShow", false);
    }
  }
};
</script>
