<template>
  <div class="imgNoPadding">
    <el-upload
      :class="isDel ? 'flag' : ''"
      :action="fullAction"
      multiple
      :show-file-list="showList"
      :file-list="fileList"
      list-type="picture-card"
      :before-remove="beforeRemove"
      :on-remove="handleRemove"
      :on-progress="handleProgress"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-preview="handlePreview"
    >
      <el-button size="small" type="primary" class="imgNoPaddingBtn">{{text}}</el-button>
    </el-upload>
    <el-dialog :visible.sync="dialogVisiblePic" id="top1"  width="900" height="600" :append-to-body="true"> 
        <img id="img1" width="100%" :src="dialogImageUrl" alt style="poeition:relative;" :style="{transform: 'rotate('+current+'deg)'}"> 
        <div id="btn_wrap" style="position:absolute;bottom:5%;width:150px;height:30px;margin-left:45%;"> 
            <el-tooltip class="item" effect="dark" content="向左旋转90度" placement="top">
              <el-button @click="spin1">←</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="向右旋转90度" placement="top">
              <el-button @click="spin2">→</el-button> 
            </el-tooltip> 
        </div> 
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "file-upload",
  data() {
    return {
      current:0,
      dialogImageUrl: "",
      dialogVisiblePic: false,
      fullAction: "",
      fileList: [],
      loading: "",
      count: 0
    };
  },
  props: {
    isDel: Boolean,
    action: "",
    text: {
      default: "本地上传"
    },
    picture: Boolean,
    showList: true,
    value: {
      default: () => []
    }
  },
  watch: {
    value(val) {
      if (!val) {
        return;
      }
      let arr = JSON.parse(JSON.stringify(val));
      this.fileList = arr.map(v => {
        let hasApi = process.env.DOWNLOAD_URL;
        if (v.url.indexOf(hasApi) == -1) {
          v.url = hasApi + v.url;
        }
        return v;
      });
    }
  },
  methods: {
    spin1(){
      this.current = (this.current-90)%360; 
    },
    spin2(){
      this.current = (this.current+90)%360; 
    },
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisiblePic = true;
    },
    beforeRemove(file, fileList) {
      if (this.isDel) {
        this.$message({
          message: "没有删除权限",
          type: "warning"
        });
        return false;
      }
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleRemove(file, fileList) {
      this.$emit("input", fileList);
    },
    handleProgress() {
      this.loading = this.$loading({
        lock: true,
        text: "文件上传中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
    },
    handleSuccess(res, file, fileList) {
      this.loading.close();
      if (res.success) {
        this.$message({
          message: "上传成功",
          type: "success"
        });
      } else {
        this.$message({
          message: res.msg || "上传失败"
        });
        fileList.splice(fileList.length - 1, 1);
        return;
      }
      let arr = fileList.slice();
      let obj = {};
      obj.url = res.msg;
      obj.name = file.name;
      arr.splice(arr.indexOf(file), 1, obj);
      this.$emit("input", arr);
    },
    handleError(err, file, fileList) {
      this.loading.close();
      fileList.splice(fileList.length - 1, 1);
      this.$message.error("上传失败");
    }
  },
  mounted() {
    this.fullAction = process.env.BASE_URL + this.action;
    // this.fileList = JSON.parse(JSON.stringify(this.value));
    let fileList = JSON.parse(JSON.stringify(this.value));
      this.fileList = fileList.map(v => {
        if(v.url.indexOf(this.baseUrl)==-1){
          v.url = this.baseUrl + v.url;
        }
        return v;
      });
  }
};
</script>
<style lang="scss">
.imgNoPadding{
  .el-upload--picture-card {
    width: 0px;
    height: 0px;
    line-height: 50px;
  }
  .el-button--small{
    padding:4px 14px 4px 14px!important;
  }
  .imgNoPaddingBtn{
    padding-right:  25px!important;
    padding-left:  25px!important;
    font-size:14px;
    line-height:26px;
  }
}
  
.flag { 
  .el-upload--picture-card {
    display: none;
    width: 112px;
    height: 52px;
    line-height: 50px;
  }
}
</style>
<style lang="scss" scoped>
.top1 {
  position:relative;
  #btn_wrap{ 
    margin-left:45%;
    width:150px;
    height:80px;
    line-height:30px!important;
    border-radius:5px;
    background:rgba(0,0,0,0.7);
    .btn_left , .btn_right{
      width:20px;
      height:20px;
      float:left;
    }
  }
}
</style>

