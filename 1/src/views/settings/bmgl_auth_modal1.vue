<template>
  <div class="listdialogaccr">
    <el-dialog title="权限配置" :visible.sync="accrModalToggle" width="40%" :before-close="accr_cancel">
      <div class="listdialogaccr-content">
        <el-scrollbar style="height:100%">
          <el-tree :data="treeData" node-key="permission" ref="tree" show-checkbox></el-tree>
        </el-scrollbar>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="accr_save">保存</el-button>
        <el-button @click="accr_cancel">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { treeQuery1, accrQuery1 } from "@/api/settings/bmgl";
import { getApppz, setAppAuth } from "@/api/settings/apppz";
import { getToken } from "@/utils/auth";
export default {
  name: "bmgl_auth_modal",
  data() {
    return {
      list: [],
      powerList: [],
      accrModalToggle: false,
      treeData: [],
      userId: ""
    };
  },
  props: {
    check: {
      default: () => []
    },
    id: "",
    authModal: Boolean
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
      console.log("xuanzhong" + this.powerList);
    },
    // getToken() {
    //   var strcookie = document.cookie; //获取cookie字符串
    //   var arrcookie = strcookie.split("; "); //分割
    //   //遍历匹配
    //   for (var i = 0; i < arrcookie.length; i++) {
    //     var arr = arrcookie[i].split("=");
    //     if (arr[0] == "User-Token") {
    //       return arr[1];
    //     }
    //   }
    //   return "";
    // },
    accrQuery1() {
      let token = getToken();
      let _this = this;
      getApppz(this.id)
        .then(res => {
          let data = res.data;
          if (data.success) {
            _this.$refs.tree.setCheckedKeys(
              data.msg.by1
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
    // accr_query() {
    //   let _this = this;
    //   accrQuery(this.id).then(res => {
    //     let data = res.data;
    //     if (data.success) {
    //       _this.$refs.tree.setCheckedKeys(data.msg.power.split(","));
    //     }
    //   });
    // },
    accr_save() {
      // let _this = this;
      // let obj = {
      //   id: this.id
      // };
      // let mapArr1 = this.$refs.tree.getCheckedKeys(true);//获取全选的数组
      // this.powerList = this.powerList.concat(mapArr1);//把所有一二级菜单和全选的按钮拼接
      // //点击直接生成的三级菜单的数组
      // let mapArr = this.$refs.tree.getHalfCheckedNodes(true); //点击三级菜单，获取它的两个父节点
      // mapArr.map(v => {
      //   //把父节点存入obj.powerList
      //   this.powerList.push(v.uri);
      //   console.log(v.uri);
      // });
      // let mapArr3 = this.$refs.tree.getCheckedNodes(true); //点击生成的三级菜单的数组（包含详细）
      // this.list = []; //暂时存放三级菜单parentId的数组
      // mapArr3.map(c => {
      //   //遍历比较id相同将uri存入obj.powerList
      //   if (this.list.indexOf(c.parentId) == -1) {
      //     this.list.push(c.parentId);
      //     mapArr.map(b => {
      //       b.children.map(e => {
      //         if (e.id == c.parentId) {
      //           this.powerList.push(e.uri);
      //         }
      //       });
      //     });
      //   }
      // });
      // var arr = this.powerList;
      // function rep(arr) {
      //   var ret = [];
      //   for (var i = 0; i < arr.length; i++) {
      //     if (arr.indexOf(arr[i]) == i) {
      //       ret.push(arr[i]);
      //     }
      //   }
      //   return ret;
      // }
      // var arr2 = rep(arr);
      // obj.powerList = arr2;
      // console.log(obj.powerList);

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
      setAppAuth(obj).then(res => {
        let data = res.data;
        obj.powerList = [];
        this.powerList = [];
        if (data.success) {
          _this.$message({
            message: data.msg,
            type: "success"
          });
          _this.accr_cancel();
        } else {
          _this.$message.error(data.msg);
        }
      });
    },
    accr_cancel() {
      this.resetChecked();
      this.$emit("close");
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    },
    handleChange(value, direction, movedKeys) {
      console.log(movedKeys, direction);
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
  watch: {
    authModal(val) {
      if (val && this.id) {
        this.accrQuery1();
      }
      this.accrModalToggle = val;
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


