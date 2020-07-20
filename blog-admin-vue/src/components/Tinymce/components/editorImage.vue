<template>
  <div class="upload-container">
    <el-button
      v-if="uploadBtn"
      icon="el-icon-upload"
      size="mini"
      :style="{background:color,borderColor:color}"
      @click=" dialogVisible=true"
      type="primary"
    >上传图片</el-button>
    <el-dialog append-to-body :visible.sync="dialogVisible">
      <el-upload
        class="editor-slide-upload"
        :action="action"
        :multiple="true"
        :file-list="fileList"
        :show-file-list="true"
        list-type="picture-card"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </el-dialog>
  </div>
</template>

<script>
// import { getToken } from 'api/qiniu'

export default {
  name: "editorSlideUpload",
  props: {
    color: {
      type: String,
      default: "#1890ff"
    }
  },
  data() {
    return {
      uploadBtn: true,
      dialogVisible: false,
      listObj: {},
      fileList: [],
      action: process.env.BASE_URL + "/dept/file/ajax/upload_file"
    };
  },
  methods: {
    uploadFiles() {
      
      var That = this;
      let file = this.$refs.upload.$refs["upload-inner"].$refs.input; //获取文件数据
      let fileList = file.files;
      var imgFile;
      let reader = new FileReader(); //html5读文件
      reader.readAsDataURL(fileList[0]); //转BASE64
      reader.onload = function(e) {
        //读取完毕后调用接口
        imgFile = e.target.result;
        let obj = {
          id: "loginLogo",
          configGroup: "logo",
          configItem: "loginLogo",
          itemValue: imgFile
        };
        return BaseApi.uploadFiles(obj).then(res => {
          if (res.status == "SUCCESS") {
            AlertBox("图片上传成功！", "success", true).then(() => {
              return That.getSysLogo(); //调用获取数据接口
            });
          } else {
            Alert("图片上传失败", res);
          }
        });
      };
    },

    checkAllSuccess() {
      
      return Object.keys(this.listObj).every(
        item => this.listObj[item].hasSuccess
      );
    },
    handleSubmit() {
      
      const arr = Object.keys(this.listObj).map(v => this.listObj[v]);
      if (!this.checkAllSuccess()) {
        this.$message(
          "请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！"
        );
        return;
      }
      console.log(arr);
      this.$emit("successCBK", arr);
      this.listObj = {};
      this.fileList = [];
      this.dialogVisible = false;
    },
    handleSuccess(response, file) {
      
      const uid = file.uid;
      const objKeyArr = Object.keys(this.listObj);
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          this.listObj[objKeyArr[i]].url = process.env.DOWNLOAD_URL + response.msg;
          this.listObj[objKeyArr[i]].hasSuccess = true;
          return;
        }
        console.log(this.listObj)
      }
    },
    handleRemove(file) {
      const uid = file.uid;
      const objKeyArr = Object.keys(this.listObj);
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]];
          return;
        }
      }
    },
    beforeUpload(file) { 
      
      const _self = this;
      const _URL = window.URL || window.webkitURL;
      const fileName = file.uid;
      this.listObj[fileName] = {};
      return new Promise((resolve, reject) => {
        if(file.type == "video/mp4"){
          let video = document.createElement('video');
            _self.listObj[fileName] = {
              hasSuccess: false,
              uid: file.uid,
              width: this.width,
              height: this.height
          };
        }else{
          const img = new Image();//创建图片标签
          img.src = _URL.createObjectURL(file);
          img.onload = function() {
            _self.listObj[fileName] = {
              hasSuccess: false,
              uid: file.uid,
              width: this.width,
              height: this.height
            };
          }
        }
        console.log('_self.listObj[fileName]='+ JSON.stringify(_self.listObj[fileName]));
        console.log('_self='+ JSON.stringify(_self.listObj));
        console.log('asd'+ JSON.stringify(this.listObj));
        resolve(true);
      });
    }
  },
  mounted() {
    if (this.$route.name == "htgl") {
      this.uploadBtn = false;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.editor-slide-upload {
  margin-bottom: 20px;
  /deep/ .el-upload--picture-card {
    width: 100%;
  }
}
</style>
