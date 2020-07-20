<template>
  <div class="source">
    <!-- <el-form :inline="true" :model="pageObj">
      <el-form-item>
        <el-select v-model="pageObj.id" @change="dictSearch">
          <el-option v-for="item in Options" :label="item.name" :value="item.id" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-add" @click="btn_add('1')">添加字典类别</el-button>
      </el-form-item>
    </el-form>-->
    <div class="source_tree2">
      <p>
        <el-form :inline="true" :model="queryFrom">
          <el-form-item>
            <el-input size="mini" v-model="lbname" placeholder="请输入字典类别名称" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="mini" type="primary" @click="dictSelect(lbname)">查询</el-button>
          </el-form-item>
        </el-form>
      </p>
      <el-scrollbar class="page-component__scroll" style="height:calc(100% - 120px)">
        <el-tree
          :data="treeData"
          node-key="id"
          ref="tree" 
          accordion
          @node-click="nodeClick"
          highlight-current
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span class="mg10px">{{ node.label }}</span>
            <span>
              <i class="el-icon-plus" v-permission="'source_add'" @click.stop="() => btn_add('新建字典类别')"></i>
              <i
                class="el-icon-delete"
                v-permission="'source_del'"
                @click.stop="() => remove(node, data)"
              ></i>
            </span>
          </span>
        </el-tree>
      </el-scrollbar>
    </div>
    <div class="source_form">
      <div class="header_zd">
        <span>>当前位置：<span style="color:#1064c1;">{{nowName}}</span></span>
        <p>
          <el-form :inline="true" :model="queryFrom">
            <el-form-item>
              <el-input size="mini" v-model="zdname" placeholder="请输入字典项名称" clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-button size="mini" type="primary" @click="dictSearch(zdname)">查询</el-button>
              <el-button size="mini" type="warning" @click="btn_add('新建字典项')">新建</el-button>
            </el-form-item>
          </el-form>
        </p>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" :index="indexMethod" label="序号" width="60"></el-table-column>
        <el-table-column prop="sjcode" label="字典编码" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="字典项" show-overflow-tooltip></el-table-column>
        <el-table-column prop="code" label="字典值" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button
              plain
              size="mini"
              type="warning"
              v-permission="'mhxx_edit'"
              @click="btn_add('修改字典项',scope.row)"
            >修改</el-button>
            <el-button
              plain
              size="mini"
              type="danger"
              v-permission="'mhxx_del'"
              @click="btn_del(scope.row)"
            >删除</el-button>
          </template>
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
    <zdglModal :data="data" :modalShow="zdglModal" :pid="pageObj.id" :type="type" @close="close"></zdglModal>
  </div>
</template>
<script>
import {
  dictAdd,
  dictUpdate,
  dictSearch,
  dictDel,
  dictSelectById,
  dictSelect
} from "@/api/settings/zdgl";
import zdglModal from "./zdgl_modal.vue";
export default {
  name: "mhxx",
  components: {
    zdglModal
  },
  data() {
    return {
      zdname:'',
      lbname:'',
      nowName: "",
      data: {},
      type: "",
      Options: [],
      treeData: [],
      openNodes: [],
      queryFrom: {
        id: null
      },
      pageObj: {
        pageNo: 1,
        pageSize: 10,
        totalCount: 0
      },
      tableData: [],
      isEdit: false,
      mhxxId: "",
      zdglModal: false
    };
  },
  methods: {
    dictSearchlbname(){
//       let data = {
//         bz: null,
// code: "zjzy",
// id: 10,
// kz1: null,
// kz2: null,
// kz3: null,
// kz4: null,
// kz5: null,
// kz6: null,
// name: "专家专业",
// label: "专家专业",
// pid: null,
// sjcode: null,
// sort: 1,
// type: "1",
//       }
this.$refs.tree.setChecked(10 ,true, true);
      // this.$refs.tree.setCheckedKeys(['专家专业']);
      // this.$refs.tree.setCheckedKeys(['zjzy']);
      // this.$refs.tree.setCheckedKeys([10]);
    },
    btn_search_zd() {},
    remove(node, data) {
      this.$confirm("你确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          dictDel(data.id).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.dictSelect2();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    btn_add(type,row) {
      this.type = type;
      this.data = row;
      this.zdglModal = true;
    },
    handleChange(value) {
      console.log(value);
    },
    dictSearch(name,noid) {
      if (name) {
        this.pageObj.name = name;
      }
      let obj = Object.assign({}, this.pageObj);
      if(noid){
        delete obj.id
        obj.type = '1';
      }else{
        obj.type = '2';
      }
      dictSearch(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.pageObj.name = '';
          this.tableData = data.msg.data;
          this.pageObj.totalCount = data.msg.totalCount;
        }
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
        this.dictSearch();
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    close() {
      this.data = {};
      this.isEdit = false;
      this.zdglModal = false;
      this.dictSelect2();
    },
    btn_detail(row, edit) {
      this.data = row;
      this.zdglModal = true;
    },
    btn_del(row) {
      this.$confirm("你确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          dictDel(row.id).then(res => {
            this.handleRes(res);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    dictSelect(name) {
      dictSelect(name).then(res => {
        let data = res.data;
        this.Options = data.msg;
        this.treeData = data.msg.map(c => {
          c.label = c.name;
          return c;
        });

        this.pageObj.id = data.msg[0].id;
        this.nowName = data.msg[0].name;
        this.dictSearch();
      });
    },
    dictSelect2() {
      dictSelect().then(res => {
        let data = res.data;
        this.Options = data.msg;
        this.treeData = data.msg.map(c => {
          c.label = c.name;
          return c;
        });
        this.dictSearch();
      });
    },
    nodeClick(data, node) {
      this.pageObj.id = data.id;
      this.nowName = data.name;
      this.dictSearch();
      // this.formData = Object.assign({}, data);
    }
  },
  mounted() {
    // this.btn_search();
  },
  created() {
    this.dictSelect();
  }
};
</script>
<style lang="scss" scoped>
.header_zd {
  width: 100%;
  height: 40px;
  background: #e1e9ff; 
  span {
    line-height: 40px;
    font-size: 14px;
    color: #313437;
  }
  p {
    width: 315px;
    float: right;
    overflow: hidden;
  }
}
</style>
<style lang="scss" scoped>
.source {
  height: 100%;
  .mg10px {
    margin-right: 10px !important;
  }
  .source_tree2 {
    float: left;
    width: 260px;
    height: 75vh;
    overflow: auto;
  }
  .source_form {
    float: left;
    width: calc(100% - 260px);
    height: 100%;
    padding: 20px;
    border-left: 1px dotted #999;
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
}
</style>

