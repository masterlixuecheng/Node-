<template>
  <el-dialog title="用户组" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <el-form :model="bmForm" ref="bmForm" label-width="100px" :rules="rules">
      <el-form-item label="名称" prop="deptname">
        <el-input v-model="bmForm.deptname"></el-input>
      </el-form-item>
      <el-form-item label="区域">
        <el-cascader
          id="xzqh"
          :options="options"
          v-model="bmForm.areaList"
          change-on-select
          @change="handleItemChange"
          :props="props"
          clearable
        ></el-cascader>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="bmForm.description"></el-input>
      </el-form-item>
      <el-form-item label="公章">
        <img-upload :action="action" v-model="bmForm.gzaddress"></img-upload>
      </el-form-item>
      <el-form-item v-show="isEdit">
        <el-button type="primary" @click="btn_save">确 定</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
import { addBm, setBm } from "@/api/settings/yhzgl";
export default {
  name: "yhzgl_modal",
  data() {
    return {
      dialogVisible: false,
      bmForm: {},
      rules: {
        deptname: [{ required: true, message: "不能为空" }]
      },
      options: [],
      props: {
        value: "code",
        label: "name"
      },
      action: "/dept/file/ajax/upload_file"
    };
  },
  props: {
    isEdit: Boolean,
    bmModal: Boolean,
    data: {
      default: () => {}
    }
  },
  watch: {
    bmModal(val) {
      this.bmForm = Object.assign({}, this.data);
      this.dialogVisible = val;
      if (val) {
        if (this.bmForm.areaList && this.bmForm.areaList.length) {
          this.getSuperiorXzqh(
            this.bmForm.areaList[this.bmForm.areaList.length - 1]
          );
        } else {
          this.getRegion();
        }
      }
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
      let _this = this;
      this.$refs.bmForm.validate(valid => {
        if (valid) {
          if (this.bmForm.id) {
            setBm(this.bmForm).then(res => {
              _this.handleRes(res);
            });
          } else {
            addBm(this.bmForm).then(res => {
              _this.handleRes(res);
            });
          }
        }
      });
    },
    handleClose() {
      this.$refs.bmForm.resetFields();
      this.$emit("close");
    },
    getSuperiorXzqh(code) {
      getSuperiorXzqh(code).then(res => {
        let data = res.data;
        if (data.success) {
          this.options = handleEmpty(data.msg);
        }
      });
    },
    getRegion() {
      getNextRegion(0).then(res => {
        let data = res.data;
        if (data) {
          this.options = data;
        }
      });
    },
    //行政区划-联级查询
    handleItemChange(val) {
      let _this = this;
      let code = "";
      let currentCode = val || "0";
      if (typeof val != "string") {
        currentCode = val[val.length - 1]; //非首次加载，获取当前最后一位行政区划，作为参数传递
        code = currentCode;
      } else {
        code = currentCode; //首次加载
      }
      getNextRegion(code).then(res => {
        let data = res.data;
        if (data) {
          if (code.length == 9) {
            //删除村的children
            data.map(d => {
              delete d.children;
            });
          }
          _this.options = moreMenu(
            currentCode,
            _this.options,
            handleNextCode(code, sessionStorage.getItem("xzqhOfLastUser"), data)
          );
        }
      });
    }
  }
};
</script>
