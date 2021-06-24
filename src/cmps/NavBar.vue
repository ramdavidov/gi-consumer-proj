<template>
  <nav class="nav-bar" :class="{ 'bg-white': loggedInUser }">
    <div class="green-logo"></div>
    <div v-if="loggedInUser" class="logut-container">
      <ram-button
        text="יציאה"
        :action="doLogout"
        iconLoading=""
        :isLoading="false"
        color="#0084F4"
        bgColor="transparent"
        border="solid 1px #0084F4"
        width="100px"
        height="40px"
      />
    </div>
  </nav>
</template>

<script>
import { RamButton } from "vue-sfc-rami-test";

export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
  methods: {
    doLogout() {
      this.$store.commit({ type: "logout" });
      this.$router.push("/login");
    },
  },
  components: {
    RamButton,
  },
};
</script>