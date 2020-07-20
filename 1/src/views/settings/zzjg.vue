<template>
  <div class="jobNew clearfix">
    <slot></slot>
    <div class="job_tree">
      <el-button
        size="small"
        icon="el-icon-download"
        type="primary"
        v-permission="'zzjg_download'"
        @click="btn_download"
      >模板下载</el-button>
      <file-upload
        style="display:inline-block"
        text="模板上传"
        :showList="false"
        :action="action"
        v-permission="'zzjg_upload'"
      ></file-upload>
      <div class="tree">
        <el-scrollbar class="page-component__scroll" style="height:100%;">
          <el-tree  :load="loadNode" lazy :data="data" node-key="id" :props="defaultProps" @node-click="nodeClick" :default-expanded-keys="openId">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ node.label }}</span>
              <span v-if="!data.leaf">
                <i
                  class="el-icon-plus"
                  title="新增下级节点"
                  v-permission="'zzjg_add'"
                  @click.stop="() => append(node, data)"
                ></i>
                <i
                  class="el-icon-delete"
                  title="删除节点"
                  v-permission="'zzjg_del'"
                  @click.stop="() => remove(node, data)"
                ></i>
              </span>
            </span>
          </el-tree>
        </el-scrollbar>
      </div>
    </div>
    <div class="job_form">
      <el-scrollbar style="height:100%">
        <el-form :inline="true" :model="formData" label-width="160px" ref="treeForm" :rules="rules">
          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="机构代码" prop="code">
                <el-input v-model="formData.code" placeholder="机构代码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="1">
              <el-form-item label="机构名称" prop="name">
                <el-input v-model="formData.name" placeholder="机构名称"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item class="no_label" label=".">
                <el-button
                  size="small"
                  type="primary"
                  v-permission="'zzjg_edit'"
                  @click="save_btn"
                >确定</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {
  getNextRegion,
  getNowRegion,
  getRegion,
  setZzjg,
  addZzjg,
  delZzjg,
  uploadMb
} from "@/api/settings/zzjg";
export default {
  name: "zzjg",
  data() {
    return {
      id: "",
      pid: "",
      data: [],
      openId:[],
      formData: {},
      action: "/Organization/importOrganization",
      defaultProps: {
        label: "name"
      },
      rules: {
        code: [{ required: true, message: "不能为空", trigger: "blur" }],
        name: [{ required: true, message: "不能为空", trigger: "blur" }],
      },
      baseUrl: process.env.DOWNLOAD_URL,
      baseUrl1: process.env.BASE_URL, 
    };
  },
  methods: {
    //新增
    append(node, data) {
      this.id = "";
      this.pid = data.code;
      if (!this.pid) {
        this.$message({
          type: "error",
          message: "请添加上级区划"
        });
        return;
      }
      this.formData = {};
      data.children = [];
      data.children.push({ name: "新增节点", pid: this.pid });
    },
    //删除
    remove(node, data) {
      this.$confirm("你确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        delZzjg(data.id).then(res => {
          this.handleRes(res);
        });
      });
    },
    //节点点击
    nodeClick(data, node) {
      this.id = data.id;
      this.pid = data.pid;
      this.formData = Object.assign({}, data);
      if (this.$refs.treeForm) {
        this.$refs.treeForm.resetFields();
      }
    },
    //懒加载
    loadNode(node,resolve) {
      let obj = node.data;
      const { level, data } = node;
          if(!level){
            return;
          }
          if(data.disabled){
            resolve([]);
            return
          }
          getNextRegion(obj.code).then(res => {
          let data = res;
          if (data.status == 200 ) {
            return resolve(data.data);
          } else {
            return resolve([]);
          }
          });
    },
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        this.$message({
          message: data.msg,
          type: "success"
        });
        this.formData = {};
        this.pid = null;
        this.getTree();
        this.getAreaTree();
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    //修改区划后更新session中存储的区划数组
    getAreaTree() {
      getNowRegion(this.$store.state.user.xzqh.split(",")[ this.$store.state.user.xzqh.split(",").length - 1 ]).then(res => {
        let data = res.data;
        if (data) {
          let oriTree = data.msg;
          oriTree = JSON.stringify(oriTree);
          sessionStorage.setItem("oriTree", oriTree);
        }
      });
    },
    save_btn() {
      let _this = this;
      if (!this.pid) {
        this.$message({
          type: "error",
          message: "未选择上级区划"
        });
        return;
      }
      this.$refs.treeForm.validate(valid => {
        if (valid) {
          let obj = Object.assign({}, _this.formData);
          obj.pid = _this.pid;
          let parentCode = obj.code.slice(0, obj.pid.length);
          if (parentCode != obj.pid&&_this.pid!='0') {
            this.$message({
              type: "error",
              message: "‘机构代码’不合法"
            });
            return;
          }
          if (obj.id) {
            setZzjg(obj).then(res => {
              _this.handleRes(res);
            });
          } else {
            addZzjg(obj).then(res => {
              _this.handleRes(res);
            });
          }
        } else {
          return false;
        }
      });
    },
    btn_download() {
      window.open(
        "http://106.3.43.154:15273/upload/产权交易平台组织机构模板.xlsx"
      );
    },
    getTree() {
      let _this = this;
      getNowRegion(
        this.$store.state.user.xzqh.split(",")[ this.$store.state.user.xzqh.split(",").length - 1 ]
      ).then(res => {
        let data = res.data;
        if (data.success) {
          _this.data = data.msg;
          // this.formData = Object.assign({}, this.data[0]);
          if(_this.data[0]){
            _this.openId.push(_this.data[0].id);
          }
        }
      });
    }
  },
  mounted() {
    this.getTree();
  },
  computed: {
    ...mapGetters({ userType: "type" })
  }
};
</script>

<style lang="scss" scoped>
.jobNew {
  height: 100%;
  .job_tree {
    float: left;
    width: 350px;
    font-size: 14px;
    .tree {
      height: calc(100vh - 200px);
      padding-top: 10px;
      overflow: auto;
    }
  }
  .job_form {
    float: left;
    width: calc(100% - 350px);
    height: 100%;
    padding-top: 20px;
    padding-left: 20px;
    border-left: 1px dotted #999;
    .new_title {
      margin-top: 0;
      color: #5b93d3;
    }
    .cl_input {
      width: calc(100% - 72px);
    }
    .cl_btn {
      padding: 5px;
    }
    .operate_box {
      line-height: 40px;
    }
  }
  .save {
    margin-right: 20px;
    margin-top: 15px;
  }
}
</style>
<style lang="scss">
.jobNew {
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .el-scrollbar__view {
    height: 100%;
  }
}
</style>





