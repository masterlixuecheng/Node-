<template>
  <div class="login">
    <!-- <div class="header" :style="{background: 'url('+downloadUrl+xtlogo+')  no-repeat'}"></div> -->
    <div class="content">
          <div class="login_box">
            <div class="login_box_content">
              <div class="login_tit">
                登录
                <i></i>
              </div>
              <div class="login_content">
                <el-form :model="loginForm" ref="loginForm" :rules="rules">
                  <el-form-item prop="username">
                    <el-input
                      placeholder="用户名"
                      v-model="loginForm.username"
                      @focus="inputFocus"
                      name="name"
                    >
                      <i
                        slot="prefix"
                        class="el-input__icon person"
                        style="background-size: 100% 100%;"
                      ></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="password" :class="{marginToggle:error}">
                    <el-input
                      type="password"
                      placeholder="密 码"
                      v-model="loginForm.password"
                      @keyup.enter.native="loginBtn"
                      @focus="inputFocus"
                      name="passwd"
                    >
                      <i
                        slot="prefix"
                        class="el-input__icon password-icon"
                        style="background-size: 100% 100%;"
                      ></i>
                    </el-input>
                    <p class="error" v-if="error">用户名和密码不正确</p>
                  </el-form-item>
                  <!-- <el-row :gutter="20">
                    <el-col :span="12">
                      <el-input
                        v-model="loginForm.captcha"
                        placeholder="请输入验证码"
                        @keyup.enter.native="loginBtn"
                      ></el-input>
                    </el-col>
                    <el-col :span="12">
                      <div class="verify-img">
                        <img :src="src" @click="changeImg">
                      </div>
                    </el-col>
                  </el-row> -->
                  <div class="rember-pass">
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                  </div>
                  <el-button type="primary" class="login_btn" @click="loginBtn">登录</el-button>
                </el-form>
                <img src="../../assets/images/tree.png" alt class="tree">
              </div>
            </div>
          </div>
    </div>
    <!-- <div class="footer">
      <p>西咸新区公共资源交易中心
      </p>
      <p>

        注册地址:西咸新区西咸大道中段55号启迪科技会展中心B座三楼 陕ICP备12007797号
      </p>
    </div> -->
    <xModal :modalShow="modalShow" :apply="apply" @close="close" @edit="loginBtn"></xModal>
  </div>
</template>
<script>
import { getImg, license } from "@/api/login";
import {
  getRegion,
  getRegionByCode,
  getSuperiorXzqh
} from "@/api/settings/zzjg";
import { handleEmpty, doCreate } from "@/utils/config";
import xModal from "./login_modal";
let Base64 = require("js-base64").Base64;
export default {
  name: "login",
  components: {
    xModal
  },
  data() {
    return {
      num:0,
      options: [],
      xzqh: "",
      pageObj: {
        pageNo: 1,
        pageSize: 10
      },
      xtlogo: "",
      downloadUrl: process.env.DOWNLOAD_URL,
      passOrNot: "",
      checked: false,
      modalShow: false,
      apply: "",
      baseUrl: process.env.BASE_URL,
      src: process.env.BASE_URL + "/captcha.jpg",
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  created() {
    doCreate("nd");
  },
  methods: {
    loginBtn() {
      let _this = this;
      // if (this.checked) {
      //   this.setCookie(
      //     this.loginForm.username,
      //     Base64.encode(this.loginForm.password),
      //     7
      //   );
      // } else {
      //   this.clearCookie();
      // }
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          _this.$store.dispatch("loginSecurity", _this.loginForm).then(res => {
              _this.$router.push({ path: "/" });
            }).catch(error => {
              if (error && error.error) {
                _this.apply = error.error;
                _this.modalShow = true;
                return;
              }
              // _this.changeImg();
              // _this.$router.push({ path: "/login" });
            });
        }
      });
    },
    inputFocus() {
      this.$store.state.user.error = false;
    },
    changeImg() {
      this.src = "";
      this.$nextTick(() => {
        this.num = this.num == 0 ? 1 : 0;
        this.src = this.baseUrl + "/captcha"+this.num+".jpg";
      });
    },
    close() {
      this.apply = "";
      this.modalShow = false;
    },
    getCookie() {
      if (document.cookie.length) {
        let arr = document.cookie.split("; ");
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("=");
          if (arr2[0] == "userName") {
            this.loginForm.username = arr2[1];
          } else if (arr2[0] == "userPwd") {
            this.loginForm.password = Base64.decode(arr2[1]);
          }
        }
      }
    },
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date();
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    clearCookie: function() {
      this.setCookie("", "", -1);
    },
    go() {}
  },
  mounted() {
    this.getCookie();
  },
  beforeDestroy() {
    this.$router.push({ path: "/" });
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.login {
  height: 100vh;
  min-width: 700px;
  background: url("../../assets/images/login.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  .header {
    height: 60px;
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    // background: url("../../../static/img/loginTitle.png") no-repeat;
    margin: 50px;
    width: 100%;
    span {
      line-height: 120px;
    }
    .header-tit {
      color: #3383d0;
      font-size: 34px;
      font-family: "黑体";
      font-weight: bold;
    }
    .header-login {
      float: right;
      color: #999999;
      font-size: 14px;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    padding-top:20vh;
  }
  .footer {
    width: 100%;
    height: 77px;
    text-align: center;
    position: fixed;
    bottom: 0;

    p {
      height: 30px;
      line-height: 30px;
      width: 100%;
      color: rgb(51, 51, 51);
      font-size: 14px;
      margin: 0;
      text-align: center;
    }
  }
  .login_box {
    margin: 0 auto;
    height: 300px;
    width: 300px;
  }
  .el-col {
    height: 100%;
  }
  .login_box{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fl-bg {
    height: 100%;
    width: 340px;
    img {
      height: 100%;
    }
  }
  .login_box_content {
    position: relative;
    background: #fff;
    width: 352px;
    padding: 0 35px 20px 35px;
    height: 472px;
    box-shadow: 0px -5px 60px #b5b4b4;
    border-radius: 4px;
    .login_tit {
      height: 150px;
      line-height: 150px;
      text-align: center;
      font-size: 28px;
      color: rgb(51, 51, 51);
    }
    .login_content {
      .person {
        background: url("../../assets/images/username.png") no-repeat;
        width: 13px;
        height: 13px;
      }
      .password-icon {
        background: url("../../assets/images/password.png") no-repeat;
        width: 13px;
        height: 13px;
      }
      .error {
        font-size: 14px;
        color: red;
      }
      .marginToggle {
        margin-bottom: 0;
      }
    }
    .el-row,
    .el-col {
      height: 40px;
    }
    .verify-img {
      height: 100%;
      margin-right: -20px;
      img {
        height: 100%;
      }
    }
    .rember-pass {
      margin: 20px 0;
      span {
        color: #999999;
        font-size: 14px;
      }
    }
    .tree {
      width: 112px;
      height: 133px;
      position: absolute;
      bottom: -68px;
      right: 15px;
    }
  }
  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
}
</style>
<style lang="scss">
.login {
  .el-input__prefix {
    display: flex;
    align-items: center;
  }
  .rember-pass {
    span {
      color: #999999;
      font-size: 14px;
    }
  }
  .login_btn {
    width: 100%;
  }
  .el-loading-mask {
    display: none !important;
  }
}
</style>
