<template>
  <div id="logout"></div>
</template>

<script>
import { removeToken } from "@/utils/auth";
import { logout } from "@/api/login";
export default {
  name: "logout",
  methods: {
    logout() {
      logout().then(() => {
        this.$store.commit("SET_TOKEN", "");
        this.$store.commit("SET_NAVBAR", []);
        removeToken();
      });
    }
  },
  mounted() {
    this.logout();
  }
};
</script>
