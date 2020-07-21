<template>
    <el-menu-item v-if="!item.children||!item.children.length" :index="item.path" :key="item.path" :unique-opened="true">
        <i v-if="item.rolecode" :class="item.rolecode"></i>
        <i v-else class="el-icon-tickets"></i>
        <span v-if="item.title">{{item.meta.title}}</span>
    </el-menu-item>
    <!-- 只有一个子栏目的菜单 -->
    <el-menu-item v-else-if="item.children.length===1 && (!item.children[0].children||!item.children[0].children.length)" :index="item.path+'/'+item.children[0].path" :key="item.children[0].path">
        <i v-if="item.rolecode" :class="item.rolecode"></i>
        <i v-else class="el-icon-tickets"></i>
        <span v-if="item.children[0].meta.title">{{item.children[0].meta.title}}</span>
    </el-menu-item>
    <el-submenu v-else :index="item.path" :key="item.path">
        <template slot="title">
            <i v-if="item.rolecode" :class="item.rolecode"></i>
            <i v-else class="el-icon-tickets"></i>
            <span v-if="item.meta.title">{{item.meta.title}}</span>
        </template>
        <el-scrollbar wrapClass="scrollbar-wrapper">
            <template v-for="child in item.children" v-if="!child.hidden">
                <navbar-item v-if="child.children&&child.children.length" :item="child" :key="child.path"></navbar-item>
                <el-menu-item v-else :index="item.path+'/'+child.path" :key="child.path">
                    <span v-if="child.meta.title">{{child.meta.title}}</span>
                </el-menu-item>
            </template>
        </el-scrollbar>
    </el-submenu>
</template>

<script>
export default {
  name: "navbarItem",
  props: {
    item: {
      default: () => {}
    }
  }
};
</script>
<style lang="scss">
.el-menu--collapse.sideBar {
  .el-menu-item span,
  .el-submenu .el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
  .el-submenu .el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
}
.el-menu--collapse.oneLevel {
  .el-menu-item span,
  .el-submenu .el-submenu__title span {
    height: auto;
    width: auto;
    overflow: hidden;
    visibility: visible;
    display: inline-block;
  }
  .el-submenu .el-submenu__title .el-submenu__icon-arrow {
    display: "";
  }
}
.scrollbar-wrapper {
  max-height: 100vh;
  overflow-x: visible;
  margin-bottom: 0 !important;
  .el-scrollbar__view {
    height: 100%;
  }
}
.el-menu--vertical,
.el-menu--popup,
.el-menu--vertical .el-scrollbar {
  max-height: 100vh;
}

.el-menu--popup-right-start {
  margin-left: 0;
  height: 50vh !important;
}
.el-menu-item i,
.el-submenu__title i {
  color: #fff;
}
// .el-menu-item:hover {
//   background-color: rgb(38, 51, 64) !important;
// }
// .el-submenu:hover {
//   .el-submenu__title {
//     background-color: rgb(38, 51, 64) !important;
//   }
// }
// .el-menu-item.is-active {
//   color: #36ddff !important;
//   background-color: #2a2a2a !important;
// }
// .is-active {
//   .el-submenu__title {
//     background-color: #2a2a2a !important;
//   }
// }
.el-submenu.is-active i,
.el-submenu.is-active span,
.el-submenu.is-open i,
.el-submenu.is-open span {
  // color: #36ddff !important;
}
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 0;
}
</style>
