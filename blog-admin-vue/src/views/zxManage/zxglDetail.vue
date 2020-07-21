<template>
  <div class="mhxxDetail">
    <el-form :model="formData" ref="form" label-width="150px" :rules="rules">
      <el-form-item label="标题" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <!-- <el-form-item label="来源">
        <el-input v-model="formData.source"></el-input>
      </el-form-item>
      <el-form-item label="关键字">
        <el-input v-model="formData.keywords" placeholder="多个关键字用空格隔开"></el-input>
      </el-form-item> -->
      <el-form-item label="图片">
        <img-upload :action="action" v-model="formData.picture"></img-upload>
      </el-form-item>
      <el-form-item label="内容">
        <Tinymce ref="editor" v-model="formData.content"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-if="isEdit" @click="btn_save">确定</el-button>
        <el-button @click="btn_back">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { postMethod, getMethod } from "@/api/detailComponents/detailComponents";
import { formatDate } from "@/utils/data";
import { getToken } from "@/utils/auth";
export default {
  name: "zxglDetail",
  data() {
    return {
      id: "",
      name: "",
      parent: "",
      isEdit: "",
      formData: {},
      rules: {
        title: [{ required: true, message: "不能为空" }]
      },
      tableData: [],
      action: "/file/upload",
      action2: "/CqjyFz/file/ajax/upload_file"
    };
  },
  methods: {
    dateFormatter(row) {
      return formatDate(row.czsj);
    },
    btn_save() {
      let _this = this;
      this.$refs.form.validate(valid => {
        if (valid) {
          let obj = Object.assign({}, _this.formData);
          let url = '/blog/new';
          if (obj.id) {
            url = '/blog/update'
          }
          postMethod(url, obj).then(res => {
            let data = res.data;
            if (data.success) {
              _this.btn_back();
              _this.$message({
                message: data.msg,
                type: "success"
              });
            } else {
              _this.$message({
                message: data.msg
              });
            }
          });
        }
      });
    },
    btn_back() {
      this.formData = {};
      this.$router.push({ name: this.name });
    },
    getXw() {
      getMethod('/blog/detail', {id: this.id}).then(res => {
        let data = res.data;
        if (data.success) {
          this.formData = data.data;
        }
      });
    },
  },
  computed: {
    ...mapGetters(["xzqh", "nickname"])
  },
  mounted() {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.parent = this.$route.params.parent;
    this.isEdit =
      this.$route.params.isEdit == "true" || this.$route.params.isEdit == true
        ? true
        : false;
    if (this.id != "-1") {
      this.getXw();
    }
  }
};
</script>
<style lang="scss" scoped>
.mhxxDetail {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
