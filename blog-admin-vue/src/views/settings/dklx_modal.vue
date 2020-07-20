<template>
    <el-dialog title="项目信息" :visible.sync="dialogVisible" width="40%" :before-close="handleClose" id="dklx">
        <el-form :model="formData.uUser" ref="form" label-width="150px">
            <el-form-item label="类型名称" prop="lxmc">
                <el-input v-model="formData.uUser.lxmc"></el-input>
            </el-form-item>
            <el-form-item label="类型代码" prop="lxdm">
                <el-input v-model="formData.uUser.lxdm"></el-input>
            </el-form-item>
            <el-form-item label="使用项目类型" prop="syxmlx">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <el-checkbox-group v-model="checked" @change="handleCheckedLxChange">
                    <el-checkbox v-for="item in options" :key="item.flName" :label="item.flName"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item v-show="isEdit">
                <el-button type="primary" @click="btn_save">确 定</el-button>
                <el-button @click="handleClose">取 消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<script>
import { getRegion } from "@/api/settings/zzjg";
import { dklxAdd, dklxUpdate, xmflSearch } from "@/api/settings/dklx";
import { handleEmpty } from "@/utils/config";
export default {
  name: "dklx_modal",
  data() {
    return {
      checkAll: false,
      dialogVisible: false,
      isIndeterminate: true,
      formData: {
        uUser: {},
        uUserInfo: {}
      },
      options: [],
      props: {
        value: "code"
      },
      checked: []
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
      this.formData.uUser = Object.assign({}, this.data);
      if (this.data.syxmlx) {
        this.checked = this.data.syxmlx.split(",");
      }
      this.dialogVisible = val;
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checked = val ? this.options.map(o => o.flName) : [];
      this.isIndeterminate = false;
    },
    handleCheckedLxChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.options.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.length;
    },
    btn_save() {
      let _this = this;
      if (_this.formData.uUser.id) {
        //修改
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData.uUser);
            obj.syxmlx = this.checked.join(",");
            dklxUpdate(obj).then(res => {
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
      } else {
        //添加
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData.uUser);
            obj.syxmlx = this.checked.join(",");
            dklxAdd(obj).then(res => {
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
      }
    },
    handleClose() {
      this.$refs.form.resetFields();
      this.$emit("close");
    },
    btn_xmsearch() {
      xmflSearch().then(res => {
        let data = res.data;
        if (data.success) {
          this.options = data.msg.slice(1);
        }
      });
    }
    // getRegion() {
    //     getRegion().then(res => {
    //         let data = res.data;
    //         if (data.success) {
    //             this.options = handleEmpty(data.msg);
    //         }
    //     });
    // }
  },
  mounted() {
    // this.options = JSON.parse(sessionStorage.getItem("xzqhList"));
    this.btn_xmsearch();
  }
};
</script>
<style lang="scss">
#dklx .el-checkbox {
  margin-left: 30px;
}
</style>

