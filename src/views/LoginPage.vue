<template>
  <section class="login-page">
    <div class="login-illus"></div>
    <div class="login-main">
      <div class="form-container">
        <h2>היי, טוב לראות אותך</h2>
        <ram-form :onSubmit="onDoLogin" :fields="fields">
          <div class="form-btn-group">
            <ram-button
              iconLoading="assets/LoginPage/loading-white.svg"
              :isLoading="isLoading"
              text="כניסה"
            />
            <ram-button
              icon="assets/LoginPage/Google_G.svg"
              iconLoading="assets/LoginPage/loading-green.svg"
              iconWidth="24px"
              :isLoading="false"
              width="172px"
              text="כניסה מהירה"
              color="#0084F4"
              bgColor="transparent"
              border="solid 1px #0084F4"
            />
          </div>
        </ram-form>
        <h4 class="join-link">עוד לא הצטרפת? <a href="">ל-30 יום חינם</a></h4>
      </div>
    </div>
  </section>
</template>

<script>
import { RamButton, RamForm } from "vue-sfc-rami-test";

export default {
  data() {
    return {
      fields: [
        {
          type: "email",
          name: "email",
          value: "",
          isRequired: true,
          placeholder: "מייל",
          info: "כתובת המייל איתה נרשמת לחשבונית ירוקה",
          pattern: ".{3,}",
          isInfoLink: false,
        },
        {
          type: "password",
          name: "password",
          value: "",
          isRequired: true,
          placeholder: "סיסמה",
          info: "שכחת סיסמה?",
          pattern: ".{6,}",
          isInfoLink: true,
        },
      ],
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  methods: {
    async onDoLogin(userCred) {
      this.$store.commit({ type: "setIsLoading", isLoading: true });

      await this.$store.dispatch({ type: "login", userCred });
      try {
        this.$router.push(`/dashboard`);
      } catch {
        console.log("login failed");
      } finally {
        this.$store.commit({ type: "setIsLoading", isLoading: false });
      }
    },
  },
  components: {
    RamForm,
    RamButton,
  },
};
</script>