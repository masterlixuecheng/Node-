<template>
  <el-dialog :title="editType == 'editInfo' || editType == 'editInfoAndPwd' ? '账号信息' : '修改密码'" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <el-form v-if="editType == 'editInfo' || editType == 'editInfoAndPwd' " :model="formData.uUser" ref="form" label-width="80px" :rules="rules">
      <el-form-item label="登录账号" prop="username" required>
        <el-input v-model="formData.uUser.username"></el-input>
      </el-form-item>
      <el-form-item v-if="editType == 'editInfoAndPwd'" label="密码" prop="password">
        <el-input type="password" v-model="formData.uUser.password"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="nickname" required>
        <el-input v-model="formData.uUser.nickname"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-select placeholder="请选择" v-model="formData.uUser.type">
          <el-option label="超级管理员" :value="0"></el-option>
          <el-option label="地区管理员" :value="1"></el-option>
          <el-option label="业务人员" :value="2"></el-option>
          <el-option label="普通用户" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.uUser.email"></el-input>
      </el-form-item>
      <el-form-item label="区域" required>
        <el-cascader id="xzqh" :options="options" v-model="formData.uUser.xzqhList" change-on-select @change="handleItemChange" :props="props" clearable></el-cascader>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="formData.uUser.tel"></el-input>
      </el-form-item>
      <el-form-item v-show="isEdit">
        <el-button type="primary" @click="btn_save">确 定</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </el-form-item>
    </el-form>
    <el-form v-if="editType == 'editPassword'" :model="infoForm" ref="infoForm" label-width="80px" :rules="rulesPassword" :inline="true">
      <el-row>
        <el-col>
          <el-form-item label="新密码：" prop="newPassWord">
            <el-input type="password" v-model="infoForm.newPassWord"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item>
            <el-button type="primary" @click="editPassword">确 定</el-button>
            <el-button @click="handleClose">取 消</el-button>
          </el-form-item> 
        </el-col>
      </el-row> 
    </el-form>
  </el-dialog>
</template>
<script>
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
import { userAdd } from "@/api/settings/zhgl";
import { validPassword, validdateMobile, validEmail, validPassword2 } from "@/utils/validate";
import { getToken } from "@/utils/auth";
import { revamp } from "@/api/login";
export default {
  name: "zhgl_modal",
  data() {
    const oldPassWord = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入旧密码"));
      } else {
        callback();
      }
    };
    const newPassWord = (rule, value, callback) => {
      if (!validPassword(value)) {
        callback(new Error("密码由6-20字母和数字组成"));
      } else {
        if (value === this.infoForm.oldPassWord) {
          callback(new Error("旧密码不能和新密码一样"));
        } else {
          callback();
        }
      }
    };
    const PassWord = (rule, value, callback) => {
      if (!validPassword2(value)) {
        callback(new Error("密码由8-21位大小写字母和数字组成"));
      } else {
        callback();
      }
    };
    const Tel = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号码"));
      } else if (!validdateMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    const Email = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入邮箱"));
      } else if (!validEmail(value)) {
        callback(new Error("请输入正确的邮箱"));
      } else {
        callback();
      }
    };
    return {
      infoForm: {
        newPassWord: "",
        id: ""
      },
      dialogVisible: false,
      formData: {
        uUser: {},
        uUserInfo: {}
      },
      rulesPassword: {
        oldPassWord: [
          { required: true, validator: oldPassWord, trigger: "blur" }
        ],
        newPassWord: [
          { required: true, validator: newPassWord, trigger: "blur" }
        ]
      },
      rules: {
        nickname: [{ required: true, message: "不能为空" }],
        username: [{ required: true, message: "不能为空" }],
        // password: [{ required: true, message: "不能为空" }],
        // password: [ { required: true, validator: PassWord, trigger: "blur" }],
        // email: [
        //   {
        //     // required: true,
        //     validator: Email,
        //     trigger: "blur"
        //   }
        // ],
        // tel: [
        //   {
        //     required: false,
        //     validator: Tel,
        //     trigger: "blur"
        //   }
        // ]
      },
      options: [],
      props: {
        value: "code",
        label: "name"
      }
    };
  },
  props: {
    editType: String,
    isEdit: Boolean,
    modalShow: Boolean,
    data: {
      default: () => {}
    }
  },
  watch: {
    modalShow(val) {
      this.formData.uUser = Object.assign({}, this.data);
      this.dialogVisible = val;
      if(this.data.id){
        if(this.editType == 'editPassword'){
          this.infoForm.id = this.data.id;
        }else{
          if(this.data.xzqhList.length > 0){
            this.getSuperiorXzqh(this.data.xzqhList[this.data.xzqhList.length - 1]);
          }
        }
      }else {
        this.getRegion();
      }
    }
  },
  methods: {
    editPassword() {
      let _this = this;
      this.$refs.infoForm.validate(valid => {
        if (valid) {
          revamp(_this.infoForm).then(res => {
            this.handleRes(res);
          });
        } else {
          return false;
        }
      });
    },
    btn_save() {
      let _this = this;
      this.$refs.form.validate(valid => {
        if (valid) { 
          this.formData.uUser.token = getToken();
          if(this.editType == 'editInfo'){
            this.formData.uUser.password = null;
          }
          userAdd(this.formData).then(res => {
            this.handleRes(res);
          });
        }
      });
    },
    handleClose() {
        if(this.editType == 'editPassword'){
          this.$refs.infoForm.resetFields();
        }else{
          this.$refs.form.resetFields();
        }
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
    handleRes(res) {
      let data = res.data;
      if (data.success) {
        this.$message({
          message: data.msg || "操作成功",
          type: "success"
        });
        this.handleClose();
        this.$emit("edit");
      } else {
        this.$message({
          message: data.msg || "操作失败"
        });
      }
    },
  },
  mounted() {
  }
};
</script>
