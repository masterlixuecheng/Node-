<template>
  <el-dialog
    title="部门"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
    
  >
    <el-transfer v-model="value" :data="data" :titles="titles" :props="props" id="div1"></el-transfer>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="btn_save">确定</el-button>
      <el-button @click="handleClose">取消</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { getPower, getNoPower, setPower } from "@/api/settings/bmgl";
export default {
  name: "bmgl_people_modal",
  data() {
    return {
      dialogVisible: false,
      data: [],
      value: [],
      titles: ["未关联用户", "已关联用户"],
      props: {
        key: "id",
        label: "nickname"
      }
    };
  },
  props: {
    id: "",
    modalShow: Boolean
  },
  watch: {
    modalShow(val) {
      if (val) {
        this.getNoPower();
        this.getPower();
      }
      this.dialogVisible = val;
    }
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
        this.$emit("edit");
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    btn_save() {
      setPower(this.id, this.value).then(res => {
        this.handleRes(res);
      });
    },
    handleClose() {
      this.data = [];
      this.value = [];
      this.$emit("close");
    },
    getNoPower() {
      getNoPower().then(res => {
        let data = res.data;
        if (data.success) {
          this.data = this.data.concat(data.msg);
        } else {
          this.$message({
            message: data.msg
          });
        }
      });
    },
    getPower() {
      getPower(this.id).then(res => {
        let data = res.data;
        if (data.success) {
          this.value = data.msg.map(m => m.id);
          this.data = this.data.concat(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss">
#div1{
  .el-checkbox {
    color: #606266;
    font-weight: 500;
    width: 100%;
    font-size: 14px;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 30px;
}
}

</style>


