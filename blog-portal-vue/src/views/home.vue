<template>
  <div class="home">
    <div class="content">
      <el-scrollbar wrapClass="infinite_list" v-infinite-scroll="load">
        <el-card shadow="always" class="item" v-for="i in tableData" :key="i.id">
          <el-row :gutter="22">
            <el-col :span="18">
              <h3 @click="openDetail(i)">{{ i.title }}</h3>
              <p>{{ i.title }}</p>
              <p><span>{{ i.author }}</span>-<span>{{ i.author }}</span></p>
            </el-col>
              <img :src="i.picture" :alt="i.title">
          </el-row>
        </el-card>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { postMethod} from "@/api/zxManage/zxgl";
export default {
  name: "home",
  data() {
    return {
      isOver: false,
      count: 0,
      tableData: [],
      pageObj: {
        pageNo: 1,
        pageSize: 5
      },
    };
  },
  computed: {
    ...mapGetters(["navOpen"])
  },
  watch: {
  },
  methods: {
    openDetail(row) {
      // let {href} = this.$router.resolve({
      //   name: "homeDetail",
      //   params: {
      //     id: (row && row.id) || "-1",
      //   }
      // }); 
      // window.open(href, '_blank');
      
        this.$router.push({
          name: "homeDetail",
          params: {
            id: (row && row.id) || "-1",
          }
        });
    },
    load () {
      if ( this.isOver ) {
        return
      }
      this.pageObj.pageNo++;
      console.log('this.pageObj.pageNo...' + this.pageObj.pageNo)
      this.btn_search(this.pageObj.pageNo)
    },
    btn_search(pageNo) {
      let _this = this;
      let obj = Object.assign({}, _this.pageObj)
      postMethod('/blog/list', obj).then(res => {
        let data = res.data;
          if (data.success&&data.data.data.length > 0) {
            let arr = data.data.data;
            arr.map(c=> {
              _this.tableData.push(c)
            })
          } else {
            this.isOver = true;
          }
      });
    },
  },
  mounted() {
    this.btn_search();
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
    .item {
      margin: 0 5% 30px 5%;
      width: 90%;
      height:150px;
      cursor: pointer;
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.3);
      }
      img {
        float:right;
        width:110px;
        height:110px;
      }
    }
    .infinite_list {
      height: calc(100vh - 60px);
    }
  }  
}
</style>
