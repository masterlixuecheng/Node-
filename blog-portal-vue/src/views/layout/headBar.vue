<template>
  <div class="navHead">
    <span class="headName">
      <!-- 博客管理系统 -->
      J-YOQUE's Blog
      <!-- 爸爸's Blog -->
      <!-- <img :src="downloadUrl + dhtp" alt class="fl" style="margin:18px 0 0 16px;"> -->
      <!-- <img src="../../assets/images/logText.png" class="fl" style="margin:22px 0 0 20px;"> -->
    </span>
    <!-- <p class="headSelectWrap">
      <span class="headSelect">
        <el-dropdown>
          <span class="el-dropdown-link">
            欢迎您, {{username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="revamp_password">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="out_btn">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </p> -->

    <div class="info">
      <el-dialog title="修改密码" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <div class="info-content">
          <el-form
            :inline="true"
            class="demo-form-inline"
            :model="infoForm"
            ref="infoForm"
            :rules="infoRules"
          >
            <el-row :gutter="20">
              <el-col :span="24">
                <el-row :gutter="20" style="margin:0 0 10px 0">
                  <el-col :span="7" style="padding:0">
                    <span>旧密码：</span>
                  </el-col>
                  <el-col :span="17" style="padding:0">
                    <el-form-item prop="oldPassWord">
                      <el-input type="password" v-model="infoForm.oldPassWord"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <el-row :gutter="20" style="margin:0 0 10px 0">
                  <el-col :span="7" style="padding:0">
                    <span>新密码：</span>
                  </el-col>
                  <el-col :span="17" style="padding:0">
                    <el-form-item prop="newPassWord">
                      <el-input type="password" v-model="infoForm.newPassWord"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="info_btn">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { validPassword } from "@/utils/validate";
import { revamp } from "@/api/login";
import { mapGetters } from "vuex";
import router from "@/router";
import Cookies from "js-cookie";
export default {
  name: "headBar",
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
    return {
      totalCount: 0,
      dhtp: "",
      downloadUrl: process.env.DOWNLOAD_URL,
      pageObj: {
        pageNo: 1,
        pageSize: 10
      },
      username: "",
      dialogVisible: false,
      infoForm: {
        oldPassWord: "",
        newPassWord: "",
        id: ""
      },
      infoRules: {
        oldPassWord: [
          { required: true, validator: oldPassWord, trigger: "blur" }
        ],
        newPassWord: [
          { required: true, validator: newPassWord, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    backlogin() {
      this.$store.dispatch("LogOut", true);
    },
    handleClose() {
      this.infoForm.oldPassWord = "";
      this.infoForm.newPassWord = "";
      this.$refs.infoForm.resetFields();
      this.dialogVisible = false;
    },
    revamp_password() {
      this.dialogVisible = true;
    },
    info_btn() {
      let _this = this;
      this.$refs.infoForm.validate(valid => {
        if (valid) {
          revamp(_this.infoForm).then(res => {
            let data = res.data;
            if (data.success) {
              _this.handleClose();
              _this.$message({
                message: data.msg,
                type: "success"
              });
              _this.$store.dispatch("LogOut");
            } else {
              _this.$message.error(data.msg);
            }
          });
        } else {
          return false;
        }
      });
    },
    out_btn() {
      this.$store.dispatch("LogOut");
    },
  },
  mounted() {
    let _this = this;
    // this.getAdminList();
    this.username = '爸爸';
    this.infoForm.id = '343';
  },
  beforeDestroy () {
  },
  computed: {
    ...mapGetters(["token"])
  }
};
</script>

<style lang="scss" scoped>
.navHead {
  width:100%;
  height: 60px;
  overflow: hidden;
  border-bottom:  1px solid #eee;

  .headName {
    padding-left:20%;
    height: 60px;
    line-height: 60px;
    display: inline-block;
    font-size: 30px;
    font-weight: 900;
    font-family: "Times New Roman", Times, serif;
  }

  .headBell {
    cursor: pointer;
    position: absolute;
    left: -70px;
    // top:-45px;
    // margin-top: -45px;
    padding: 0 5px 0 15px;
    height: 60px;
    line-height: 50px;
    display: inline-block;
    font-size: 30px;
    font-weight: 900;
    color: #ffffff;
    font-family: "Times New Roman", Times, serif;
    &:hover {
      background-color: rgb(0, 0, 0);
    }
  }
  .headSelectWrap {
    height: 60px;
    float: right;
    .backlogin {
      height: 60px;
      float: left;
      line-height: 60px;
      margin-right: 75px;
      span {
        font-size: 16px;
        color: #ffffff;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .headSelect {
      height: 60px;
      float: right;
      // height: 30px;
      // margin: 18px 20px 0 0;
      line-height: 60px;
      margin-right: 20px;
      padding: 0 5px;
      position: relative;
    }
  }
  .info-content {
    span {
      display: block;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>
<style lang="scss">
// .el-popper .el-dropdown-menu{
//   background:red!important;
//   top:96px!important;
// }
.circle_point723 {
  // height:16px;
  // font-size:12px!important;
  // line-height:16px;
  // border-radius:42%;
  // background:rgb(246,110,110);
  // // border:1px solid #fff;
  // color:#fff!important;
  // padding:0 4px;
  background-color: #f56c6c;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #fff;
}
.navHead {
  .headSelect .el-dropdown {
    color: #fff !important;
    font-size: 16px;
    &:hover {
      background-color: rgb(0, 0, 0);
    }
  }
  .headSelect {
    .first_drop {
    }
  }
  .item {
    margin-top: 20px;
    margin-right: 15px;
  }
  .el-dropdown-menu__item {
    width: 170px;
  }
  .el-dialog__header {
    background: #307ecc;
    .el-dialog__title {
      color: #fff;
    }
  }
  .el-dialog__body {
    padding: 20px 20px 0 20px;
  }
  .el-dialog__footer {
    text-align: center;
  }
  .el-form-item {
    width: 100%;
    margin-bottom: 0;
    & > div {
      width: 100%;
    }
  }
}
</style>
