<template>
  <div class="source">  
    <el-form :inline="true" :model="queryFrom"> 
      <el-form-item>
              <!-- <el-button icon="el-icon-search" type="primary" @click="btn_search()">查询</el-button>  -->
        <el-button type="success" icon="el-icon-plus" v-permission="'gygl_add'" @click="btn_modal('')">添加</el-button>
        <el-button type="info" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
      </el-form-item>
    </el-form>
        <el-table :data="tableData" border style="width: 100%" class="tableDown">
          <el-table-column type="index" :index="indexMethod" label="序号" width="50"></el-table-column>
          <el-table-column prop="lx" label="类型" show-overflow-tooltip></el-table-column>
          <el-table-column prop="c2" label="所属区划" show-overflow-tooltip></el-table-column> 
          <el-table-column prop="khh" label="账号开户银行" show-overflow-tooltip></el-table-column>
          <el-table-column prop="hkr" label="账号名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="c1" label="价款划入账号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="操作" width="180">
            <span slot-scope="scope">  
              <el-button plain size="mini" type="primary" @click="btn_modal(scope.row)">修改</el-button> 
              <el-button plain size="mini" type="danger" @click="btn_del(scope.row.id)">删除</el-button> 
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
    <htxxModal :modalShow="htxxModal" :xtid="xtid" :data="data"  @close="close" @edit="close"></htxxModal>
  </div>
</template>
<script>
import { mapGetters } from "vuex"; 
import { handleEmpty } from "@/utils/config";
import htxxModal from "./htxx_bank_modal";
import { getBankList, delBank,addBank,updateBank,getBankById} from "@/api/settings/htxx";
export default {
  name: "htxxBankList",
  components: {
    htxxModal
  },
  data() {
    return {
      xtid:'',
      data:{},
      queryFrom: {},
      formData: {},  
      props: {
        value: "code"
      },
      htxxModal: false,
      tableData: [], 
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
    //关联用户弹窗
    btn_modal(val) { 
      if(val){
        this.data = val;
      }
      this.xtid = this.$route.params.data.id;
      this.htxxModal = true;
    },
    close() {
      this.data = {};
      this.htxxModal = false;
      this.btn_search();
    }, 
    // 划入账户设置
    btn_bank(val){
      this.$router.push({
        name: "htxxBankList",
        params: {
          data: row || "-1",
        }
      });
    },
    btn_del(val){
      delBank(val).then(res => {
        this.handleRes(res);
      });
    }, 
    btn_search() {
      let obj = Object.assign({}, this.pageObj);  
      obj.xtid = this.$route.params.data.id;
      getBankList(obj).then(res => {
        let data = res.data; 
        if (data.success) {
          if (data.msg.data.length) {
            this.tableData = data.msg.data.map(c=>{
              c.xzcode = c.xzcode.split(',') || []; 
              return c
            }) 
            this.pageObj.totalCount = data.msg.totalCount;
          }
        }
      });
    }, 
    //是否例外
    changeLiWai(val) {
      let obj = {
        id: val.id, 
      };
      if (val.by2) {
        obj.sflw = "1";
      } else {
        obj.sflw = "0";
      }
      updateLiWai(obj).then(res => {
        this.handleRes(res);
      });
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
