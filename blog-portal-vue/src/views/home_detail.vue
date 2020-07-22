<template>
  <div class="home">
    <div class="content">
      <div class="header">
        <h3>{{ formData.title }}</h3>
        <h4> 作者： {{ formData.author }}</h4>
        <h3> 创建时间： {{ dateFormatter(formData.createtime) }}</h3>
      <br>
        <img v-if="formData.picture" :src="formData.picture" >
      <br>
      </div>
      <div v-html="formData.content">

      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { getMethod} from "@/api/zxManage/zxgl";
import { formatDate } from "@/utils/data";
export default {
  name: "homeDetail",
  data() {
    return {
      formData: [],
    };
  },
  methods: {
    dateFormatter(time) {
      return formatDate(time);
    },
    getById(id) {
      let _this = this;
      let obj = {
        id: id
      }
      getMethod('/blog/detail', obj).then(res => {
        let data = res.data;
          if (data.success) {
            this.formData = data.data;
          } else {
            this.$message.error(data.msg || '失败')
          }
      });
    },
  },
  mounted() {
    let id = this.$route.params.id;
    this.getById(id);
  }
};
</script>
<style lang="scss" scoped>
.home {
  width:100%;
  .content {
    margin: 0 auto;
    width: 70%;
    min-width:700px;
    padding-top:20px;
    min-height:700px;
    .header {
      text-align: center;
    }
  }  
}
</style>
