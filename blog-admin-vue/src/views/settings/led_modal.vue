<template>
  <el-dialog
    title="led信息"
    :visible.sync="dialogVisible"
    width="60%"
    :before-close="handleClose"
    id="jiaoyxx"
  >
    <el-scrollbar>
      <el-form :model="formData" ref="form" label-width="100px" :rules="rules">
        <el-form-item label="标题" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="所属区划" prop="xzqhList">
          <el-cascader
            id="xzqh"
            :options="options"
            v-model="formData.xzqhList"
            change-on-select
            @change="handleItemChange"
            :props="props"
            clearable
          ></el-cascader>
        </el-form-item>
        <el-form-item label="滚动间隔" prop="timeDev">
          <el-input v-model="formData.timeDev">
            <template slot="append">秒</template>
          </el-input>
        </el-form-item>
        <el-form-item label="开始时间" prop="ksdate">
          <el-date-picker v-model="formData.ksdate" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" prop="jsdate">
          <el-date-picker v-model="formData.jsdate" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-form-item>
        <el-form-item label="页底信息" prop="content">
          <Tinymce ref="editor" v-model="formData.content"/>
        </el-form-item>
        <el-form-item label="备注" prop="bz">
          <el-input type="textarea" v-model="formData.bz"></el-input>
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
import { addLed, setLed } from "@/api/settings/led";
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
export default {
  name: "jiaoy_modal",
  data() {
    var ksdate = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请选择日期"));
      } else {
        if (this.formData.jsdate !== "") {
          this.$refs.form.validateField("jsdate");
        }
        callback();
      }
    };
    var jsdate = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请选择日期"));
      } else if (value < this.formData.ksdate) {
        callback(new Error("结束日期不能早于开始日期!"));
      } else {
        callback();
      }
    };
    return {
      dialogVisible: false,
      formData: {},
      rules: {
        name: [
          {
            required: true,
            message: "请输入名称"
          }
        ],
        xzqhList: [
          {
            required: true,
            message: "请选择行政区划"
          }
        ],
        timeDev: [
          {
            required: true,
            message: "请输入滚动间隔"
          }
        ],
        ksdate: [
          {
            required: true,
            message: "请选择日期"
          },
          { validator: ksdate }
        ],
        jsdate: [
          {
            required: true,
            message: "请选择日期"
          },
          { validator: jsdate }
        ]
      },
      options: [],
      props: {
        value: "code",
        label: "name"
      }
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
      this.formData.xzqhList = this.formData.xzqh || [];
      if (this.data.id) {
        if (this.formData.xzqhList.length > 0) {
          this.getSuperiorXzqh(
            this.formData.xzqhList[this.formData.xzqhList.length - 1]
          );
        }
      } else {
        this.getRegion();
      }

      this.formData.token = this.$store.getters.token;
      if (this.$refs.editor) {
        this.$refs.editor.setContent(this.formData.content || "");
      }
      this.dialogVisible = val;
    }
  },
  methods: {
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
      if (_this.formData.id) {
        //修改
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData);
            obj.kz1 = document.getElementById("xzqh").innerText.replace(">", "").replace(/\s+/g,""); 
            delete obj.xzqh;
            setLed(obj).then(res => {
              _this.handleRes(res);
            });
          }
        });
      } else {
        //添加
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData);
            obj.kz1 = document.getElementById("xzqh").innerText.replace(">", "").replace(/\s+/g,""); 
            addLed(obj).then(res => {
              _this.handleRes(res);
            });
          }
        });
      }
    },
    handleClose() {
      this.$refs.form.resetFields();
      this.formData = {};
      this.$emit("close");
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
#jiaoyxx .el-scrollbar__wrap {
  overflow-x: hidden;
  height: 60vh;
}
</style>

