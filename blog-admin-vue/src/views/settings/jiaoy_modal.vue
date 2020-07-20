<template>
    <el-dialog title="交易信息" :visible.sync="dialogVisible" width="45%" :before-close="handleClose" id="jiaoyxx">
        <el-scrollbar>
            <el-form :model="formData.uUser" ref="form" label-width="150px">
                <el-form-item label="交易中心名称" prop="jyname">
                    <el-input v-model="formData.uUser.jyname"></el-input>
                </el-form-item>
                <el-form-item label="交易中心简称" prop="jyzxjj">
                    <el-input v-model="formData.uUser.jyzxjj"></el-input>
                </el-form-item>
                <el-form-item label="交易中心所处区域" prop="areacode">
                <el-cascader id="xzqh" :options="options" v-model="formData.uUser.areaCodeList" change-on-select @change="handleItemChange" :props="props" clearable></el-cascader>
                </el-form-item>
                <el-form-item label="交易中心详细地址" prop="address">
                    <el-input v-model="formData.uUser.address"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="telephone">
                    <el-input v-model="formData.uUser.telephone"></el-input>
                </el-form-item>
                <el-form-item label="账户名称" prop="accountname">
                    <el-input v-model="formData.uUser.accountname"></el-input>
                </el-form-item>
                <el-form-item label="开户银行" prop="bankname">
                    <el-input v-model="formData.uUser.bankname"></el-input>
                </el-form-item>
                <el-form-item label="账号" prop="accountno">
                    <el-input v-model="formData.uUser.accountno"></el-input>
                </el-form-item>
                <el-form-item label="汇款备注" prop="comment">
                    <el-input v-model="formData.uUser.comment"></el-input>
                </el-form-item>
                <el-form-item label="产权交易鉴证书" prop="archived">
                </el-form-item>
                <el-form-item label="标题" prop="bt">
                    <el-input v-model="formData.uUser.bt"></el-input>
                </el-form-item>
                <el-form-item label="审核结论" prop="shjl">
                    <el-input v-model="formData.uUser.shjl"></el-input>
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
import { jiaoyAdd, jiaoyUpdate } from "@/api/settings/jiaoy";
import { validPassword, validdateMobile, validEmail } from "@/utils/validate";
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
export default {
  name: "jiaoy_modal",
  data() {
    // const PassWord = (rule, value, callback) => {
    //     if (!validPassword(value)) {
    //         callback(new Error("密码由6-20字母和数字组成"));
    //     } else {
    //         callback();
    //     }
    // };
    // const Tel = (rule, value, callback) => {
    //     if (!value) {
    //         callback(new Error("请输入手机号码"));
    //     } else if (!validdateMobile(value)) {
    //         callback(new Error("请输入正确的手机号码"));
    //     } else {
    //         callback();
    //     }
    // };
    // const Email = (rule, value, callback) => {
    //     if (!value) {
    //         callback(new Error("请输入邮箱"));
    //     } else if (!validEmail(value)) {
    //         callback(new Error("请输入正确的邮箱"));
    //     } else {
    //         callback();
    //     }
    // };
    return {
      dialogVisible: false,
      formData: {
        uUser: {},
        uUserInfo: {}
      },
      // rules: {
      //     password: [
      //         {
      //             required: true,
      //             validator: PassWord,
      //             trigger: "blur"
      //         }
      //     ],
      //     email: [
      //         {
      //             required: true,
      //             validator: Email,
      //             trigger: "blur"
      //         }
      //     ],
      //     tel: [
      //         {
      //             required: true,
      //             validator: Tel,
      //             trigger: "blur"
      //         }
      //     ]
      // },
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
      if(val){
        this.formData.uUser = Object.assign({}, this.data);
        if(this.data.id){
          if(this.data.areaCodeList.length > 0){
            this.getSuperiorXzqh(this.data.areaCodeList[this.data.areaCodeList.length - 1]);
          }
        }else {
          this.getRegion();
        }
      }
      this.dialogVisible = val;
    }
  },
  methods: {
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
      if (_this.formData.uUser.id) {
        //修改
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData.uUser);
            obj.areacode = obj.areaCodeList.join(",");
            jiaoyUpdate(obj).then(res => {
              _this.handleRes(res);
            });
          }
        });
      } else {
        //添加
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = Object.assign({}, _this.formData.uUser);
            obj.areacode = obj.areaCodeList.join(",");
            jiaoyAdd(obj).then(res => {
              _this.handleRes(res);
            });
          }
        });
      }
    },
    handleClose() {
      this.$refs.form.resetFields();
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
      let code = '';
      let currentCode = val || '0';
      if (typeof val != "string") {
        currentCode = val[val.length - 1];//非首次加载，获取当前最后一位行政区划，作为参数传递
        code = currentCode;
      } else {
        code = currentCode;//首次加载
      }
      getNextRegion(code).then(res => {
        let data = res.data;
        if (data) {
          if (code.length == 9) {//删除村的children
            data.map(d => {
              delete d.children;
            });
          }
          _this.options = moreMenu(currentCode, _this.options, handleNextCode(code,sessionStorage.getItem("xzqhOfLastUser"),data));
        }
      });
    },
  },
  mounted() {
    // this.options = JSON.parse(sessionStorage.getItem("xzqhList"));
  }
};
</script>
<style lang="scss">
#jiaoyxx .el-scrollbar__wrap {
  overflow-x: hidden;
  height: 60vh;
}
</style>

