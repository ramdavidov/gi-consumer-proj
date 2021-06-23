<template>
  <section class="login-page">
    <!-- <img
      class="green-logo"
      :src="require('../assets/LoginPage/green_logo.svg')"
    /> -->
    <div class="green-logo"></div>
    <div class="login-illus">
      <!-- <img :src="require('../assets/LoginPage/green_login_page.svg')" /> -->
    </div>
    <div class="login-main">
      <div class="form-container">
        <h2>היי, טוב לראות אותך</h2>

        <ram-form :onSubmit="onDoLogin" :fields="fields">
          <div class="form-btn-group">
            <ram-button :styles="styleGreen" text="כניסה" />
            <ram-button
              icon="LoginPage/Google_G.svg"
              iconWidth="24px"
              :styles="styleGoogle"
              text="כניסה מהירה"
            />
          </div>
        </ram-form>

        <h4>עוד לא הצטרפת? <a href="">ל-30 יום חינם</a></h4>

        <!-- <form @submit.prevent="onDoLogin">
          <input type="email" v-model="userCred.email" placeholder="מייל" />
          <input type="text" v-model="userCred.password" placeholder="סיסמה" />

          <div class="btn-group">
            <button>כניסה</button>
            <button>כניסה מהירה</button>
          </div>
        </form> -->
      </div>
    </div>
  </section>
</template>

<script>
import { RamButton, RamForm } from "vue-sfc-rami-test";

export default {
  data() {
    return {
      userCred: {
        email: "rami.davidov@gmail.com",
        password: "Efn6AuwPp63p",
      },
      fields: [
        {
          type: "email",
          name: "email",
          value: "",
          isRequired: true,
          placeholder: "מייל",
          info: "כתובת המייל איתה נרשמת לחשבונית ירוקה",
        },
        {
          type: "password",
          name: "password",
          value: "",
          isRequired: true,
          placeholder: "סיסמה",
          info: "שכחת סיסמה?",
        },
      ],
      styleGoogle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "16px",
        backgroundColor: "transparent",
        width: "172px",
        height: "56px",
        borderRadius: "100px",
        border: "solid 1px #0084F4",
        padding: "0 25px",
        cursor: "pointer",
      },
      styleGreen: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        color: "#FFFFFF",
        backgroundColor: "#18C746",
        width: "228px",
        height: "56px",
        borderRadius: "100px",
        border: "none",
        padding: "0 14px",
        cursor: "pointer",
      },
    };
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
  methods: {
    async onDoLogin(userCred) {
      await this.$store.dispatch({ type: "login", userCred });
      try {
        this.$router.push(`/dashboard`);
      } catch {
        console.log("login failed");
      }
    },
  },
  components: {
    RamForm,
    RamButton,
  },
};
</script>