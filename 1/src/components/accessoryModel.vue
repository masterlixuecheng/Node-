<template>
    <div class="accessoryModal">
        <el-dialog :title="text_Text" :visible.sync="fileToggle" :before-close="userClose" width="68%">
            <div class="fileBox">
                <div class="fileBoxLift">
                    <el-table ref="multipleTable" :data="fileList" stripe>
                        <el-table-column prop="name" label="附件名称" show-overflow-tooltip width="240">
                            <template slot-scope="scope">
                                <span>{{scope.row.name}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="50">
                            <template slot-scope="scope">
                                <a class="a1" :href="scope.row.href" :download="scope.row.name">下载</a>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="fileBoxRight">
                    <el-upload class="upload-demo" disabled :action="uploadUrl" :multiple="false" :file-list="fileList" list-type="picture-card" :on-preview="handlePictureCardPreview">
                        <!-- <i class="el-icon-upload"></i> -->
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                    </el-upload>
                </div>
            </div>
            <span slot="footer" class="dialog-footer" v-show="upShowhide">
                <el-button type="primary" size="small" @click="userClose">关闭</el-button>
            </span>
        </el-dialog>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" class="fileBoxRight_img">
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {

            uploadUrl:'',
            fileList: [],
            fileToggle: false,
            text_Text: "",  
            dialogImageUrl: "",
            dialogVisible: false,
            baseUrl: process.env.DOWNLOAD_URL, 
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
    watch: {
        newModal(val) {
            this.fileToggle = val; 
        },
        textTitFile(val) {
            this.text_Text = val;
        },
        fileSrc: {
            handler: function(val) { 
                this.fileList = [];
                this.dialogImageUrl = "";  
                let srcArr = val.fileStr;
                srcArr.map(i => { 
                    this.fileList.push({
                        name: i.name,
                        href: this.baseUrl + i.url,
                        src: i.url,
                        url: this.baseUrl + i.url
                    });
                }); 
            },
            deep: true
        }
    },

    methods: { 
        userClose() {
            this.fileToggle = false;
            this.$emit("colseTog", this.fileToggle);
        },
        //查看
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        //删除
        // delFile(file, fileList) {
        //     this.fileList.remove(file);
        //     this.dialogImageUrl = "";
        //     this.$emit("flag", 0);//用户上传附件后又删除返回0
        // },
        //上传成功回调 
    },
    mounted() { 
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
    }
};
</script>
<style lang="scss">
.accessoryModal {
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

            .fileBoxLift {
                width: 300px;
                border-right: 1px solid #ccc;
                overflow-y: auto;
                height: 60vh;
                .a1 {
                    color: #0011ff;
                    cursor: pointer;
                }
            }
            .fileBoxRight {
                flex: 1;
                height: 58vh;
                padding: 10px;
                box-sizing: border-box;
                overflow: auto;
                .fileBoxRight_img {
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
    .el-upload--picture-card{
        display: none!important;
    }
}
</style>

