<template>
  <el-dialog title="备案审核" :visible.sync="dialogVisible" width="750px" :before-close="handleClose">
    <el-form :model="formData" ref="form" label-width="100px" :rules="rules">
      <el-form-item label="备案审核结果">
        <el-radio-group v-model="formData.result">
          <el-radio label="1">通过</el-radio>
          <el-radio label="0">不通过</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="formData.result=='0'" label="审批意见" prop="spyj">
        <el-input v-model.trim="formData.spyj"></el-input>
      </el-form-item>
      <el-form-item v-else label="审批意见" >
        <el-input v-model="formData.spyj"></el-input>
      </el-form-item>
      <el-form-item label="审批人" prop="applyUserIds" v-if="formData.result == '1'" >
        <yhxzComponent :receiveData="passData" @submit="submit" :areacode="areacode" v-model="formData.applyUserIds"></yhxzComponent>
      </el-form-item>
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
export default {
  name: "zxgl_beian_check_modal",
  components: {
    yhxzComponent
  },
  data() {
    return { 
      passData: {},
      formData: {
        result: "1",
        applyUserIds:'',
        spyj:'',
      },
      rules: {
        spyj: [{ required: true, message: "不能为空" }],
        applyUserIds: [{ required: true, message: "不能为空" }]
      },
      dialogVisible: false
    };
  },
  props: {
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
      } 
    }
  },
  methods: {
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
    btn_save() { 
      if (!this.formData.spyj && this.formData.result == '0') {
        this.$message.error('请输入审批意见');
        return false
      }
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$confirm('是否确认'+(this.formData.result == '0' ? '驳回' : '通过')+'此审批?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let obj = {};
          obj.taskId = this.id;
          obj.userId = this.userId;
          obj.result = this.formData.result;
          obj.spyj = this.formData.spyj || '';
          obj.applyUserIds = this.formData.applyUserIds;  
          processSh(obj).then(res => {
            this.handleRes(res);
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });


        }
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
