<template>
  <div></div>
</template>
<script>
import { removeToken } from "@/utils/auth";
import { logout } from "@/api/login";
export default {
  methods: {
    logout() {
      logout().then(() => {
        commit("SET_TOKEN", "");
        commit("SET_NAVBAR", []);
        removeToken();
      });
    }
  },
  mounted() {
    this.logout();
  }
};
</script>