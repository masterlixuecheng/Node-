<template>
<div>
  <div class="navHead"> 
      <img src="../../../static/img/155.png" alt class="headName">
  </div>
  <div class="zxglPreview">  
    <div class="detailbox">
      <div class="detail"> 
          <div>
              <h3>{{formData.title}}</h3>
              <p class="detailTime">
                  <span>发布时间：{{formData.time|dateMap}}</span>&nbsp;&nbsp;&nbsp; 
                  <span v-if="formData.source">来源：{{formData.source}}</span>
              </p>
              <div class="line"></div>
              <div v-html="formData.content" class="content"></div>
          </div>
      </div> 
    </div>
  </div>
  <div class="callMe1">
      <div class="callMe">
      <div class="lxfs">
        <div class="wz">
          <div data-v-d071d8e2="" class="wz"><div class="footer-c clearfix" style="height: 300px; width: 100%; font-size: 12px; color: #c7c6c6;">
                <div class="tj-container" style="width: 1200px; height: 100%; margin: 0 auto;">
                <div class="footer-top clearfix" style="position: relative; width: 100%; height: 200px; border-bottom: 1px solid #575859; color: #c7c6c6;">
                <div class="footer-link" style="float: left; width: 500px; height: 100%;">
                  <div class="footer-link-top" style="height: 112px; padding-top: 36px;">
                    <ul style="list-style: none; margin: 0; padding: 0;">
                      <li style="float: left; height: 16px; font-family: 'microsoft yahei'; font-size: 12px; line-height: 16px;"><a style="text-decoration: none; color: inherit;"  >关于我们</a></li>
                      <li class="line" style="width: 0; margin: 2px 15px; height: 16px; border-left: 1px solid #c7c6c6; float: left; font-family: 'microsoft yahei'; font-size: 12px;">&nbsp;</li>
                      <li style="float: left; height: 16px; font-family: 'microsoft yahei'; font-size: 12px; line-height: 16px;"><a style="text-decoration: none; color: inherit;"  >联系我们</a></li>
                      <li class="line" style="width: 0; margin: 2px 15px; height: 16px; border-left: 1px solid #c7c6c6; float: left; font-family: 'microsoft yahei'; font-size: 12px;">&nbsp;</li>
                      <li style="float: left; height: 16px; font-family: 'microsoft yahei'; font-size: 12px; line-height: 16px;"><a style="text-decoration: none; color: inherit;"  >互动交流</a></li>
                      <li class="line" style="width: 0; margin: 2px 15px; height: 16px; border-left: 1px solid #c7c6c6; float: left; font-family: 'microsoft yahei'; font-size: 12px;">&nbsp;</li>
                      <li style="float: left; height: 16px; font-family: 'microsoft yahei'; font-size: 12px; line-height: 16px;"><a style="text-decoration: none; color: inherit;" >常见问题</a></li>
                    </ul>
                  </div>
                  <div class="footer-link-bottom">&nbsp;</div>
                </div>
                <div class="footer-erweima" style="float: right; margin-top: 56px; margin-right: 15px; background-color: #fff; width: 110px; height: 110px;"><img style="width: 100%; height: 100%;" src="http://repo.tjnjs.com/pool/protected/tianjin/image/portal/HeGUGDRUg6gFl-P90X4_mxMOwppi1fjA.jpg"></div>
                </div>
                <div class="footer-bottom clearfix" style="padding-top: 15px; width: 100%; padding-bottom: 7px; border-bottom: 1px solid #575859;">
                <p class="footer-info1" style="float: left; margin-right: 30px;"><span style="display: block; line-height: 20px; font-size: 12px; color: #c7c6c6; margin-bottom: 8px;">福建省农村产权交易所 <span style="padding-left: 2em;">注册地址:福建福州市钰华街106号</span> <span style="padding-left: 2em;">津公网安备 12011502000077</span> </span> <span style="display: block; line-height: 20px; font-size: 12px; color: #c7c6c6; margin-bottom: 8px;">运营中心:福建省市福州市琼州道103号 <span style="padding-left: 2em;">邮编:300203</span>&nbsp;<span style="padding-left: 2em;">ICP备 16007007号</span> </span></p>
                <p class="footer-info2" style="float: right; margin-right: 30px;"><span style="font-size: 24px; display: block; line-height: 20px; color: #c7c6c6; margin-bottom: 8px;">咨询电话：0591-58791052</span> <span style="font-size: 12px; margin-top: 10px; display: block; line-height: 20px; color: #c7c6c6; margin-bottom: 8px;">电话投诉举报：15900201024(可接收短信) 电子邮箱举报：tjnjsjdts@163.com</span></p>
                </div>
</div>
</div>
</div>
        </div>
      </div>
  </div>

</div> 
</div> 
</template>
<script>
import { mapGetters } from "vuex";
import { getXw, setXw } from "@/api/zxManage/zxgl";
import { formatDate } from "@/utils/data"; 
export default {
  filters: {
    dateMap(val) {
      return formatDate(val);
    }
  },
  name: "zxglPreview",
  data() {
    return {
      id: "",   
      formData: {}, 
      action: "/dept/file/ajax/upload_file"
    };
  },
  methods: {
    dateFormatter(row) {
      return formatDate(row.czsj);
    }, 
    btn_back() { 
      this.$router.go(-1);
    },
    getXw() {
      getXw(this.$route.params.id).then(res => {
        let data = res.data;
        if (data.success) { 
          this.formData = { 
            title:data.data.title,
            time:data.data.publishedtime,
            source:data.data.source || '',
            content:data.data.content
          };
        }
      });
    } 
  },
  computed: {
    ...mapGetters(["xzqh", "nickname"])
  },
  mounted() { 
    this.getXw();  
  },
  beforeRouteLeave(to, from, next){
      to.meta.keepAlive = true
      next()
  }
};
</script>
<style lang="scss" scoped>
.zxglPreview {
  width: 80%;
  margin: 0 auto;
  overflow: hidden; 
  .detail {
    width: 1300px;
    margin: 0 auto;
    .detailTit {
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
      color: #999;
    }
    h3 {
      text-align: center;
      font-size:24px;
    }
    .detailTime {
      text-align: center;
      color: #999;
    }
    .line {
      height: 20px;
      width: 100%;
    }
    .content {
      border: 1px solid #eee;
      min-height: 600px;
    }
      .cursor{
          cursor: pointer;
      }
  } 
}
</style>
<style lang="scss" scoped>
.navHead {
  height: 200px;
  background-color: #1c78ef;
  background: url("../../../static/img/bg.jpg") 100% 100% no-repeat;
  background-size: cover; 
  position:relative;
  .headName {
    position: absolute;
    top: calc(50% - 36px);
    left: 10%;
  }
} 
</style>

<style lang="scss" scoped>
.callMe1{
  background-color: rgb(44, 49, 52);
  clear: both;
  color:#c7c6c6;
  .callMe {
  width: 100%; 
  .lxfs {
    display: flex;
    width: 64%;
    min-width: 1200px;
    margin: 0 auto; 
    .wz{
      flex: 2;
    }
  }
  .dh{
    width:100px;
  }
} 
}

</style>



