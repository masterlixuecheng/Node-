<template>
  <el-scrollbar v-if="singleAlive">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" :duration="100">
      <keep-alive :include="keepAliveList">
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </el-scrollbar>
  <div class="tagBar" v-else>
    <el-tabs v-model="name" type="card" closable @tab-click="handleClick" @tab-remove="delVisited">
      <el-tab-pane v-for="item in visitedList" :key="item.path" :label="item.title" :name="item.name">
        <el-scrollbar>
          <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" :duration="100">
            <keep-alive :include="keepAliveList">
              <router-view :key="key"></router-view>
            </keep-alive>
          </transition>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "tabsBar",
  props: {
    singleAlive: Boolean //是否启用唯一组件keep-alive,默认false,置为true时将只有一个组件处于keep-alive状态,同时隐藏tabsBar一栏
  },
  methods: {
    ...mapMutations(["SET_SINGLE"]),
    handleClick(tab, event) {
      this.$router.push({ name: tab.name });
    },
    addVisited() {
      if (this.$route.name) {
        this.$store.dispatch("addVisited", this.$route, this.singleAlive);
      }
    },
    delVisited(targetName, action) {
      this.$store.dispatch("delVisited", targetName).then(() => {
        if (targetName == this.$route.name) {
          let last = this.visitedList.slice(-1)[0];
          if (last) {
            this.$router.push(last);
          } else {
            this.$router.push("/");
          }
        }
      });
    }
  },
  computed: {
    ...mapGetters(["visitedList", "keepAliveList"]),
    key() {
      return this.$route.fullPath;
    },
    name: {
      get() {
        return this.$route.name;
      },
      set(val) {
        return val;
      }
    }
  },
  watch: {
    $route() {
      this.addVisited();
    }
  },
  mounted() {
    this.SET_SINGLE(this.singleAlive);
    this.addVisited();
  }
};
</script>
<style lang="scss" scoped>
.tagBar {
  .tag_item {
    margin-right: 5px;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.tagBar > .el-tabs > .el-tabs__header {
  .el-tabs__item {
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
  }
}
</style>