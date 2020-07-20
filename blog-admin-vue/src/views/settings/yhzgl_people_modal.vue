<template>
  <el-dialog title="关联用户" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <el-transfer
      v-model="value"
      :data="data"
      :titles="titles"
      :props="props"
      :render-content="renderFunc"
      @change="change"
      @right-check-change="rightCheckChange"
    >
      <el-button
        type="success"
        class="transfer-footer"
        slot="right-footer"
        size="mini"
        :disabled="btnDisabled"
        @click="setJobLiu"
      >工作流推进</el-button>
    </el-transfer>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="btn_save">确定</el-button>
      <el-button @click="handleClose">取消</el-button>
    </span>
  </el-dialog>
</template>
<script>
import {
  getPower,
  getNoPower,
  setPower,
  setJobLiu
} from "@/api/settings/yhzgl";
export default {
  name: "yhzgl_people_modal",
  data() {
    return {
      dialogVisible: false,
      data: [],
      value: [],
      titles: ["未关联用户", "已关联用户"],
      props: {
        key: "id",
        label: "nickname"
      },
      rightCheckArr: [],
      btnDisabled: false,
      renderFunc(h, option) {
        if (option.glbs == "1") {
          return <span>{option.nickname}</span>;
        }
        if (option.sfgzl) {
          return (
            <span>
              {option.nickname}&nbsp;
              <el-tag size="mini" type="success">
                推进
              </el-tag>
            </span>
          );
        } else {
          return (
            <span>
              {option.nickname}&nbsp;
              <el-tag size="mini">协同</el-tag>
            </span>
          );
        }
      }
    };
  },
  props: {
    id: "",
    areacode: "",
    modalShow: Boolean
  },
  watch: {
    modalShow(val) {
      if (val) {
        this.btnDisabled = false;
        this.getNoPower();
        this.getPower();
      }
      this.dialogVisible = val;
    }
  },
  methods: {
    change(nowList, dir, moveList) {
      if (dir == "right") {
        this.btnDisabled = true;
      }
    },
    setJobLiu() {
      setJobLiu(this.id, this.rightCheckArr).then(res => {
        this.handleRes(res, "no");
      });
    },
    handleRes(res, isNo) {
      let data = res.data;
      if (data.success) {
        this.$message({
          message: data.msg,
          type: "success"
        });
        if (isNo) {
          this.data = [];
          this.value = [];
          this.getNoPower();
          this.getPower();
        } else {
          this.handleClose();
          this.$emit("edit");
        }
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    rightCheckChange(arr) {
      this.rightCheckArr = arr;
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
      getNoPower(this.id, this.areacode).then(res => {
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
<style lang="scss" scoped>
.transfer-footer {
  margin-left: 15px;
}
</style>
<style lang="scss">
.el-transfer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
