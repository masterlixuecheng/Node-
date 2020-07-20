
<template>
  <div class="listdialogaccr">
    <el-dialog title="权限配置" :visible.sync="mhxxModalToggle" width="40%" :before-close="btn_cancel">
      <div class="listdialogaccr-content">
        <el-scrollbar style="height:100%">
          <el-tree :data="treeData" node-key="permission" ref="tree" show-checkbox></el-tree>
        </el-scrollbar>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="btn_save">保存</el-button>
        <el-button @click="btn_cancel">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getMhxx, delMhxx,mhxxPermissionUpdate } from "@/api/settings/mhxx";
import { treeQuery1, accrQuery1 } from "@/api/settings/bmgl";
import { getApppz, setAppAuth } from "@/api/settings/apppz";
import { getToken } from "@/utils/auth";
export default {
  name: "mhxx_permission_modal",
  data() {
    return {
      list: [],
      powerList: [],
      mhxxModalToggle: false,
      treeData: [],
      userId: ""
    };
  },
  props: {
    check: {
      default: () => []
    },
    id: "",
    mhxxModal: Boolean
  },
  watch: {
    mhxxModal(val) {
      if (val && this.id) {
        this.getMhxxPermission();
      }
      this.mhxxModalToggle = val;
    }
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      //状态发生变化时，判断是否被选中
      if (checked) {
        if (data.uri.indexOf("_") == -1) {
          //选中时：当前节点存入
          this.powerList.push(data.uri);
        }
        if (data.children) {
          //选中时：当前节点的子菜单存入
          data.children.map(z => {
            if (z.uri.indexOf("_") == -1) {
              this.powerList.push(z.uri);
            }
          });
        }
      } else if (!checked) {
        if (this.powerList.indexOf(data.uri) != -1) {
          //未选中时：当前节点删除
          this.powerList.splice(this.powerList.indexOf(data.uri), 1);
        }
        if (data.children) {
          //未选中时：当前节点的子菜单删除
          data.children.map(j => {
            if (j.uri.indexOf("_") != -1) {
              this.powerList.splice(j, 1);
            }
          });
        }
      }
    },
    getMhxxPermission() {
      let token = getToken();
      let _this = this;
      getMhxx(this.id)
        .then(res => {
          let data = res.data;
          if (data.success) {
            _this.$refs.tree.setCheckedKeys(
              data.msg.power
                .replace(/ /g, "")
                .split("[")[1]
                .split("]")[0]
                .split(",")
            );
          } else {
            this.$message.error(data.msg);
          }
        })
        .catch(() => {});
    },
    btn_save() {
      let _this = this;
      let obj = {
        id: this.id
      };
      let arr = this.$refs.tree.getCheckedNodes(false, true);
      let arr2 = this.$refs.tree.getHalfCheckedNodes();
      arr = arr.concat(arr2);
      arr = arr.map(v => {
        return v.uri;
      });
      obj.powerList = arr;
      mhxxPermissionUpdate(obj).then(res => {
        let data = res.data;
        obj.powerList = [];
        this.powerList = [];
        if (data.success) {
          _this.$message({
            message: data.msg,
            type: "success"
          });
          _this.btn_cancel();
        } else {
          _this.$message.error(data.msg);
        }
      });
    },
    btn_cancel() {
      this.resetChecked();
      this.$emit("close");
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    },
    treeQuery1() {
      let obj = {
        userid: this.userId
      };
      treeQuery1(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.treeData = data.data;
        }
      });
    }
  },
  mounted() {
    this.userId = this.$store.state.user.user.uUser.id;
    this.treeQuery1();
  }
};
</script>

<style lang="scss" scoped>
.listdialogaccr {
  .listdialogaccr-content {
    min-width: 200px;
    height: 60vh;
    margin: 0 auto;
    overflow: hidden;
  }
}
</style>
<style lang="scss">
.listdialogaccr {
  .el-dialog__header {
    background: #307ecc;
    .el-dialog__title {
      color: #fff;
    }
  }
  .el-transfer-panel__body {
    height: 400px;
    .el-transfer-panel__list {
      height: 100%;
    }
  }
  .el-dialog__body {
    padding: 20px 20px 0 20px;
  }
  .el-dialog__footer {
    text-align: center;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>


