<template>
  <div class="gaoPaiYiModal">
    <el-dialog :title="text_Text" :modal="false" :visible.sync="fileToggle" :before-close="userClose" width="65%">
      <div class="fileBox">
        <div class="fileBoxLift2">
          <el-table ref="multipleTable" :data="fileList" stripe>
            <el-table-column
              prop="name"
              label="附件名称"
              show-overflow-tooltip
              width="198"
              height="150"
            >
              <template slot-scope="scope">
                <div class="imgWrap">
                  <img
                    class="pic_hover_gaopaiyi"
                    style="width:200px;height:150px;"
                    :src="baseUrl + scope.row.url"
                  >
                  <span @click="delpic(scope.row)">
                    <i class="el-icon-error"></i>
                  </span>
                </div>
                <!-- <span>{{scope.row.name}}</span> -->
              </template>
            </el-table-column>
            <!-- <el-table-column label="操作" width="50">
              <template slot-scope="scope">
                <a class="a1" :href="baseUrl + scope.row.url" :download="scope.row.name">下载</a>
              </template>
            </el-table-column>-->
          </el-table>
        </div>
        <div class="fileBoxRight2">
          <iframe src="../../static/gaopaiyi.html" width="100%" height="97%" frameborder="0"></iframe>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button style="display:none;" id="tofather" type="primary" size="small" @click="fatherfunc"></el-button>
        <el-button type="primary" size="small" @click="btn_save">保存</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt class="fileBoxRight2_img">
    </el-dialog>
  </div>
</template>
<script>
import { uploadBase64 } from "@/api/settings/zzjg";
export default {
  data() {
    return {
      uploadUrl: "",
      fileList: [],
      fileToggle: false,
      text_Text: "",
      dialogImageUrl: "",
      dialogVisible: false,
      baseUrl: process.env.DOWNLOAD_URL
    };
  },
  props: {
    textTitFile: String,
    newModal: Boolean,
    upShowhide: Boolean,
    fileSrc: {
      default: () => []
    },
    limiting: ""
  },

  methods: {
    btn_save(){
      this.$emit('chileFile',this.fileList);
      this.userClose();
    },
    delpic(row) {
      this.fileList = this.fileList.filter(c => c.name != row.name);
    },
    fatherfunc() {
      let obj = JSON.parse(window.sessionStorage.getItem("tofather"));
      let fileObj = {
        name: obj.fileName
      };
      uploadBase64(obj).then(res => {
        let data = res.data;
        if (data.success) {
          fileObj.url = data.msg;
          this.fileList.push(fileObj);
        }
      });
    },
    userClose() {
      this.fileToggle = false;
      this.$emit("colseTog", this.fileToggle);
    },
    //查看
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
    //删除
    // delFile(file, fileList) {
    //     this.fileList.remove(file);
    //     this.dialogImageUrl = "";
    //     this.$emit("flag", 0);//用户上传附件后又删除返回0
    // },
    //上传成功回调
  },
  mounted() {
    this.$nextTick(function() {
      // 初始化
    });
    Array.prototype.indexOf = function(val) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
      }
      return -1;
    };
    Array.prototype.remove = function(val) {
      var index = this.indexOf(val);
      if (index > -1) {
        this.splice(index, 1);
      }
    };
  },
  watch: {
    newModal(val) {
      this.fileToggle = val;
      if(val){
        this.fileList = [];
      }
    },
    textTitFile(val) {
      this.text_Text = val;
    }
    // fileSrc: {
    //   handler: function(val) {
    //     if (val) {
    //       this.fileList = [];
    //       this.dialogImageUrl = "";
    //       let srcArr = val.fileStr;
    //       srcArr.map(i => {
    //         this.fileList.push({
    //           name: i.name,
    //           href: this.baseUrl + i.url,
    //           src: i.url,
    //           url: this.baseUrl + i.url
    //         });
    //       });
    //     }
    //   },
    //   deep: true
    // }
  }
};
</script>
<style lang="scss">
.gaoPaiYiModal{
  
.imgWrap {
  position: relative;
  .pic_hover_gaopaiyi {
    width: 200px;
    height: 150px;
  }
  span {
    position: absolute;
    z-index: 555555;
    right: 10px;
    top: 5px;
    display: inline-block;
    width: 30px;
    height: 30px;
    // background: url(./jiaobiao.png) right bottom no-repeat;
    display: none;
    .el-icon-error {
      color: red;
      font-size: 20px;
    }
  }
  &:hover {
    span {
      cursor: pointer;
      display: block;
    }
  }
}

}
.gaoPaiYiModal {
  .el-dialog__header {
    height: 60px;
    border-bottom: 1px solid #ccc;
  }
  .el-dialog__body {
    padding: 10px 10px;
    .fileBox {
      display: flex;
      width: 100%;
      height: 100%;

      .fileBoxLift2 {
        width: 240px;
        border-right: 1px solid #ccc;
        overflow-y: auto;
        height: 60vh;
        .a1 {
          color: #0011ff;
          cursor: pointer;
        }
      }
      .fileBoxRight2 {
        flex: 1;
        height: 60vh;
        padding: 10px;
        box-sizing: border-box;
        overflow: auto;
        .fileBoxRight2_img {
          width: 80%;
          margin: 1% 0px 0 10%;
        }
      }
    }
  }
  .el-dialog {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .el-upload-dragger {
    width: 150px;
    height: 150px;
  }
  .el-dialog__footer {
    border-top: 1px solid #ccc;
    height: 60px;
  }
  .el-upload--picture-card {
    display: none !important;
  }
}
</style>

