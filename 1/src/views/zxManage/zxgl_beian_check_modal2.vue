<template>
  <el-dialog title="审核" :visible.sync="dialogVisible" width="750px" :before-close="handleClose">
    <el-form :model="formData" ref="form" label-width="100px" :rules="rules">
      <el-form-item label="审核结果">
        <el-radio-group v-model="formData.result">
          <el-radio label="1">通过</el-radio>
          <el-radio label="0">不通过</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="审批意见" prop="spyj">
        <el-input v-model="formData.spyj"></el-input>
      </el-form-item>
      <el-form-item label="审核" prop="tpList">
        <!-- <img-upload-preview :isDel="true" :action="action" v-model="xmjsFormData.tpList"></img-upload-preview> -->
        <file-upload :noDel="true" :action="action" picture v-model="showList"></file-upload> 
      </el-form-item>
      <el-form-item label="划转总价" prop="hzzj" v-if="isEdithzzj">
        <el-input v-model="formData.hzzj" placeholder="划转总价(数字)">
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="审批人" prop="applyUserIds" v-if="formData.result == '1' && passData.showChooseMan" >
        <yhxzComponent :receiveData="passData" @submit="submit" :areacode="areacode" v-model="formData.applyUserIds"></yhxzComponent>
      </el-form-item>
      <el-row style="margin:30px 10px 15px 10px;border:1px solid #ccc;" v-if="this.passData.xmjsid&&this.passData.taskName=='确认收款'&&this.passData.processKey=='sjs-bzjjc'">
        <el-col :span="23" class="jiesuan">
          <h2 style="text-align:center">农村产权交易价款收取确认书</h2>
          <p style="padding-left: 30px;">
            <span style="font-size: 11pt;text-indent:25px;">
              我方：{{xmjsFormData.zcfmc}}
              <!-- <input type="text" v-model="xmjsFormData.zcfmc" :disabled="true"> -->
              已收到贵所划转来
              {{xmjsFormData.xmmc}}
              <!-- <input style="width:200px;" type="text" v-model="xmjsFormData.xmmc" :disabled="true"> -->
              项目（项目编号：{{data.zsxmbh}}）
              由受让方：
              {{xmjsFormData.srfmc}}交付的交易价款（小写）
              <!-- <input type="text" v-model="xmjsFormData.srfmc" :disabled="true"> -->
              {{xmjsFormData.hzzj}}元人民币
              <!-- <input type="text" v-model="xmjsFormData.hzzj" :disabled="true">。 -->
            </span>
          </p>
          <p style="text-align:right">
            <span style="font-size: 11pt;display:inline-block;width:150px;text-align:center;">{{xmjsFormData.srfmc}}</span>
          </p>
          <p style="text-align:right">
            <span style="font-size: 11pt;display:inline-block;width:150px">
              <el-date-picker class="noborder" v-model="xmjsFormData.createdate" type="date" placeholder="选择日期" :disabled="true"></el-date-picker>
            </span>
          </p>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="btn_save">确定</el-button>
        <el-button @click="handleClose">返回</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { mapGetters } from "vuex";
import { processSh } from "@/api/zxManage/myTask";
import yhxzComponent from "../detailComponents/yhxzComponent";
import { 
  jsSelect, jsUpdate
} from "@/api/transaction/xmjs";
export default {
  name: "zxgl_beian_check_modal",
  components: {
    yhxzComponent
  },
  data() {
    return {
      showList:[],
      isEdithzzj:false,
      action: "/CqjyFz/file/ajax/upload_file",
      xmjsFormData:{},
      passData: {},
      formData: {
        spyj:'',
        result: "1",
        applyUserIds:'',
        hzzj:'',
      },
      rules: {
        hzzj: [{ required: true, message: "不能为空" }],
        applyUserIds: [{ required: true, message: "不能为空" }]
      },
      dialogVisible: false
    };
  },
  props: {
    showChooseMan: Boolean,
    modalShow: Boolean,
    id: "",
    data: {
      default: () => {}
    },
    areacode: "",
  },
  watch: {
    modalShow(val) {
      this.dialogVisible = val;
      if (val) {
        this.passData = this.data;
        if(this.passData.xmjsid&&(this.passData.taskName=='结算部审核' || this.passData.taskName=='确认收款')&&this.passData.processKey=='sjs-bzjjc'){
          this.isEdithzzj=true;
        }
        this.jsSelect(this.data.xmjsid);
      } 
    }
  },
  methods: {
    //最后一步确认书
    acceptBook() {
      let a = "您确认" + (this.formData.result === '1' ? '通过' : '驳回' )+ "此农村产权交易价款收取确认书吗?";
      this.$confirm( a, "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.saveAndPush();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消确认"
          });
        });
    },
    //进入查询，无数据则走产权、林权查询
    jsSelect(val) {
      let _this = this;
      jsSelect(val).then(res => {
        let data = res.data;
        if (data.success) {
          _this.xmjsFormData = res.data.msg;
          _this.showList = _this.xmjsFormData.tpList;
          _this.formData.hzzj = _this.xmjsFormData.hzzj||'';
        } 
      });
    },
    submit(val) { 
      this.formData.applyUserIds = val;
    },
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        this.handleClose();
        this.$message({
          message: data.msg || "操作成功",
          type: "success"
        });
      } else {
        this.$message({
          message: data.msg
        });
      }
    }, 
    saveAndPush(val) {
      let obj = {};
      obj.taskId = this.id;
      obj.userId = this.userId;
      obj.spyj = this.formData.spyj || '';
      obj.result = this.formData.result;
      processSh(obj).then(res => {
        this.handleRes(res);
      });
    },
    btn_save() { 
      let _this = this;
      if(this.passData.taskName=='确认收款'){
        this.acceptBook();
      }else{
        this.$refs.form.validate(valid => {
          if (valid) {
            let obj = {};
            obj.taskId = this.id;
            obj.userId = this.userId;
            obj.result = this.formData.result;
            obj.spyj = this.formData.spyj || '';
            obj.applyUserIds = this.formData.applyUserIds;  
            processSh(obj).then(res => {
              let data = res.data;
              if (data.success) {
                if(_this.isEdithzzj){
                  _this.update_xmjs();
                }else{
                  _this.handleClose();
                  _this.$message({
                    message: data.msg || "操作成功",
                    type: "success"
                  });
                }
              } else {
                _this.$message({
                  message: data.msg
                });
              }
            });
          }
        });
      }
    },
    update_xmjs(){
      let obj = Object.assign({},this.xmjsFormData);
      obj.hzzj = this.formData.hzzj;
      jsUpdate(obj).then(res => {
        this.handleRes(res);
      });
    },
    handleClose() {
      this.$refs.form.resetFields();
      this.formData.applyUserIds = '';
      this.$emit("close");
    }
  },
  computed: {
    ...mapGetters(["userId"])
  }
};
</script>

<style lang="scss" scoped >
input {
  color: #535353 !important;
}
.jiesuan {
  input {
    padding-left: 5px 0 5px 0; 
    width: 150px;
    color: #606266;
  }
} 
</style>
