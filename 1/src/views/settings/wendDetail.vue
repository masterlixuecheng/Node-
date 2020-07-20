<template>
  <div class="wendDetail">
    <el-form :model="formData" ref="form" label-width="150px" :rules="rules">
      <el-form-item label="模板名称">
        <el-input v-model="formData.mbname"></el-input>
      </el-form-item>
      <el-form-item label="流转方向" prop="lzfs">
        <el-select v-model="formData.lzfs" placeholder="请选择流转方向">
          <el-option label="转出" :value="1"></el-option>
          <el-option label="需求" :value="2"></el-option>
          <el-option label="招标" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="模板类型" prop="mblx">
        <el-select v-model="formData.mblx" placeholder="请选择模板类型">
          <el-option label="合同" value="0"></el-option>
          <el-option label="鉴证书" value="1"></el-option>
          <el-option label="报名承诺函" value="2"></el-option>
          <el-option label="竞价须知" value="3"></el-option>
          <el-option label="他项权证" value="4"></el-option>
          <el-option label="经营权证" value="5"></el-option>
          <el-option label="消息提醒" value="6"></el-option>
          <el-option label="服务条款" value="7"></el-option>
          <el-option label="用户须知" value="8"></el-option>
          <el-option label="隐私相关政策" value="9"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="打印方式">
        <el-radio-group v-model="formData.dysf" @change="change">
          <el-radio :label="1">模板套打</el-radio>
          <el-radio :label="0">普通打印</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="'模板内容'+(index+1)" v-for="(item,index) in formData.mbnrList" v-if="formData.dysf==1" :key="'item'+index">
        <el-input type="textarea" :rows="10" v-model="item.text"></el-input>
        <el-button type="success" plain icon="el-icon-plus" circle class="add_btn" title="新增" @click.prevent="addMb"></el-button>
        <el-button type="danger" plain icon="el-icon-delete" circle class="del_btn" title="删除" @click.prevent="delMb(item)" v-if="isEdit"></el-button>
        
        <img-upload v-if="formData.mblx == '4' || formData.mblx == '5' || formData.mblx == '1'" :action="action" v-model="item.tpurl"></img-upload>
      </el-form-item>
      <el-form-item label="模板内容" v-if="formData.dysf!=1">
        <Tinymce ref="editor" v-model="formData.mbnrList[0].text" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="btn_save" v-if="isEdit">确定</el-button>
        <el-button @click="btn_back">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getWdmb, addWdmb, setWdmb } from "@/api/settings/wend";
export default {
  name: "wendDetail",
  data() {
    return {
      a:"",
      id: "",
      isEdit: false,
      formData: { 
        dysf: 1,
        mbnrList: [{}]
      },
      rules: {
        lzfs: [{ required: true, message: "不能为空" }],
        mblx: [{ required: true, message: "不能为空" }]
      },
      action: "/CqjyFz/file/ajax/upload_file",
    };
  },
  methods: {
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        this.btn_back();
        this.$message({
          message: data.msg,
          type: "success"
        });
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    change(val) {
      this.formData.mbnrList = [{}];
    },
    btn_save() {
      let _this = this;
      this.$refs.form.validate(valid => { 
        if (valid) {
          if (this.formData.id) { 
            setWdmb(this.formData).then(res => {
              _this.handleRes(res);
            });
          } else { 
            this.formData.mbnrList.map(c =>{//后台让传一个空的tpurl，不然报空指针
              if(!c.tpurl){
                c.tpurl = '';
              }
            })
            addWdmb(this.formData).then(res => {
              _this.handleRes(res);
            });
          }
        }
      });
    },
    btn_back() {
      this.$router.push({ name: "wend" });
    },
    addMb() {
      this.formData.mbnrList.push({});
    },
    delMb(item) {
      if (this.formData.mbnrList.length == 1) {
        this.$message.error("至少需要保留一行");
        return;
      }
      this.formData.mbnrList = this.formData.mbnrList.filter(x => {
        return x != item;
      });
    },
    getWdmb() {
      getWdmb(this.id).then(res => {
        let data = res.data;
        if (data.success) {
          this.formData = data.msg;
        }
      });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.isEdit = this.$route.params.isEdit;
    if (this.id != "-1") {
      this.getWdmb();
    } else {
      this.formData.dysf = 1;
      this.formData.mbnrList = [{}];
    }
  }
};
</script>
<style lang="scss" scoped>
.wendDetail {
  width: 80%;
  margin: 0 auto;
  .add_btn,
  .del_btn {
    position: absolute;
    top: 0;
    padding: 7px;
  }
  .add_btn {
    right: -40px;
  }
  .del_btn {
    right: -80px;
  }
}
</style>
