<template>
  <el-dialog title="项目信息" :visible.sync="dialogVisible" width="40%" :before-close="handleClose" id="jiaoyxx">
    <el-scrollbar>
      <el-form :model="formData" ref="form" label-width="150px">
        <el-form-item label="分类名称" prop="flname">
          <el-input v-model="formData.flname"></el-input>
        </el-form-item>
        <el-form-item label="分类编码" prop="fldm">
          <el-input v-model="formData.fldm"></el-input>
        </el-form-item>
        <el-form-item label="分类序号" prop="flxh">
          <el-input v-model="formData.flxh"></el-input>
        </el-form-item>
        <el-form-item label="项目类型名称" prop="xmlx">
          <el-input v-model="formData.xmlx"></el-input>
        </el-form-item>
        <el-form-item label="转出项目" prop="sfzc">
          <el-select v-model="formData.sfzc" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="需求项目" prop="xqxm">
          <el-select v-model="formData.xqxm" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="使用地块类型" prop="sydklx">
          <el-select v-model="formData.sydklx" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目图片" prop="xmtp">
          <img-upload :action="action" v-model="formData.xmtp"></img-upload>
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
import { getRegion } from "@/api/settings/zzjg";
import { xmflAdd, xmflUpdate } from "@/api/settings/xmfl";
import { handleEmpty } from "@/utils/config";
export default {
  name: "xmfl_modal",
  data() {
    return {
      dialogVisible: false,
      formData: {},
      options: [{ value: 0, label: "否" }, { value: 1, label: "是" }],
      props: {
        value: "code"
      },
      action: "/xmfl/file/ajax/upload_file"
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
    }
  },
  methods: {
    btn_save() {
      let _this = this;
      if (_this.formData.id) {
        //修改
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData);
            xmflUpdate(obj).then(res => {
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
            let obj = Object.assign({}, _this.formData);
            xmflAdd(obj).then(res => {
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
  }
};
</script>

