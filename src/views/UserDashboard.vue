<template>
  <section class="user-dashboard" v-if="user">
    <div class="dashboard-main container">
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
import BusinessPreview from "../cmps/UserDashboard/BusinessPreview.vue";

export default {
  computed: {
    testThis() {
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
  components: {
    BusinessPreview,
  },
};
</script>