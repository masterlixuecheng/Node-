<template>
  <div>
      <!-- multiple -->

    <el-upload
      :class="noDel ? 'flag' : ''"
      :action="fullAction"
      :file-list="fileList"
      multiple
      :list-type="picture?'picture-card':'text'"
      :before-remove="beforeRemove"
      :on-remove="handleRemove"
      :on-progress="handleProgress"
      :on-success="handleSuccess"
      :on-error="handleError"
    >
      <el-button v-if="!picture" icon="el-icon-upload" size="small" type="primary">{{text}}</el-button>
      <i v-if="picture" slot="default" class="el-icon-plus"></i>
      <div v-if="picture" slot="file" slot-scope="{file}">
        <img style="height:100%" class="el-upload-list__item-thumbnail" :src="file.url">
        <span class="el-upload-list__item-actions">
          <i class="el-icon-zoom-in" @click="handlePreview(file)"></i>
          <i class="el-icon-printer" @click="handlePrinter(file)"></i>
          <i v-if="!noDel" class="el-icon-delete" @click="handleRemoveImg(file)"></i>
        </span>
      </div>
    </el-upload>
    <viewer :images="fileList" @inited="inited">
      <img style="display:none" v-for="(item,index) in fileList" :src="item.url" :key="index">
    </viewer>
  </div>
</template>
<script>
// import { getLodop } from "@/utils/LodopFuncs";
export default {
  name: "file-upload",
  data() {
    return {
      fullAction: "",
      fileList: [],
      loading: "",
      baseUrl: process.env.DOWNLOAD_URL,
      viewer: ""
    };
  },
  props: {
    action: "",
    text: {
      default: "点击上传"
    },
    picture: Boolean,
    value: {
      default: () => []
    },
    noDel:Boolean
  },
  watch: {
    value(val) {
      let arr = JSON.parse(JSON.stringify(val));
      let hasApi = process.env.DOWNLOAD_URL;
      this.fileList = arr.map(v => {
        if (v.url.indexOf(hasApi) == -1) {
          v.url = hasApi + v.url;
        }
        return v;
      });
    }
  },
  methods: {
    inited(viewer) {
      this.viewer = viewer;
    },
    handlePreview(file) {
      this.viewer.view(this.fileList.findIndex(f => f.url == file.url));
    },
    // handlePrinter(file) {
    //   const LODOP = getLodop();
    //   LODOP.PRINT_INIT("");
    //   LODOP.ADD_PRINT_IMAGE(
    //     30,
    //     20,
    //     600,
    //     600,
    //     "<img border='0' src='" + file.url + "' />"
    //   );
    //   LODOP.SET_PRINT_STYLEA(0, "Stretch", 2); //按原图比例(不变形)缩放模式
    //   LODOP.PREVIEW();
    // },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleRemove(file, fileList) {
      let _this = this;
      let arr = fileList.slice();
      arr.map(s => {
        s.url = s.url.replace(_this.baseUrl, "");
      });
      this.$emit("input", arr);
    },
    handleRemoveImg(file) {
      this.$confirm(`确定移除 ${file.name}？`).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        let arr = this.fileList.filter(f => f.url != file.url);
        arr.map(s => {
          s.url = s.url.replace(this.baseUrl, "");
        });
        this.$emit("input", arr);
      });
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
      arr.map(s => {
        s.url = s.url.replace(this.baseUrl, "");
      });
      this.$emit("input", arr);
      console.log(arr)
    },
    handleError(err, file, fileList) {
      this.loading.close();
      // fileList.splice(fileList.length - 1, 1);
      this.$message.error("上传失败");
    }
  },
  mounted() {
    this.fullAction = process.env.BASE_URL + this.action;
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
<style>
.viewer-container{
  z-index: 9999!important;
}
</style>
<style lang="scss">
.flag { 
  .el-upload--picture-card {
    display: none;
    width: 112px;
    height: 52px;
    line-height: 50px;
  }
}
</style>

