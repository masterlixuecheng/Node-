<template>
  <div class="layout">
    <headBar class="layout_headBar"></headBar>
    <!-- <navBar class="layout_navBar" mode="horizontal"></navBar> -->
    <div class="layout_body">
      <tabsBar singleAlive></tabsBar>
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 700px;
  .layout_headBar {
    height: 60px;
  }
  .layout_navBar {
    height: 61px;
  }
  .layout_body {
    flex: 1;
    height: 0;
    padding: 10px 20px;
  }
}
</style>
