<template>
  <section class="user-dashboard" v-if="loggedInUser">
    <h1>USER DASHBOARD</h1>
    <span>{{ fullName }}</span>
    <span>{{ loggedInUser.email }}</span>
    <pre>
        {{ loggedInUser }}
    </pre>
  </section>
</template>

<script>
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    fullName() {
      const { firstName, lastName } = this.loggedInUser;
      return firstName + " " + lastName;
    },
  },
};
</script>