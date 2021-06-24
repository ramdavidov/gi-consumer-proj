<template>
  <section class="user-dashboard" v-if="user">
    <div class="loading-container" v-if="isLoading">
      <ram-loader icon="assets/LoginPage/loading-green.svg" width="300px" />
    </div>
    <div v-else class="dashboard-main container">
      <h2>היי, {{ fullName }}</h2>
      <div class="card">
        <h3>פרטי חשבון:</h3>
        <div class="user-card">
          <h5>טלפון</h5>
          <h5>{{ user.phone }}</h5>
          <h5>מייל</h5>
          <h5>{{ user.email }}</h5>
          <h5>מספר מסמכים</h5>
          <h5>{{ user.documents.length }}</h5>
        </div>
      </div>
      <div class="card">
        <h3>רשימת עסקים:</h3>
        <div v-if="user.businesses.length">
          <business-preview
            v-for="business in user.businesses"
            :key="business.id"
            :item="business"
          />
        </div>
        <div v-else>
          <h5>לא נמצאו עסקים תחת חשבון זה</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { RamLoader } from "vue-sfc-rami-test";
import BusinessPreview from "../cmps/UserDashboard/BusinessPreview.vue";

export default {
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    user() {
      return this.$store.getters.loggedInUser;
    },
    fullName() {
      const { firstName, lastName } = this.user;
      return firstName + " " + lastName;
    },
  },
  created() {
    this.$store.commit({ type: "setIsLoading", isLoading: true });
    setTimeout(() => {
      this.$store.commit({ type: "setIsLoading", isLoading: false });
    }, 1000);
  },
  components: {
    BusinessPreview,
    RamLoader,
  },
};
</script>