<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu :class="['sideBar',{'oneLevel':navOpen,'pdl':mode!='vertical'}]" unique-opened router :mode="mode" :collapse="mode=='vertical'" :default-active="$route.path" background-color="rgb(47, 64, 80)" text-color="#fff" active-text-color="#307ecc">
      <el-menu-item index="" class="sideBar_title" @click="collapse" v-if="mode=='vertical'">
        <i class="el-icon-menu menu_icon"></i>
        <span>功能菜单</span>
      </el-menu-item>
      <navbar-item v-for="item in navBar" :item="item" v-if="!item.hidden" :key="item.path"></navbar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import navbarItem from "./navBar_item";

export default {
  name: "navBar",
  components: { navbarItem },
  props: {
    mode: {
      default: "vertical"
    }
  },
  methods: {
    collapse() {
      this.$store.commit("SET_NAVOPEN");
    }
  },
  computed: {
    ...mapGetters(["navBar", "navOpen"])
  },
  watch: {
    navBar(val){debugger
      console.log('val...'+val);
      
    }
  }
};
</script>
<style lang="scss" scoped>
.sideBar {
  transition: all 0.3s;
  height: 100%;
  &.pdl {
    padding-left: 15%;
  }
}
.oneLevel {
  width: 200px;
  .el-menu-item span {
    height: auto;
    width: auto;
    overflow: hidden;
    visibility: visible;
    display: inline-block;
  }
}
.menu_icon {
  color: #fff !important;
}
</style>
<style lang="scss">
.sideBar {
  .sideBar_title {
    color: #fff !important;
    // border-bottom: 1px solid #307ecc;
  }
}
</style>
