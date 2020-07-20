<template>
  <div class="source">
    <div class="source_tree">
      <el-scrollbar class="page-component__scroll" style="height:100%">
        <el-tree
          :data="treeData"
          node-key="id"
          ref="tree"
          :default-expanded-keys="openNodes"
          accordion
          highlight-current
          @node-click="nodeClick"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>
              <i class="el-icon-setting" v-if="node.level==3"></i>
              {{ node.label }}
            </span>
          </span>
        </el-tree>
      </el-scrollbar>
    </div>
    <div class="source_form">
      <el-scrollbar style="height:80vh">
        <div class="form">
          <el-form
            :inline="true"
            :model="formData"
            label-width="150px"
            ref="form"
            class="demo-form-inline"
            :rules="rules"
            size="small"
          >
            <div class="panel-title" v-if="!isNode">
              <span>审批信息</span>
            </div>
            <el-row v-if="!isNode">
              <el-col :span="21" :offset="1">
                <el-form-item label="选择类型" prop="sptype">
                  <el-radio v-model="formData.sptype" label="0" @change="changeRadio">逐级审批</el-radio>
                  <el-radio v-model="formData.sptype" label="1" @change="changeRadio">平级审批</el-radio>
                  <el-radio v-model="formData.sptype" label="2" @change="changeRadio">自由审批</el-radio>
                  <el-radio v-model="formData.sptype" label="3" @change="changeRadio">条件审批</el-radio>
                </el-form-item>
              </el-col>
            </el-row>
            <div v-if="!isNode">
              <el-row>
                <el-col :span="10" :offset="1">
                  <el-form-item label="初始级别" prop="csjb" v-if="formData.sptype =='0'">
                    <el-select placeholder="逐级审批" v-model="formData.csjb">
                      <el-option label="省" value="0"></el-option>
                      <el-option label="市" value="2"></el-option>
                      <el-option label="县" value="4"></el-option>
                      <el-option label="乡" value="6"></el-option>
                      <el-option label="村" value="9"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="初始级别" prop="csjb" v-if="formData.sptype =='1'">
                    <el-select placeholder="平级审批" v-model="formData.csjb">
                      <el-option label="省" value="2"></el-option>
                      <el-option label="市" value="4"></el-option>
                      <el-option label="县" value="6"></el-option>
                      <el-option label="乡" value="9"></el-option>
                      <el-option label="村" value="12"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item
                    label="级别位数"
                    prop="csjb"
                    v-if="formData.sptype =='1' || formData.sptype =='0'"
                  >
                    <el-input v-model="formData.csjb" disabled></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="1" v-if="formData.sptype =='3'">
                  <el-form-item label="行政级别数(小于)" prop="csjb">
                    <el-select placeholder="请选择" v-model="formData.csjb">
                      <el-option label="省" value="2"></el-option>
                      <el-option label="市" value="4"></el-option>
                      <el-option label="县" value="6"></el-option>
                      <el-option label="乡" value="9"></el-option>
                      <el-option label="村" value="12"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10" v-if="formData.sptype =='3'">
                  <el-form-item label="行政级别数(其他)" prop="csjbs">
                    <el-select placeholder="请选择" v-model="formData.csjbs">
                      <el-option label="省" value="2"></el-option>
                      <el-option label="市" value="4"></el-option>
                      <el-option label="县" value="6"></el-option>
                      <el-option label="乡" value="9"></el-option>
                      <el-option label="村" value="12"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div class="panel-title" style="margin-bottom:15px;">
              <span>节点信息</span>
            </div>
            <el-row>
              <el-col :span="10" :offset="1">
                <el-form-item label="时限要求" prop="sxyq">
                  <el-input v-model="formData.sxyq">
                    <template slot="append">天</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="预警阈值" prop="yjyz">
                  <el-input v-model="formData.yjyz">
                    <template slot="append">天</template>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10" :offset="1">
                <el-form-item label="是否提醒" prop="sftx">
                  <el-switch v-model="formData.sftx" active-text="是" inactive-text="否"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row v-if="formData.sftx">
              <el-col :span="10" :offset="1">
                <el-form-item label="消息模板" prop="xxmb">
                  <el-select v-model="formData.xxmb" placeholder="请选择">
                    <el-option
                      v-for="item in htOptions"
                      :label="item.mbname"
                      :value="item.mbname"
                      :key="item.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="提醒人" prop="txr">
                  <el-input v-model="formData.txr"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="20" :offset="1">
                <el-form-item label="描述" prop="kz1">
                  <el-input type="textarea" v-model="formData.kz1"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="20" :offset="1">
                <el-form-item label="备注" prop="bz">
                  <el-input type="textarea" v-model="formData.bz"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10" :offset="1">
                <el-form-item class="no_label" label=".">
                  <el-button
                    size="medium"
                    type="primary"
                    v-permission="'source_save'"
                    @click="formSave"
                  >确 定</el-button>
                  <!-- <el-button
                    v-if="!isNode"
                    size="medium"
                    type="success"
                    v-permission="'bmgl_people'"
                    @click="btn_modal()"
                  >关联用户</el-button>-->
                  <el-button
                    v-if="!isNode"
                    size="medium"
                    type="success"
                    v-permission="'bmgl_people'"
                    @click="btn_modal()"
                  >关联用户组</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="panel-title" v-if="!isNode">
          <span>用户信息</span>
        </div>
        <el-table :data="tableData" border style="width: 100%" v-if="!isNode" class="tableDown">
          <el-table-column type="index" :index="indexMethod" label="序号" width="50"></el-table-column>
          <el-table-column prop="deptname" label="用户组名" show-overflow-tooltip></el-table-column>
          <el-table-column prop="areaname" label="所属区划" show-overflow-tooltip></el-table-column>
          <el-table-column prop="lytj" label="路由条件" show-overflow-tooltip></el-table-column>
          <el-table-column prop="xzqh" label="是否例外" width="80">
            <template slot-scope="scope">
              <span>
                <el-switch
                  v-model="scope.row.by2"
                  active-value="1"
                  inactive-value="0"
                  @change="changeLiWai(scope.row)"
                ></el-switch>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                :disabled="formData.sptype!='3'"
                @click="set_tj(scope.row)"
              >设置条件</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          v-if="!isNode"
          @current-change="handleCurrentChange"
          :current-page.sync="pageObj.pageNo"
          :page-size="pageObj.pageSize"
          layout="total, prev, pager, next"
          :total="totalCount"
        ></el-pagination>
      </el-scrollbar>
    </div>
    <!-- <peoModal :modalShow="peoModal" :by1="by1" @close="close" @edit="close"></peoModal> -->
    <yhzModal :modalShow="peoModal" :by1="by1" @close="close" @edit="close"></yhzModal>
    <tjModal :modalShow.sync="tjShow" :by1="by1" :id="id"></tjModal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {
  treeQuery,
  lcglFindUsers,
  updateLiWai,
  clickSearch,
  clickAdd
} from "@/api/settings/lcgl";
import { getRegion } from "@/api/detailComponents/detailComponents";
import { getWdmbList } from "@/api/settings/wend";
import { handleEmpty } from "@/utils/config";
// import peoModal from "./lcgl_modal";
import yhzModal from "./lcgl_yhz_modal";
import tjModal from "./lcgl_tj_modal";
export default {
  name: "lcgl",
  components: {
    // peoModal,
    yhzModal,
    tjModal
  },
  data() {
    return {
      formData: {
        csjb: "",
        sptype: "0",
        sftx: ""
      },
      rules: {
        sptype: [{ required: true, message: "不能为空" }],
        csjb: [{ required: true, message: "不能为空" }]
      },
      isNode: false,
      a: [],
      totalCount: 0,
      by1: "",
      peoModal: false,
      tjShow: false,
      tableData: [],
      treeData: [],
      openNodes: [],
      htOptions: [],
      pageObj: {
        pageNo: 1,
        pageSize: 11
      },
      id: ""
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
    set_tj(row) {
      this.id = row.id;
      this.tjShow = true;
    },
    changeRadio(val) {
      if (this.formData.csjb) {
        this.formData.csjb = "";
      }
    },
    //点击节点查询关联表单
    clickSearch() {
      clickSearch(this.by1).then(res => {
        let data = res.data;
        if (data.success) {
          this.formData = data.msg ? data.msg : {};
          if (data.msg && data.msg.sftx) {
            this.formData.sftx =
              data.msg.sftx == "true" && data.msg.sftx ? true : false;
          }
        }
      });
    },
    //保存表单
    formSave() {
      if (!this.by1) {
        this.$message({
          message: "请先选择左侧资源",
          type: "success"
        });
        return false;
      }
      this.$refs.form.validate(valid => {
        if (valid) {
          let url = this.formData.id ? "/node/update" : "/node/add";
          let obj = Object.assign({}, this.formData);
          if (this.formData.sptype != "3") {
            obj.csjbs = obj.csjb;
          }
          obj.processinfo = this.by1;
          obj.sptype = obj.sptype ? obj.sptype : "0";
          obj.kz2 = "3";
          if (!this.formData.id) {
            obj.token = this.token;
          }
          clickAdd(url, obj).then(res => {
            this.handleRes(res);
          });
        }
      });
    },
    //是否例外
    changeLiWai(val) {
      let obj = {
        id: val.id,
        by1: val.by1
      };
      if (val.by2 == "1") {
        obj.sflw = "1";
      } else {
        obj.sflw = "0";
      }
      updateLiWai(obj).then(res => {
        this.handleRes(res);
      });
    },
    handleChange(value) {},
    //点击子节点查询关联人
    findUsers() {
      let obj = Object.assign({}, this.pageObj);
      obj.token = this.token;
      obj.by1 = this.by1;
      lcglFindUsers(obj).then(res => {
        let data = res.data;
        if (data.success) {
          let Arr = data.data;
          Arr.map(v => {
            v.xzqh = v.areacode.split(",");
            // v.by2 = v.by2 == "1" ? true : false;
          });
          this.tableData = Arr.map(a => {
            a.lytj = a.lytj || "未设置";
            return a;
          });
          this.totalCount = data.totalCount;
        }
      });
    },
    //关联用户弹窗
    btn_modal() {
      if (!this.by1) {
        this.$message({
          message: "请先选择左侧资源",
          type: "success"
        });
        return false;
      }
      this.peoModal = true;
    },
    close() {
      this.peoModal = false;
      this.findUsers();
    },
    //点击树区分节点
    nodeClick(data, node) {
      if (node.level == 2) {
        this.isNode = false;
        this.by1 = node.parent.data.key + ":" + data.key;
        this.findUsers();
      } else if (node.level == 1) {
        this.isNode = true;
        this.by1 = data.name;
      }
      this.clickSearch();
    },
    // 树查询
    treeQuery() {
      treeQuery().then(res => {
        if (res.status == 200) {
          this.treeData = res.data;
        }
      });
    },
    btn_cancel(row) {},
    indexMethod(index) {
      let start = (this.pageObj.pageNo - 1) * this.pageObj.pageSize;
      return start + index + 1;
    },
    handleCurrentChange(val) {
      this.$nextTick(() => {
        this.findUsers();
      });
    },
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        this.$message({
          message: data.msg,
          type: "success"
        });
        this.findUsers();
        this.clickSearch();
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    //文档模板
    getWdmbList() {
      let obj = {
        pageNo: 1,
        pageSize: 999,
        mblx: 6
      };
      getWdmbList(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.htOptions = data.msg.data;
        }
      });
    }
  },
  mounted() {
    this.treeQuery();
    this.getWdmbList();
  }
};
</script>
<style lang="scss" scoped>
.source {
  height: 100%;
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
  .tableDown {
    .cell > span {
      width: 90%;
      display: inline-block;
    }
    .cell > span > span {
      width: 100%;
      display: inline-block;
    }
    .cell > span > span > .el-input {
      width: 100%;
    }
  }
}
</style>
