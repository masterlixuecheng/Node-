<template>
  <div class="bigLED">
    <div class="table_title">
      {{name}}
      <div class="tips">
        <span class="grey"></span>
        <span>未开始</span>
        <span class="green"></span>
        <span>进行中</span>
        <span class="red"></span>
        <span>已结束</span>
      </div>
    </div>
    <div class="table_header">
      <el-table border stripe style="width: 100%">
        <el-table-column prop="xmbh" show-overflow-tooltip label="项目编号"></el-table-column>
        <el-table-column prop="xmname" show-overflow-tooltip label="项目名称"></el-table-column>
        <el-table-column prop="jjfs" label="竞价方式" :formatter="jjfsFor"></el-table-column>
        <el-table-column prop="applyEndTime" label="报名截止时间" width="250"></el-table-column>
        <el-table-column prop="bidStartTime" label="竞价开始时间" width="250"></el-table-column>
        <el-table-column prop="gpjg" label="底价"></el-table-column>
        <el-table-column prop="currentPrice" label="当前报价"></el-table-column>
        <el-table-column prop="djs" label="剩余时间" width="250"></el-table-column>
        <el-table-column prop="zt" label="当前状态"></el-table-column>
      </el-table>
    </div>
    <div class="table">
      <el-scrollbar>
        <el-table :data="tableData" border stripe style="width: 100%" :row-style="rowStyle">
          <el-table-column prop="xmbh" show-overflow-tooltip label="项目编号">
            <template slot-scope="scope">
              <span @click="toDetail(scope.row)" style="cursor:pointer">{{scope.row.xmbh}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="xmname" show-overflow-tooltip label="项目名称"></el-table-column>
          <el-table-column prop="jjfs" label="竞价方式" :formatter="jjfsFor"></el-table-column>
          <el-table-column prop="applyEndTime" label="报名截止时间" :formatter="jzFor" width="250"></el-table-column>
          <el-table-column prop="bidStartTime" label="竞价开始时间" :formatter="ksFor" width="250"></el-table-column>
          <el-table-column prop="gpjg" label="底价">
            <template slot-scope="scope">
              <span>{{scope.row.gpjg}}{{scope.row.gpjgdw | gpjgdw }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="currentPrice" label="当前报价">
            <template slot-scope="scope">
              <span>{{scope.row.currentPrice ? scope.row.currentPrice : '--'}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="djs" label="剩余时间" width="250"></el-table-column>
          <el-table-column prop="zt" label="当前状态" :formatter="ztFor"></el-table-column>
        </el-table>
      </el-scrollbar>
    </div>
    <div class="table_footer" v-html="content"></div>
  </div>
</template>
<script>
import { formatDate, timeToDay } from "@/utils/data";
import { bigLED } from "@/api/settings/led";
import { gpjgdwMap } from "@/utils/config";
export default {
  data() {
    return {
      pageObj: {
        pageNo: 1,
        pageSize: 999
      },
      tableData: [],
      timeDev: 1,
      name: "",
      content: "",
      xzcode: "",
      ksdate: "",
      jsdate: ""
    };
  },
  methods: {
    jjfsFor(row) {
      //林权
      if (row.zcgltype == "10") {
        if (row.jyfs == 2) {
          return { 1: "正向竞价", 2: "反向竞价" }[row.jjfs];
        } else {
          return {
            1: "自由竞价",
            2: "阶梯竞价",
            3: "拍卖",
            4: "招投标",
            5: "其他"
          }[row.jyfs];
        }
      } else {
        //非林权, PS:醉了，类型不一样就算了，字典项还不一样，能不能行？
        if (row.jyfs == "1") {
          return { "1": "正向竞价", "2": "反向竞价" }[row.jjfs];
        } else {
          return {
            "1": "自由竞价",
            "2": "阶梯竞价",
            "3": "拍卖",
            "4": "招投标",
            "5": "其他"
          }[row.jyfs];
        }
      }
    },
    jzFor(row) {
      return formatDate(row.applyEndTime, "yyyy-MM-dd hh:mm:ss");
    },
    ksFor(row) {
      return formatDate(row.bidStartTime, "yyyy-MM-dd hh:mm:ss");
    },
    ztFor(row) {
      return {
        "6": "已发布",
        "7": "竞价中",
        "8": "待成交",
        "9": "已成交",
        "10": "终止转出",
        "11": "撤回",
        "12": "终止转出",
        "13": "协议成交",
        "14": "报名中"
      }[row.zt];
    },
    rowStyle({ row, rowIndex }) {
      if (row.zt == "7" || row.zt == "14") {
        return "color: green;";
      } else if (row.zt == "6") {
        return "color: #fff;";
      }
      return "color: #f50f0f;";
    },
    btn_search() {
      let obj = Object.assign({}, this.pageObj);
      obj.bidStartTime = this.ksdate;
      obj.bidEndTime = this.jsdate;
      bigLED(obj, this.xzcode).then(res => {
        let data = res.data;
        if (data.success) {
          this.tableData = data.data;
          this.interval();
          this.$nextTick(() => {
            this.tableScroll();
          });
        }
      });
    },
    interval() {
      if (window.timer) {
        clearInterval(window.timer);
      }
      window.timer = setInterval(() => {
        this.tableData = this.tableData.map(t => {
          t.djs = (t.bidEndTime && timeToDay(t.bidEndTime)) || "";
          return t;
        });
      }, 1000);
    },
    tableScroll() {
      let _this = this;
      let wrapper = document.getElementsByClassName("el-scrollbar__wrap")[0];
      wrapper.scrollTop = 0;
      if (window.timer2) {
        clearInterval(window.timer2);
      }
      window.timer2 = setInterval(() => {
        let height =
          document.getElementsByClassName("el-scrollbar__view")[0]
            .offsetHeight - wrapper.offsetHeight;
        if (height <= wrapper.scrollTop) {
          wrapper.scrollTop = 0;
        } else {
          wrapper.scrollTop += height / _this.timeDev;
        }
      }, 2000);
    }
  },
  mounted() {
    this.timeDev = this.$route.params.time;
    this.name = this.$route.params.name;
    this.content = this.$route.params.content;
    this.ksdate = new Date(Number(this.$route.params.ksdate));
    this.jsdate = new Date(Number(this.$route.params.jsdate)); 
    let xzcode = this.$route.params.xzcode; 
    this.xzcode = xzcode[xzcode.length - 1];
    this.btn_search();
    if (window.timer3) {
      clearInterval(window.timer3);
    }
    window.timer3 = setInterval(() => {
      this.btn_search();
    }, 30000);
  },
  beforeDestroy() {
    clearInterval(window.timer);
    clearInterval(window.timer2);
    clearInterval(window.timer3);
  },
  filters: {
    gpjgdw(val) {  
      return gpjgdwmap(val);
    }
  }
};
</script>
<style lang="scss" scoped>
.bigLED {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.table_title {
  position: relative;
  font-size: 40px;
  line-height: 100px;
  text-align: center;
  color: red;
  font-weight: 100;
  border-bottom: 1px solid #d5d3d3;
  background-color: #333;
  .tips {
    position: absolute;
    bottom: 0;
    right: 20px;
    padding: 10px 20px;
    text-align: right;
    color: #fff;
    line-height: 20px;
    font-size: 14px;
    span {
      margin-left: 10px;
    }
    .grey {
      width: 10px;
      height: 10px;
      background-color: #ccc;
    }
    .green {
      width: 10px;
      height: 10px;
      background-color: green;
    }
    .red {
      width: 10px;
      height: 10px;
      background-color: #f50f0f;
    }

    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
.table {
  flex: 1;
  height: 0;
  background-color: #333;
  border-bottom: 1px solid #d5d3d3;
}
.table_footer {
  padding-left: 20px;
  line-height: 50px;
  background-color: #333;
}
</style>

<style lang="scss">
.bigLED {
  .el-table {
    color: #fff;
    font-size: 22px;
  }
  .el-table,
  .el-table__expanded-cell,
  .el-table th,
  .el-table tr {
    background-color: #333;
    border: none !important;
  }
  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background-color: #505050;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #455463;
  }
  .el-table--border,
  .el-table--border th,
  .el-table--border td {
    text-align: center;
    border-bottom: none !important;
    border-right: 1px solid #d5d3d3 !important;
  }
  .el-table--border th {
    border-bottom: 1px solid #d5d3d3 !important;
  }
  .table_header {
    .el-table__empty-block {
      display: none;
    }
  }
  .table {
    .el-table__header-wrapper {
      display: none;
    }
  }
}
</style>
