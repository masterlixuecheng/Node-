<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <!-- <el-menu :class="['sideBar',{'oneLevel':navOpen,'pdl':mode!='vertical'}]" unique-opened router :mode="mode" :collapse="mode=='vertical'" :default-active="$route.path" background-color="rgb(47, 64, 80)" text-color="#fff" active-text-color="#307ecc"> -->
    <!-- <el-menu unique-opened router :mode="mode" > -->
      <!-- <el-menu-item index="" class="sideBar_title" @click="collapse" v-if="mode=='vertical'">
        <i class="el-icon-menu menu_icon"></i>
        <span>功能菜单</span>
      </el-menu-item> -->
      <!-- <navbar-item v-for="item in navBar" :item="item" v-if="!item.hidden" :key="item.path"></navbar-item> -->
      <!-- <navbar-item v-for="item in navBar" :item="item" :key="item.path"></navbar-item> -->
      <!-- <el-menu-item><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
      <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <span class="wrap" v-for="item in navBar" :key="item.path">
          <el-menu-item v-if="!item.children||!item.children.length" unique-opened>
              <!-- <i v-if="item.rolecode" :class="item.rolecode"></i>
              <i v-else class="el-icon-tickets"></i>
              <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span> -->
              <!-- {{item}} -->
          </el-menu-item>

          <el-menu-item v-if="item.children&&item.children.length===1" :index="item.path+'/'+item.children[0].path" :key="item.children[0].path">
            <span v-if="item.children[0].meta.title">{{item.children[0].meta.title}}</span>
            <!-- <span >12312313</span> -->
          </el-menu-item>
          <el-submenu v-else :index="item.path" :key="item.path">
            <template slot="title" v-if="item.meta&&item.meta.title">{{item.meta.title}}</template> 
            <!-- <template slot="title">12333{{item}}</template>  -->
            <el-menu-item v-if="!child.hidden"  v-for="child in item.children" :item="child" :key="child.path" :index="item.path+'/'+child.path">{{child.meta.title}}</el-menu-item>
          </el-submenu>
        </span>


        <!-- <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
      </el-menu>

    <!-- </el-menu> -->
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
    handleSelect() {

    },
    collapse() {
      // this.$store.commit("SET_NAVOPEN");
    }
  },
  computed: {
    ...mapGetters(["navBar", "navOpen"])
  },
  watch: {
    navBar(val){
      console.log('navBarnavBarnavBarnavBarnavBarnavBar...'+val);
      
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
.wrap{
  float:left;
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
<style lang="scss">
.el-menu-item:hover {
  background-color: #ecf5ff !important;
    // border-bottom: 2px solid red!important;
  
}
.el-submenu:hover {
  .el-submenu__title {
    // background-color: rgb(38, 51, 64) !important;
    // border-bottom: 0!important;
  }
}
.el-menu-item.is-active {
  color: #000 !important;
  background-color: #ecf5ff !important;
    border-bottom: 2px solid green!important;
}
.is-active {
  // 有多个子菜单的被选中的样式
  .el-submenu__title {
    // background-color: #2a2a2a !important;
    border-bottom: 2px solid green!important;
  }
}
.el-submenu.is-active i,
.el-submenu.is-active span,
.el-submenu.is-open i,
.el-submenu.is-open span {
  // color: #36ddff !important;
  color: rgba(0, 0, 0, 0 )!important;
}
</style>
