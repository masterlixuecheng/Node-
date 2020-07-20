<template>
  <div style="width: 100%">
    <el-table :data="tableData" border style="width: 100%" @row-click=rowClick>
      <el-table-column prop="xmname" show-overflow-tooltip label="附件名称" width="200">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="title" show-overflow-tooltip label="附件内容">
        <template slot-scope="scope">
          <el-upload :action="fullAction" multiple :file-list="scope.row.fileList" :list-type="picture?'picture-card':'text'"
            :before-remove="beforeRemove" :on-remove="handleRemove" :on-progress="handleProgress" :on-success="handleSuccess" :on-error="handleError">
            <el-button v-if="!picture" icon="el-icon-upload" size="small" type="primary">{{text}}</el-button>
            <i v-if="picture" slot="default" class="el-icon-plus"></i>
            <div v-if="picture" slot="file" slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail" :src="baseUrl+file.url">
              <span class="el-upload-list__item-actions">
                <i class="el-icon-zoom-in" @click="handlePreview(file)"></i>
                <i class="el-icon-printer" @click="handlePrinter(file)"></i>
                <i v-if="!noDel" class="el-icon-delete" @click="handleRemoveImg(file)"></i>
              </span>
            </div>
          </el-upload>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作" width="250">
        <template slot-scope="scope">
          <el-button size="mini" icon="el-icon-camera" @click="fileClick(scope.row)"></el-button>
          <el-button size="mini" icon="el-icon-circle-plus-outline" @click="txql_add(scope.row)"></el-button>
          <el-button size="mini" icon="el-icon-delete" @click="txql_del(scope.row)"></el-button>
          <el-button size="mini" icon="el-icon-zoom" @click="hahaha(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <viewer :images="tableData[index].fileList" @inited="inited">
      <img style="display:none" v-for="(item,index) in tableData[index].fileList" :src="baseUrl+item.url" :key="index">
    </viewer>
    <GaoPaiYi :newModal="gaopaiyiModal" @colseTog="colseTog" @chileFile="chileFile" :textTitFile="textTitFile" :upShowhide="activeShow"></GaoPaiYi>
  </div>
</template>
<script>
import { getLodop } from "@/utils/LodopFuncs";
import GaoPaiYi from "@/components/gaoPaiYiModal";
export default {
  components: {
    GaoPaiYi,
  },
  name: "file-upload",
  data() {
    return {
      index:0,
      tableData: [{ index: 0 ,name:'',fileList:[]}],
      fullAction: "",
      fileList: [],
      loading: "",
      baseUrl: process.env.DOWNLOAD_URL,
      viewer: "",
      //上传的
      gaopaiyiModal: false,
      upShowhide: true,
      textTitFile: "",
      activeShow: true,
      listForm: {},
      amj: ""
      //
    };
  },
  props: {
    action: "",
    text: {
      default: "点击上传"
    },
    picture: Boolean,
    value: {
      default: () => []
    },
    noDel: Boolean
  },
  watch: {
    value(val) {
      let arr = JSON.parse(JSON.stringify(val));
      this.fileList = arr.map(v => {
        v.url = this.baseUrl + v.url;
        return v;
      });
    }
  },
  methods: {
    hahaha(){
      console.log( this.tableData)
    },
    rowClick(row, column, event){
      this.index = row.index;
    },  
    /**高拍仪扫描 */
    delpic(row) {
      this.formData.cqjyFzList = this.formData.cqjyFzList.filter(
        c => c.name != row.name
      );
    },
    colseTog(val) {
      this.gaopaiyiModal = val;
    },
    chileFile(val) {
      this.formData.cqjyFzList = this.formData.cqjyFzList.concat(val);
    },
    fileClick(val) {
      this.gaopaiyiModal = true;
      this.textTitFile = "高拍仪扫描";
    },
    /**高拍仪扫描 */
    txql_add() {
      let obj = this.tableData[this.tableData.length-1];
      if(!obj.name && !obj.fileList){
        this.$message.error("请逐条添加");
        return false
      }else{
        //添加时赋值index
        this.tableData.push({index:obj.index+1});
        console.log( this.tableData)
      }
      // if(obj.name == '' && obj.fileList)
    },
    txql_del(item) {
      if (this.tableData.length == 1) {
        this.$message.error("至少需要保留一条");
        return;
      }
      if(this.index!=this.tableData.length){
        this.$message.error("请逐条删除");
        return;
      }
      //删除
      this.tableData = this.tableData.filter(
        c => c != item
      );
      // index删除后实时更新index
      let num = 0;
      this.tableData = this.tableData.map(v=>{
        v.index=num;
        num++
      })
      console.log( this.tableData)
    },
    inited(viewer) {
      this.viewer = viewer;
    },
    handlePreview(file) {
      // this.viewer.view(this.fileList.findIndex(f => f.url == file.url));
      this.viewer.view(this.tableData[this.index].fileList.findIndex(f => f.url == file.url));
    },
    handlePrinter(file) {
      const LODOP = getLodop();
      LODOP.PRINT_INIT("");
      LODOP.ADD_PRINT_IMAGE(
        30,
        20,
        600,
        600,
        "<img border='0' src='" + file.url + "' />"
      );
      LODOP.SET_PRINT_STYLEA(0, "Stretch", 2); //按原图比例(不变形)缩放模式
      LODOP.PREVIEW();
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleRemove(file, fileList) {
      let _this = this;
      let arr = fileList.slice();
      arr.map(s => {
        s.url = s.url.replace(_this.baseUrl, "");
      });
      this.$emit("input", arr);
    },
    handleRemoveImg(file) {
      this.$confirm(`确定移除 ${file.name}？`).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        let arr = this.fileList.filter(f => f.url != file.url);
        arr.map(s => {
          s.url = s.url.replace(this.baseUrl, "");
        });
        this.$emit("input", arr);
      });
    },
    handleProgress() {
      this.loading = this.$loading({
        lock: true,
        text: "文件上传中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
    },
    handleSuccess(res, file, fileList) {
      this.loading.close();
      if (res.success) {
        this.$message({
          message: "上传成功",
          type: "success"
        });
      } else {
        this.$message({
          message: res.msg || "上传失败"
        });
        fileList.splice(fileList.length - 1, 1);
        return;
      }
      let arr = fileList.slice();
      let obj = {};
      obj.url = res.msg;
      obj.name = file.name;
      arr.splice(arr.indexOf(file), 1, obj);
      // arr.map(s => {
      // // 暂时加baseurl
      // console.log(s.url)
      //   s.url = s.url.replace(this.baseUrl, "");
      // console.log(s.url)
      //   // s.url = this.baseUrl + s.url;
      // });
      
      setTimeout(() => {
        this.tableData[this.index].fileList = arr;
        this.$emit("input", arr);
        console.log(arr);
      }, 200); 
    },
    handleError(err, file, fileList) {
      this.loading.close();
      // fileList.splice(fileList.length - 1, 1);
      this.$message.error("上传失败");
    }
  },
  mounted() {
    this.fullAction = process.env.BASE_URL + this.action;
    this.fileList = JSON.parse(JSON.stringify(this.value));
  }
};
</script>
<style>
.viewer-container {
  z-index: 9999 !important;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 80px;
  height: 80px;
}
.el-upload-list--picture-card .el-upload-list__item img {
  width: 80px !important;
  height: 80px !important;
}
.el-upload--picture-card {
  width: 80px;
  height: 80px;
  line-height: 80px;
}
</style>


