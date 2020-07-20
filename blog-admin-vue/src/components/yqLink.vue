<template>
  <div style="background-color: #2c3134;clear:both">
    <div class="callMe">
      <div class="lxfs">
        <div class="wz" v-html="yqForm.mhfooter"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { postMethod } from "@/api/zxManage/zxgl";
export default {
  name: "yqLink",
  data() {
    return {
      yqForm: {},
      baseUrl: process.env.DOWNLOAD_URL
    };
  },
  computed: {
    ...mapGetters(["xzqh"])
  },
  methods: {
    getMessage() {
      let url = "/CqjyMhgl/selectCqjyMhglByXzqh";
      let obj = {
        mhssqy: this.xzqh
      };
      let _this = this;
      postMethod(url, obj).then(res => {
        let data = res.data;
        _this.yqForm = data.msg;
      });
    }
  },
  mounted() {
    this.getMessage();
  }
};
</script>
<style lang="scss" scoped>
.callMe {
  width: 100%;
  // background: #0e222d;
  .lxfs {
    display: flex;
    width: 64%;
    min-width: 1200px;
    margin: 0 auto;
    // height: 173px;
    // div {
    //   flex: 1;
    //   text-align: left;
    //   // padding-top: 20px;
    //   // img {
    //   //   width: 100px;
    //   //   height: 100px;
    //   //   margin: 0 auto 5px;
    //   //   display: inline-block;
    //   // }
    //   // p {
    //   //   color: #999;
    //   //   text-align: center;
    //   //   font-size: 12px;
    //   // }
    // }
    .wz {
      flex: 2;
    }
  }
}
.callMeFs {
  width: 100%;
  margin-top: 30px;
  // background: #0c1519;
  .yqlj {
    height: 68px;
    border-bottom: 1px solid #999;
    margin-top: 10px;
    width: 64%;
    min-width: 1200px;
    margin: 0 auto;
    h3 {
      height: 40px;
      font-size: 14px;
      color: #899;
      line-height: 40px;
      margin: 0;
    }
    div {
      height: 28px;
      line-height: 28px;
      font-size: 12px;
      color: #899;
      span {
        margin-right: 20px;
        color: #899;
      }
    }
  }
  .jszc {
    width: 100%;
    text-align: center;
    color: #999;
    margin-top: 5px;
    font-size: 14px;
  }
}
// .callMe {
//   clear: both;
//   width: 100%;
//   background: #0e222d;
//   .lxfs {
//     width: 64%;
//     min-width: 1200px;
//     margin: 0 auto;
//     margin-top: 4.8vh;
//     display: flex;
//     div {
//       flex: 1;
//       text-align: center;
//       img {
//         width: 100px;
//         height: 100px;
//         margin: 25px auto 5px;
//         display: inline-block;
//       }
//       p {
//         color: #999;
//         text-align: center;
//         font-size: 12px;
//       }
//     }
//     .wz {
//       flex: 2;
//       margin: 20px auto 5px;
//       p {
//         font-size: 16px;
//         text-align: left;
//         line-height: 30px;
//       }
//     }
//   }
// }
// .callMeFs {
//   width: 100%;
//   background: #0c1519;
//   .yqlj {
//     height: 68px;
//     border-bottom: 1px solid #999;
//     margin-top: 10px;
//     width: 64%;
//     min-width: 1200px;
//     margin: 0 auto;
//     h3 {
//       height: 40px;
//       font-size: 14px;
//       color: #899;
//       line-height: 40px;
//       margin: 0;
//     }
//     div {
//       height: 28px;
//       line-height: 28px;
//       font-size: 12px;
//       color: #899;
//       span {
//         margin-right: 20px;
//         color: #899;
//       }
//     }
//   }
//   .jszc {
//     width: 100%;
//     text-align: center;
//     color: #999;
//     margin-top: 5px;
//     font-size: 14px;
//   }
// }
</style>


