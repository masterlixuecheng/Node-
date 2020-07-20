<template>
    <el-dialog title="共享" :visible.sync="dialogVisible" width="40%" :before-close="handleClose" @open="open">
        <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="mhname" label="门户名称"></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="btn_save">确 定</el-button>
            <el-button @click="handleClose">取 消</el-button>
        </span>
    </el-dialog>
</template>
<script>
import { getMh, getGx, addGx, setGx } from "@/api/settings/yqlj";
export default {
  name: "yqlj_share_modal",
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      multipleSelection: []
    };
  },
  props: {
    shareShow: Boolean,
    yqljid: ""
  },
  watch: {
    shareShow(val) {
      this.dialogVisible = val;
    }
  },
  methods: {
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        this.handleClose();
        this.$emit("edit");
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
    open() {
      this.getGx();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    Selection(rows) {
      if (rows.length) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row, true);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    btn_save() {
      let obj = {};
      obj.yqljid = this.yqljid;
      obj.mhMapList = this.multipleSelection;
      addGx(obj).then(res => {
        this.handleRes(res);
      });
    },
    handleClose() {
      this.multipleSelection = [];
      this.$emit("close");
    },
    getMh() {
      getMh().then(res => {
        let data = res.data;
        if (data.success) {
          this.tableData = data.msg;
        }
      });
    },
    getGx() {
      getGx(this.yqljid).then(res => {
        let data = res.data;
        if (data.success) {
          this.Selection(data.msg);
        }
      });
    }
  },
  mounted() {
    this.getMh();
  }
};
</script>
