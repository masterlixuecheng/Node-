<template>
  <!-- <el-transfer v-model="value" :data="data" :titles="titles" :props="props"></el-transfer> -->
  <el-row
    style="height:200px;overflow:hidden;    border: 1px solid #dcdfe6;padding-left:20px;padding-top:10px;border-radius:4px"
  >
    <el-scrollbar style="height:200px;">
      <el-col v-for="item in data" :key="item.id">
        <el-radio style="height:30px;" v-model="value" :label="item.id">{{item.nickname}}</el-radio>
      </el-col>
    </el-scrollbar>
  </el-row>
</template>
<script>
import { listUsersByXzqh } from "@/api/settings/lcgl";
import { mapGetters } from "vuex";
export default {
  name: "yhxzComponent",
  data() {
    return {
      data: [],
      value: "",
      titles: ["未关联用户", "已关联用户"],
      props: {
        key: "id",
        label: "nickname"
      }
    };
  },
  props: {
    receiveData: {
      default: () => {}
    },
    areacode: ""
  },
  computed: {
    ...mapGetters(["token", "userId"])
  },
  watch: {
    value(val) {
      this.$emit("submit", this.value.toString());
    },
    receiveData(val) {
      this.value = "";
    }
  },
  mounted() {
    this.value = "";
    this.getPower();
  },
  beforeDestroy() {
    this.value = "";
  },
  methods: {
    btn_save() {
      obj.applyUserIds = this.value.toString();
      processSh(obj).then(res => {
        this.handleRes(res);
      });
    },
    getPower() {
      let obj = {
        by1: this.receiveData.by1,
        areacode: this.areacode.split(",")[this.areacode.split(",").length - 1],
        sfgzl: "1",
        mjByMu: this.receiveData.mjByMu,
        gpjgZj: this.receiveData.gpjgZj,
        mj1: this.receiveData.mj1,
        money1: this.receiveData.money1,
        taskId: this.receiveData.taskId
      };
      listUsersByXzqh(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.data = data.msg;
        }
      });
    },
    handleRes(res) {
      let data = res.data;
      if (data.success) {
        this.$message({
          message: data.msg || "操作成功",
          type: "success"
        });
      } else {
        this.$message({
          message: data.msg || "操作失败"
        });
      }
    },
    handleClose() {
      this.data = [];
      this.value = "";
      this.$emit("close");
    }
  }
};
</script>
