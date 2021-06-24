<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./cmps/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>