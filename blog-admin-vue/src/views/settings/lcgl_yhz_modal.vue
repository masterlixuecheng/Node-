<template>
  <el-dialog title="关联用户组" :visible.sync="dialogVisible" width="550px" :before-close="handleClose">
    <el-transfer v-model="value" :data="data" :titles="titles" :props="props"></el-transfer>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="btn_save">确定</el-button>
      <el-button @click="handleClose">取消</el-button>
    </span>
  </el-dialog>
</template>
<script> 
import { listUsers ,setProcess} from "@/api/settings/lcgl";
import { mapGetters } from "vuex";
export default {
  name: "lcgl_modal",
  data() {
    return {
      dialogVisible: false,
      data: [],
      value: [],
      titles: ["未关联用户组", "已关联用户组"],
      props: {
        key: "id",
        label: "deptname"
      }
    };
  },
  props: {
    id: "",
    modalShow: Boolean,
    by1: ""
  },
  computed: {
    ...mapGetters(["token"])
  },
  watch: {
    modalShow(val) {
      if (val) {
        this.getNoPower();
        this.getPower();
      }
      this.dialogVisible = val;
    } ,
    value(val){ 
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
      let obj = {
        by1:this.by1,
        users:this.value
      }
      setProcess(obj).then(res => {
        this.handleRes(res);
      });
    },
    handleClose() {
      this.data = [];
      this.value = [];
      this.$emit("close");
    },
    getNoPower() {
      let obj = {
        by1: this.by1,
        token: this.token,
        // sj: "0",
        notby1: "1"
      };
      listUsers(obj).then(res => {
        this.data = this.data.concat(res.data);
      });
    },
    getPower() {
      let obj = {
        by1: this.by1,
        token: this.token,
        // sj: "0", 
        notby1: "0"
      };
      listUsers(obj).then(res => {
        this.value = res.data.map(m => m.id);
        this.data = this.data.concat(res.data);
      });
    }
  }
};
</script>
