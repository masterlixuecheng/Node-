<template>
  <div class="layout">
    <headBar class="layout_headBar"></headBar>
    <div class="layout_body">
      <navBar class="layout_navBar"></navBar>
      <div class="layout_main">
        <breadCrumb></breadCrumb>
        <div class="main_body">
          <tabsBar singleAlive></tabsBar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headBar from "@/views/layout/headBar";
import navBar from "@/views/layout/navBar";
import breadCrumb from "@/views/layout/breadCrumb";
import tabsBar from "@/views/layout/tabsBar";
export default {
  name: "layout",
  components: {
    headBar,
    navBar,
    breadCrumb,
    tabsBar
  }
};
</script>
<style lang="scss">
@import "../../assets/style/style.scss";
@import "../../assets/style/elementStyle.scss";
</style>
<style lang="scss" scoped>
.layout {
  height: 100vh;
  min-width: 1000px;
  .layout_headBar {
    height: 80px;
  }
  .layout_body {
    display: flex;
    height: calc(100% - 80px);
    .layout_navBar {
      height: 100%;
    }
    .layout_main {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 0;
      height: 100%;
      .main_body {
        flex: 1;
        height: 0;
        padding: 10px 20px;
      }
    }
  }
}
</style>
