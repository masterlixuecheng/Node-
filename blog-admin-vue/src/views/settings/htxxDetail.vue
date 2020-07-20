<template>
  <div class="htxx">
    <el-form :model="formData" ref="form" label-width="150px" :rules="rules">
      <el-form-item label="后台名称" prop="xtmc">
        <el-input v-model="formData.xtmc"></el-input>
      </el-form-item>
      <el-form-item label="登录页Logo" prop="xtlogo">
        <el-button size="small" type="danger" @click="btn_clear('xtlogo')">清除登录页Logo</el-button>
        <logo-upload :action="action" v-model="formData.xtlogo"></logo-upload>
      </el-form-item>
      <el-form-item label="顶部Logo" prop="dhtp">
        <el-button size="small" type="danger" @click="btn_clear('dhtp')">清除顶部Logo</el-button>
        <logo-upload :action="action" v-model="formData.dhtp"></logo-upload>
      </el-form-item>
      <el-form-item label="后台所属区域">
        <el-cascader id="xzqh" :options="options" v-model="xtssqyList" change-on-select @change="handleItemChange" :props="props" clearable></el-cascader>
      </el-form-item>
      <el-form-item label="确权接口" prop="c1">
        <el-input v-model="formData.c1" placeholder="根据身份证查承包方编码"></el-input>
        <el-input v-model="formData.c2" placeholder="根据承包方编码查询地块"></el-input>
      </el-form-item>
      <el-form-item label="更新地块状态" prop="t1">
        <el-input v-model="formData.t1" placeholder="更新地块状态服务地址"></el-input> 
      </el-form-item> 
      <el-form-item label="地图服务" prop="c3">
        <el-input v-model="formData.c3" placeholder="农地确权地块数据服务"></el-input>
        <el-input v-model="formData.c4" placeholder="图层名称（工作空间：图层名）"></el-input>
      </el-form-item> 
      <el-form-item label="后台icon" prop="xticon">
        <el-button size="small" type="danger" @click="btn_clear('xticon')">清除后台icon</el-button>
        <span style="font-size: 14px;color: #606266;">重新登录后即可生效</span>
        <img-upload :action="action" v-model="formData.xticon"></img-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="btn_save">保 存</el-button>
        <el-button type="info" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {
  getAdminList,
  getAdminById,
  updateAdmin,
  addAdmin,
  delAdmin
} from "@/api/settings/htxx";
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
export default {
  name: "htxxDetail",
  data() {
    return {
      downloadUrl: process.env.DOWNLOAD_URL,
      xtssqyList: [],
      pageObj: {
        pageNo: 1,
        pageSize: 10
      },
      id: "",
      isEdit: false,
      formData: {
        xtssqy: []
      },
      rules: {
        xtmc: [{ required: true, message: "不能为空" }],
        // xtmc: [{ required: true, message: "不能为空" }],
        // dhtp: [{ required: true, message: "不能为空" }],
        // xticon: [{ required: true, message: "不能为空" }]
      },
      options: [],
      props: {
        value: "code",
        label: "name"
      },
      action: "/mhxx/file/ajax/upload_file"
    };
  },
  methods: {
    btn_clear(val){
      if(val == 'xticon'){
        this.formData.xticon = ''
      }else{
      val == 'xtlogo' ? this.formData.xtlogo = '' : this.formData.dhtp = '' ; 
      }
    },
    //设置网站logo、标题、icon
    setWeb(val) {
      document.title = val.xtmc;
      sessionStorage.setItem("webTit", val.xtmc);
    },
    btn_save() {
      let _this = this;
      this.formData.xtssqy = this.xtssqyList.join(",");
      this.formData.t2 = document.getElementById("xzqh").innerText.replace(">", "").replace(/\s+/g,""); 
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.formData.id) {
            updateAdmin(this.formData).then(res => {
              let data = res.data;
              if (data.success) {
                this.setWeb(this.formData);
              }
              _this.handleRes(res);
            });
          } else {
            addAdmin(this.formData).then(res => {
              let data = res.data;
              if (data.success) {
                this.setWeb(this.formData);
              }
              _this.handleRes(res);
            });
          }
        }
      });
    },
    getAdminList() {
      let obj = Object.assign({}, this.pageObj);
      getAdminList(obj).then(res => {
        let data = res.data;
        if (data.success) {
          if (data.msg.data.length) {
            this.formData = data.msg.data[0];
            window.sessionStorage.setItem('findCbfbm',data.msg.data[0].c1);
            window.sessionStorage.setItem('searchByCbfbm',data.msg.data[0].c2);
            window.sessionStorage.setItem('mapService',data.msg.data[0].c3);
            window.sessionStorage.setItem('workSpace',data.msg.data[0].c4);
            window.sessionStorage.setItem('updatedkStatus',data.msg.data[0].t1);
            this.xtssqyList = (this.formData.xtssqy && this.formData.xtssqy.split(",")) || [];
          if(this.xtssqyList.length>0){
            this.getSuperiorXzqh(this.xtssqyList[this.xtssqyList.length - 1]);
          }
          }
        }
      });
    },
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        this.$message({
          message: data.msg,
          type: "success"
        });  
        this.$router.go(-1);
      } else {
        this.$message({
          message: data.msg
        });
      }
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
    if(this.$route.params.data != -1){
      this.formData = this.$route.params.data;
      this.xtssqyList = ( this.$route.params.data.xtssqy &&  this.$route.params.data.xtssqy.split(",")) || [];
      if(this.xtssqyList.length>0){
        this.getSuperiorXzqh(this.xtssqyList[this.xtssqyList.length - 1]);
      }
    }else{
      this.getRegion();
    }
  }
};
</script>
<style lang="scss" scoped>
.htxx {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
