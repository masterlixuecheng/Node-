<template>
  <div class="source">  
    <el-form :inline="true" :model="queryFrom"> 
      <el-form-item label="名称">
        <el-input v-model="queryFrom.xtmc" placeholder="请输入名称" clearable></el-input>
      </el-form-item> 
      <el-form-item label="区划">
        <el-cascader id="xzqh" :options="options" v-model="queryFrom.xtssqy" change-on-select @change="handleItemChange" :props="props" clearable></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="btn_search()">查询</el-button>
        <el-button type="success" icon="el-icon-plus" v-permission="'gygl_add'" @click="btn_detail('')">添加</el-button>
      </el-form-item>
    </el-form>
        <el-table :data="tableData" border style="width: 100%" class="tableDown">
          <el-table-column type="index" :index="indexMethod" label="序号" width="50"></el-table-column>
          <el-table-column prop="xtmc" label="名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="t2" label="所属区划" show-overflow-tooltip></el-table-column>
          <el-table-column prop="xtlogo" label="登录LOGO" >
            <template slot-scope="scope">
              <span><img :src="baseUrl + scope.row.xtlogo" class="avatar"></span> 
            </template>
          </el-table-column> 
          <el-table-column prop="xzqh" label="是否启用" width="80">
            <template slot-scope="scope">
              <span> <el-switch v-model="scope.row.sfqy" @change="changeLiWai(scope.row.id)"></el-switch></span>
            </template>
          </el-table-column> 
      <el-table-column prop="address" label="操作" width="300">
        <span slot-scope="scope">  
          <el-button plain size="mini" type="primary" @click="btn_detail(scope.row)">修改</el-button> 
          <el-button plain size="mini" type="danger" @click="btn_del(scope.row.id)">删除</el-button>
          <el-button plain size="mini" type="warning" @click="btn_bank(scope.row)">划入账户设置</el-button>
        </span>
      </el-table-column>
        </el-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="pageObj.pageNo"
          :page-size="pageObj.pageSize"
          layout="total, prev, pager, next"
          :total="pageObj.totalCount"
        ></el-pagination>  
  </div>
</template>
<script>
import { mapGetters } from "vuex"; 
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
import { getAdminList, delAdmin ,liWaiAdmin} from "@/api/settings/htxx";
export default {
  name: "htxx",
  components: { 
  },
  data() {
    return {
      queryFrom: {},
      formData: {},  
      props: {
        value: "code",
        label: "name"
      }, 
      tableData: [], 
      options: [], 
      pageObj: {
        pageNo: 1,
        pageSize: 11,
        totalCount:0
      },
      baseUrl: process.env.DOWNLOAD_URL
    };
  },
  watch: {
    sptype(val) {
      this.formData.sptype = val;
      this.formData.csjb = "";
    }
  },
  computed: {
    ...mapGetters(["token"])
  },
  methods: { 
    getRegion() {
      getNextRegion(0).then(res => {
        let data = res.data;
        if (data) {
          this.options = data;
        }
      });
    },
    //行政区划-联级查询
    handleItemChange(val) {
      let _this = this;
      let code = '';
      let currentCode = val || '0';
      if (typeof val != "string") {
        currentCode = val[val.length - 1];//非首次加载，获取当前最后一位行政区划，作为参数传递
        code = currentCode;
      } else {
        code = currentCode;//首次加载
      }
      getNextRegion(code).then(res => {
        let data = res.data;
        if (data) {
          if (code.length == 9) {//删除村的children
            data.map(d => {
              delete d.children;
            });
          }
          _this.options = moreMenu(currentCode, _this.options, handleNextCode(code,sessionStorage.getItem("xzqhOfLastUser"),data));
        }
      });
    },
    // 划入账户设置
    btn_bank(row){ 
      this.$router.push({
        name: "htxxBankList",
        params: {
          data: row,
          id:row.id&& row.id || '-1'
        }
      });
    },
    btn_del(val){
      delAdmin(val).then(res => {
        this.handleRes(res);
      });
    },
    btn_detail(row) { 
      this.$router.push({
        name: "htxxDetail",
        params: {
          data: row || "-1",
        }
      });
    },
    btn_search() {
      let obj = Object.assign({}, this.queryFrom, this.pageObj); 
      if(obj.xtssqy){
        obj.xtssqy = obj.xtssqy[obj.xtssqy.length -1]
      }else{
        delete obj.xtssqy
      }
      getAdminList(obj).then(res => {
        let data = res.data;
        if (data.success) {
          if (data.msg.data.length) {
            this.tableData = data.msg.data.map(c=>{
              c.sfqy = c.sfqy && c.sfqy == '1' ? true : false;
              return c
            }) 
            this.pageObj.totalCount = data.msg.totalCount;
          }
        }
      });
    }, 
    //是否例外
    changeLiWai(val) { 
      liWaiAdmin(val).then(res => {
        this.handleRes(res);
      });
    },
    handleChange(value) { 
    },      
    indexMethod(index) {
      let start = (this.pageObj.pageNo - 1) * this.pageObj.pageSize;
      return start + index + 1;
    },
    handleCurrentChange(val) {
      this.$nextTick(() => {
        this.btn_search();
      });
    },
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        this.$message({
          message: data.msg,
          type: "success"
        }); 
        this.btn_search();
      } else {
        this.$message({
          message: data.msg
        });
      }
    }, 
  },
  mounted() {
    this.getRegion();
    this.btn_search();
  }
};
</script>
<style lang="scss" scoped>

.source {
  height: 100%;
  
.avatar {
  border:1px solid #ccc;
  width: 550px;
  height: 40px;
  display: block;
  background: #e6e6e6;
}
  .source_tree {
    float: left;
    width: 200px;
    height: 81vh;
    overflow: auto;
    border-right: 1px dotted #999;
  }
  .source_form {
    float: left;
    width: calc(100% - 200px);
    height: 100%;
    padding: 5px 0 20px 20px;
  }
  .panel-title {
    height: 35px;
    background: #ecedf1;
    border: 1px solid #e3e4e8;
    border-left-style: solid;
    border-left-width: 2px;
    border-left-color: #4285f4;
    line-height: 32px;
    span {
      font-size: 14px;
      color: #555;
      margin-left: 15px;
    }
  }
}
</style>
<style lang="scss">
.source {
  .no_label {
    .el-form-item__label {
      color: #fff;
    }
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .tableDown{
    .cell>span{
      width:90%;
      display:inline-block; 
    }
    .cell>span>span{
      width:100%;
      display:inline-block; 
    }
    .cell>span>span>.el-input{
      width:100%;
    } 
  }
  
  
}
</style>
