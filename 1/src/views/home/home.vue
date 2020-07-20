<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="top_box">
          <span class="icon1"></span>
          <span>
            本月供应项目
            <span class="num">{{bygyxm || 0}}</span>个
          </span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="top_box">
          <span class="icon2"></span>
          <span>
            本月需求项目
            <span class="num">{{byxqxm || 0}}</span>个
          </span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="top_box">
          <span class="icon3"></span>
          <span>
            本月成交项目
            <span class="num">{{bycjxm || 0}}</span>个
          </span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="top_box">
          <span class="icon4"></span>
          <span>
            本月成交金额
            <span class="num">{{bycjje || 0}}</span>元
          </span>
        </div>
      </el-col>
    </el-row>
    <!-- <el-row :gutter="20">
      <el-col :span="12">
        <div id="echarts_bar" class="echarts_box"></div>
      </el-col>
      <el-col :span="12">
        <div id="echarts_pie" class="echarts_box"></div>
      </el-col>
    </el-row> -->
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="bottom_title">总量</div>
        <el-row :gutter="20">
          <el-col :span="8" @click.native="getLine(1,'供应项目')">
            <div class="bottom_box bottom_icon1">
              <span>供应项目</span>
            </div>
          </el-col>
          <el-col :span="8" @click.native="getLine(2,'需求项目')">
            <div class="bottom_box bottom_icon2">
              <span>需求项目</span>
            </div>
          </el-col>
          <el-col :span="8" @click.native="getLine(3,'竞价项目')">
            <div class="bottom_box bottom_icon3">
              <span>竞价项目</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8" @click.native="getLine(4,'待成交项目')">
            <div class="bottom_box bottom_icon4">
              <span>待成交项目</span>
            </div>
          </el-col>
          <el-col :span="8" @click.native="getLine(5,'成交项目')">
            <div class="bottom_box bottom_icon5">
              <span>成交项目</span>
            </div>
          </el-col>
          <el-col :span="8" @click.native="getLine(6,'成交金额')">
            <div class="bottom_box bottom_icon6 active">
              <span>成交金额</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <div id="echarts_line" class="echarts_box"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { getHome, getLine } from "@/api/home/home";
import { getToken } from "@/utils/auth";
export default {
  name: "home",
  data() {
    return {
      flag: false,
      bycjje: "",
      bycjxm: "",
      bygyxm: "",
      byxqxm: "",
      myChart_line: "",
      option_line: {
        title: {
          text: "访问量"
        },
        tooltip: {
          trigger: "axis"
        },
        color: ["#f5ce64"],
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
          ]
        },
        yAxis: {
          type: "value",
          name: "单位:个"
        },
        series: {
          name: "成交金额",
          type: "line",
          data: [80,60,498,60,45,484,48,48,90,74,15,66]
        }
      }
    };
  },
  computed: {
    ...mapGetters(["navOpen"])
  },
  watch: {
    navOpen(val) {
      setTimeout(() => {
        this.myChart_line.resize();
      }, 200);
    }
  },
  methods: {
  },
  mounted() {
    let _this = this;
    const echarts = require("echarts");
    this.myChart_line = echarts.init(document.getElementById("echarts_line"));
    this.myChart_line.setOption(this.option_line);
    window.onresize = function() {
      _this.myChart_line.resize();
    };
  },
  destroyed() {
    window.onresize = function() {};
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding: 0 10px;
  .top_box {
    height: 90px;
    line-height: 90px;
    color: #fff;
    font-size: 18px;
    background-color: #4dcba3;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    box-shadow: 3px 3px 10px #aaa;
    img {
      float: left;
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    .num {
      font-size: 24px;
      font-weight: bold;
    }
  }
  .echarts_box {
    height: 350px;
    margin-top: 20px;
  }
  .bottom_title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 27px;
  }
  .bottom_box {
    height: 100px;
    margin-top: 30px;
    padding-top: 70px;
    border-radius: 10px;
    text-align: center;
    background-color: #ecf4fd;
    cursor: pointer;
  }
  @for $i from 1 through 4 {
    .icon#{$i} {
      display: inline-block;
      width: 50px;
      height: 50px;
      margin-right: 10px;
      vertical-align: middle;
      background-image: url("../../assets/images/icon"+$i+".png");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  @for $i from 1 through 6 {
    .bottom_icon#{$i} {
      background-image: url("../../assets/images/bottom_icon"+$i+".png");
      background-repeat: no-repeat;
      background-position: center 13px;
    }
  }
}
</style>
<style lang="scss">
.el-col {
  &:nth-child(2) {
    .top_box {
      background-color: #5bade3;
    }
  }
  &:nth-child(3) {
    .top_box {
      background-color: #f3c340;
    }
  }
  &:nth-child(4) {
    .top_box {
      background-color: #597694;
    }
  }
}
</style>
