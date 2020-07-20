<template>
  <el-dialog :title="type" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <el-form :model="formData" ref="form" label-width="100px" :rules="rules">
      <div v-if="type == '新建字典类别'">
        <el-form-item label="类别名称" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="类别编码" prop="code">
          <el-input v-model="formData.code"></el-input>
        </el-form-item>
        <el-form-item label="顺序号">
          <el-input v-model="formData.sort"></el-input>
        </el-form-item>
      </div>
      <div v-else>
        <el-form-item label="所属字典类别" >
          <el-select v-model="pid" disabled>
            <el-option v-for="item in Options" :label="item.name" :value="item.id" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="字典项" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="字典值" prop="code">
          <el-input v-model="formData.code"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="btn_save">保 存</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { dictAdd, dictUpdate, dictSearch, dictDel, dictSelectById, dictSelect } from "@/api/settings/zdgl";
export default {
  name: "zdgl_modal",
  data() {
    return {
      Options:[],
      dialogVisible: false,
      formData: {},
      rules: {
        name: [{ required: true, message: "不能为空" }],
        code: [{ required: true, message: "不能为空" }]
      },
      options: [],
    };
  },
  props: {
    type: String,
    pid: Number,
    modalShow: Boolean,
    data: {
      default: () => {}
    },
  },
  watch: {
    modalShow(val) {
      this.formData = Object.assign({}, this.data);
      this.dialogVisible = val;
      if(val){
        this.dictSelect();
      }
    } 
  },
  methods: {
    dictSelect() {
      dictSelect().then(res => {
        let data = res.data;
        this.Options = data.msg;
      });
    },
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        this.handleClose();
        this.$emit("edit");
        this.$message({
          message: data.msg,
          type: "success"
        });
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    btn_save() {
      let _this = this;
      this.$refs.form.validate(valid => {
        if (valid) {
          let obj = Object.assign({} , this.formData);
          obj.type = this.type == '新建字典类别' ? '1' : '2';
          if(obj.type == '2'){
            obj.pid = this.pid;
          }
          if (this.formData.id) {
            dictUpdate(obj).then(res => {
              _this.handleRes(res);
            });
          } else {
            dictAdd(obj).then(res => {
              _this.handleRes(res);
            });
          }
        }
      });
    },
    handleClose() {
      // this.$refs.form.resetFields();
      this.formData = {};
      this.$emit("close");
    }
  },
  mounted() {
  }
};
</script>
