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
          @node-click="nodeClick"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>
              <i class="el-icon-setting" v-if="node.level==3"></i>
              {{ node.label }}
            </span>
            <span>
              <i
                class="el-icon-plus"
                v-if="node.level!=3"
                v-permission="'source_add'"
                @click.stop="() => append(node,data)"
              ></i>
              <i
                class="el-icon-circle-plus-outline"
                v-permission="'source_addTj'"
                @click.stop="() => appendTj(node,data)"
              ></i>
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
      <el-form
        :inline="true"
        :model="formData"
        label-width="90px"
        ref="treeForm"
        class="demo-form-inline"
        :rules="rules"
      >
        <el-row v-if="!isBtn">
          <el-col :span="10" :offset="1">
            <el-form-item label="资源路径" prop="uri">
              <el-input v-model="formData.uri" placeholder="资源路径" @blur="checkUri"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="3">
            <el-form-item label="资源名称" prop="pName">
              <el-input v-model="formData.pName" placeholder="资源名称"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="!isBtn">
          <el-col :span="10" :offset="1">
            <el-form-item label="资源图标">
              <el-input v-model="formData.pIcon" placeholder="资源图标"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="10" :offset="3">
            <el-form-item label="资源类型" prop="treetype">
              <el-select placeholder="请选择" v-model="formData.treetype">
                <el-option label="树" :value="0"></el-option>
                <el-option label="按钮" :value="1"></el-option>
                <el-option label="工具" :value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="!isBtn">
          <el-col :span="10" :offset="1">
            <el-form-item label="排序" prop="sort">
              <el-input v-model="formData.sort" placeholder="排序"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="isBtn">
          <el-col :span="10" :offset="1">
            <el-form-item label="权限编码" prop="uri">
              <el-input v-model="formData.uri" key="uri" placeholder="权限编码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="3">
            <el-form-item label="权限名称" prop="pName">
              <el-input v-model="formData.pName" key="pName" placeholder="权限名称"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="isBtn">
          <el-col :span="10" :offset="1">
            <el-form-item label="资源类型" prop="treetype">
              <el-select placeholder="请选择" v-model="formData.treetype">
                <el-option label="树" :value="0"></el-option>
                <el-option label="按钮" :value="1"></el-option>
                <el-option label="工具" :value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10" :offset="1">
            <el-form-item class="no_label" label=".">
              <el-button type="primary" v-permission="'source_save'" @click="formSave">确定</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import { treeQuery, formSave, treeDel, checkUri } from "@/api/settings/source";
export default {
  name: "settings_source",
  data() {
    return {
      length: 10,
      pid: "",
      formData: {},
      treeData: [],
      openNodes: [],
      isBtn: false,
      rules: {
        uri: [{ required: true, message: "不能为空", trigger: "blur" }],
        treetype: [{ required: true, message: "不能为空", trigger: "blur" }],
        sort: [{ required: true, message: "不能为空", trigger: "blur" }],
        pName: [{ required: true, message: "不能为空", trigger: "blur" }]
      },
      userId: ""
    };
  },
  methods: {
    checkUri(val) { 
      checkUri(this.formData.uri).then(res => {
        let data = res.data;
        if (!data.success) {
          this.formData.uri = "";
          this.$message({
            type: "warning",
            message: "该资源路径已存在，请重新输入"
          });
        }
      });
    },
    append(node, data) {
      this.isBtn = node.level == 2;
      this.pid = data.id;
      this.$refs.treeForm.resetFields();
      this.formData = {};
      const newChild = { label: "新增节点", parentId: data.id };
      if (!data.children) {
        data.children = [];
      }
      data.children.push(newChild);
    },
    appendTj(node, data) {
      this.isBtn = node.level == 3;
      this.pid = data.parentId;
      this.$refs.treeForm.resetFields();
      this.formData = {};
      let newChild = { label: "新增节点" };
      if (this.isBtn) {
        newChild = { label: "新增" };
        this.treeData.map(t => {
          t.children.map(c => {
            if (c.id == data.parentId) {
              c.children.push(newChild);
            }
            return c;
          });
        });
      }
      if (!data.parentId) {
        this.treeData.push(newChild);
      } else {
        this.treeData.map(t => {
          if (t.id == data.parentId) {
            t.children.push(newChild);
          }
          return t;
        });
      }
    },
    remove(node, data) {
      this.pid = data.parentId;
      if (node.childNodes.length) {
        this.$message({
          type: "warning",
          message: "请删除子节点后再操作~"
        });
        return;
      }
      this.$confirm("你确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          treeDel({ id: data.id }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.$refs.treeForm.resetFields();
            this.formData = {};
            this.treeQuery();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    nodeClick(data, node) {
      this.pid = data.parentId;
      this.isBtn = node.level == 3;
      this.formData = Object.assign({}, data);
      this.$refs.treeForm.resetFields();
    },
    treeQuery() {
      let obj = {
        userid: this.userId
      };
      treeQuery(obj).then(res => {
        let data = res.data;
        if (data.success) {
          this.treeData = data.data;
          this.length = data.data.length;
          this.formData = data.data[0];
        }
      });
    },
    formSave() {
      this.$refs.treeForm.validate(valid => {
        if (valid) {
          let _this = this;
          let url = "edit"; //ResponseTree

          let obj = Object.assign({}, this.formData);
          obj.sort = Number(obj.sort);
          obj.label = obj.pName;
          delete obj.pName;
          delete obj.parentId;
          delete obj.permission;
          if (!obj.id) {
            url = "add"; //TreeModel
            obj.pid = this.pid;
            //delete obj.id;

            delete obj.parentId;
          }
          delete obj.children;
          this.openNodes = [this.pid];
          formSave(url, obj).then(res => {
            let data = res.data;
            if (data.success) {
              _this.formData = {};
              _this.treeQuery();
              _this.$message({
                message: data.msg,
                type: "success"
              });
            }
          });
        }
      });
    }
  },
  mounted() {
    this.userId = this.$store.state.user.user.uUser.id;
    this.treeQuery();
    this.$refs.tree.setCheckedKeys([25]);
  }
};
</script>
<style lang="scss" scoped>
.source {
  height: 100%;
  .source_tree {
    float: left;
    width: 300px;
    height: 81vh;
    overflow: auto;
  }
  .source_form {
    float: left;
    width: calc(100% - 300px);
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
