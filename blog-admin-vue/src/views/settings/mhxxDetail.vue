<template>
  <div class="mhxxDetail">
    <el-form :model="formData" ref="form" label-width="150px" :rules="rules">
      <el-form-item label="门户名称" prop="mhname">
        <el-input v-model="formData.mhname"></el-input>
      </el-form-item>
      <el-form-item label="竞价大厅名称">
        <el-input v-model="formData.jjdtname"></el-input>
      </el-form-item>
      <el-form-item label="门户URL列表" prop="mhurllb">
        <el-input v-model="formData.mhurllb">
          <el-switch
            v-model="sfqy"
            slot="append"
            active-text="启用"
            inactive-text="关闭"
            @change="changeUrl"
          ></el-switch>
        </el-input>
      </el-form-item>
      <el-form-item label="背景">
        <el-button size="small" type="danger" @click="btn_clear('bj')">清除背景</el-button>
        <logo-upload :action="action" v-model="formData.bj"></logo-upload>
      </el-form-item>
      <el-form-item label="门户logo">
        <el-button size="small" type="danger" @click="btn_clear('mhlogo')">清除门户logo</el-button>
        <logo-upload :action="action" v-model="formData.mhlogo"></logo-upload>
      </el-form-item>
      <!-- <el-form-item label="导航图片">
        <el-button size="small" type="danger" @click="btn_clear('dhtp')">清除导航图片</el-button>
        <img-upload :action="action" v-model="formData.dhtp"></img-upload>
      </el-form-item>-->
      <el-form-item label="门户所属区域">
        <el-cascader id="xzqh" :options="options" v-model="a" :props="props" @visible-change="handleItemChange"
        ></el-cascader>
        <!-- <el-cascader id="xzqh" :options="options" v-model="a" change-on-select @change="handleItemChange" :props="props" clearable></el-cascader> -->
      </el-form-item>
      <el-form-item label="门户icon">
        <el-button size="small" type="danger" @click="btn_clear('mhicon')">清除门户icon</el-button>
        <img-upload :action="action" v-model="formData.mhicon"></img-upload>
      </el-form-item>
      <el-form-item label="微信二维码">
        <el-button size="small" type="danger" @click="btn_clear('wxewm')">清除微信二维码</el-button>
        <img-upload :action="action" v-model="formData.wxewm"></img-upload>
      </el-form-item>
      <!-- <el-form-item label="三资管理">
        <el-input v-model="formData.szgl"></el-input>
      </el-form-item>
      <el-form-item label="土地确权">
        <el-input v-model="formData.szqq"></el-input>
      </el-form-item>-->
      <el-form-item label="导航条">
        <el-button size="small" type="danger" @click="btn_clear('mhdht')">清除导航条</el-button>
        <logo-upload :action="action" v-model="mhdht[0]"></logo-upload>
        <logo-upload :action="action" v-model="mhdht[1]"></logo-upload>
        <logo-upload :action="action" v-model="mhdht[2]"></logo-upload>
      </el-form-item>
      <el-form-item label="是否主站" prop="mhurllb">
        <el-switch v-model="sfzz" active-text="启用" inactive-text="关闭" @change="changeUrl1"></el-switch>
      </el-form-item>
      <el-form-item label="门户FOOTER">
        <Tinymce ref="editor" v-model="formData.mhfooter"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="btn_save" v-if="isEdit">确定</el-button>
        <el-button @click="btn_back">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getMhxx, addMhxx, setMhxx } from "@/api/settings/mhxx";
import { getNextRegion, getSuperiorXzqh } from "@/api/settings/zzjg";
import { handleEmpty, moreMenu, handleNextCode } from "@/utils/config";
export default {
  name: "mhxxDetail",
  data() {
    return {
      a: [],
      mhdht: [],
      sfqy: false,
      id: "",
      isEdit: false,
      formData: {},
      sfzz: false,
      rules: {
        mhname: [{ required: true, message: "不能为空" }],
        mhurllb: [{ required: true, message: "不能为空" }]
      },
      options: [],
      props: {
        value: "code",
        label: "name",
        checkStrictly: true,
        lazy: true,
        lazyLoad(node, resolve) {
          const { level, data } = node;
          if (!level) {
            return;
          }
          node.children = [];
          getNextRegion(data.code).then(res => {
            let data = res.data;
            if (data) {
              resolve(data);
            } else {
              resolve([]);
            }
          });
        }
      },
      action: "/mhxx/file/ajax/upload_file"
    };
  },
  methods: {
    getSuperiorXzqh(code) {
      getSuperiorXzqh(code).then(res => {
        let data = res.data;
        if (data.success) {
          this.options = handleEmpty(data.msg);
        }
      });
    },
    getRegion() {
      getNextRegion(0).then(res => {
        let data = res.data;
        if (data) {
          this.options = data;
        }
      });
    },
    //行政区划-联级查询
    handleItemChange(val) {
      let _this = this;
      let code = '';
      let currentCode = val || '0';
      if (typeof val != "string") {
        currentCode = val[val.length - 1];//非首次加载，获取当前最后一位行政区划，作为参数传递
        code = currentCode;
      } else {
        code = currentCode;//首次加载
      }
      getNextRegion(code).then(res => {
        let data = res.data;
        if (data) {
          if (code.length == 9) {//删除村的children
            data.map(d => {
              delete d.children;
            });
          }
          _this.options = moreMenu(currentCode, _this.options, handleNextCode(code,sessionStorage.getItem("xzqhOfLastUser"),data));
        }
      });
    },

    changeUrl1(val) {
      if (val) {
        this.formData.sfzz = "1";
      } else {
        this.formData.sfzz = "0";
      }
    },
    changeUrl(val) {
      if (val) {
        this.formData.sfqy = "1";
        setMhxx(this.formData).then(res => {
          this.handleRes(res);
        });
      } else {
        this.formData.sfqy = "2";
        setMhxx(this.formData).then(res => {
          this.handleRes(res);
        });
      }
    },
    btn_save() {
      this.formData.szgl = this.mhdht.toString();
      let _this = this;
      this.formData.sfzz = this.sfzz ? "1" : "0";
      this.$refs.form.validate(valid => {
        if (valid) {
          this.formData.sfqy = this.sfqy ? "1" : "2";
          this.formData.mhssqyList = this.a;
          this.formData.szqq = document
        .getElementsByClassName("el-cascader")[0]
        .getElementsByClassName("el-input__inner")[0]
        .value.replace(/\s+/g, ""); 
          if (this.formData.id) {
            setMhxx(this.formData).then(res => {
              _this.handleRes(res, "back");
            });
          } else {
            addMhxx(this.formData).then(res => {
              _this.handleRes(res, "back");
            });
          }
        }
      });
    },
    btn_clear(val) {
      if (val == "bj") {
        this.formData.bj = "";
      } else if (val == "bj") {
        this.formData.bj = "";
      } else if (val == "mhlogo") {
        this.formData.mhlogo = "";
      } else if (val == "mhicon") {
        this.formData.mhicon = "";
      } else if (val == "wxewm") {
        this.formData.wxewm = "";
      } else if (val == "mhdht") {
        this.mhdht = [];
      }
    },
    handleRes(res, type) {
      let data = res.data;
      if (data.success) {
        if (type == "back") {
          this.$message({
            message: data.msg,
            type: "success"
          });
          this.btn_back();
        } else {
          this.$message({
            message: this.sfqy ? "启用成功" : "关闭成功",
            type: "success"
          });
        }
      } else {
        this.$message({
          message: data.msg
        });
      }
    },
    btn_back() {
      this.$router.push({ name: "mhxx" });
    },
    getMhxx() {
      let _this = this;
      getMhxx(this.id).then(res => {
        let data = res.data;
        if (data.success) {
          _this.formData = data.msg;
          _this.sfqy = _this.formData.sfqy == "1" ? true : false;
          _this.sfzz = _this.formData.sfzz == "1" ? true : false;
          _this.mhdht = _this.formData.szgl.split(",");
          _this.a = (_this.formData.mhssqy && _this.formData.mhssqy.split(",")) || [];
          if(_this.a.length>0){
            _this.getSuperiorXzqh(_this.a[_this.a.length - 1]);
          }
        }
      });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.isEdit = this.$route.params.isEdit;
    if (this.id != "-1") {
      this.getMhxx();
    }else{
      this.getRegion();
    }
  }
};
</script>
<style lang="scss" scoped>
.mhxxDetail {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
