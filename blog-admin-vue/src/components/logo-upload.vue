<template>
  <el-upload class="logo_uploade" :action="fullAction" :show-file-list="false" :before-remove="beforeRemove" :on-remove="handleRemove" :on-progress="handleProgress" :on-success="handleSuccess" :on-error="handleError">
    <img v-if="value" :src="baseUrl+value" class="avatar">
    <i v-else class="el-icon-plus my_uploade_icon"></i>
  </el-upload>
</template>
<script>
export default {
  name: "img-upload",
  data() {
    return {
      fullAction: "",
      imageUrl: "",
      loading: "",
      baseUrl: process.env.DOWNLOAD_URL
    };
  },
  props: {
    action: "",
    value: ""
  },
  methods: {
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleRemove(file, fileList) {
      this.$emit("input", "");
    },
    handleProgress() {
      this.loading = this.$loading({
        lock: true,
        text: "文件上传中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
    },
    handleSuccess(res, file) {
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
      this.$emit("input", res.msg);
    },
    handleError(err, file, fileList) {
      this.loading.close();
      fileList.splice(fileList.length - 1, 1);
      this.$message.error("上传失败");
    }
  },
  mounted() {
    this.fullAction = process.env.BASE_URL + this.action;
  }
};
</script>

<style lang="scss">
.logo_uploade {
  
.avatar {
  border:1px solid #ccc;
  width: 550px;
  height: 50px;
  display: block;
  background: #e6e6e6;
}
  
  .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-upload:hover {
    border-color: #409eff;
  }
  .my_uploade_icon {
    font-size: 28px;
    color: #8c939d;
    width: 500px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }
}
</style>