<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation class="navigation" v-show="!navigation"/>
      <router-view/>
      <Footer v-show="!navigation"/>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"


export default {
  name: "app",
  components: {Navigation, Footer},
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    this.checkRoute();
  },
  mounted() {

  },
  methods: {
    checkRoute() {
      if (this.$route.name === "Login" || this.$route.name === "Register" || this.$route.name === "ForgotPassword") {
        this.navigation = true
        return
      }
      else {
        this.navigation = false
      }
    },
  },
  watch: {
    $route(){
      this.checkRoute()
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
.navigation{
position: fixed;
  width: 100%;
}
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
button,
.router-button{
transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
  &:focus{
    outline: none;
  }
}
.link-light {
  color: #fff;
}
</style>
