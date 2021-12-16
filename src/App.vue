<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation class="navigation" v-show="!navigation"/>
      <router-view/>
      <Footer v-show="!navigation && !footerToShow"/>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import axios from "axios";

export default {
  name: "app",
  components: {Navigation, Footer},
  data() {
    return {
      navigation: null,
      footerToShow: null,
    };
  },
  async created() {
    this.checkRoute();

    if (localStorage.getItem('token') === null || localStorage.getItem('token').length === 0) {
      console.log('No token provided');
    } else {
      const response = await axios.get('api/users/get/devices', {
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
      });
      this.$store.dispatch('user', response.data)
    }
  },
  mounted() {

  },
  methods: {
    checkRoute() {
      if (this.$route.name === "Login" || this.$route.name === "Register" || this.$route.name === "ForgotPassword") {
        this.navigation = true
        return
      } else {
        this.navigation = false
      }
      if(this.$route.name === 'customer'){
        this.footerToShow = true
      }
      else {
        this.footerToShow = false
      }
    },


  },
  watch: {
    $route() {
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
body{
  background-color: #e9e8e8;
}

.navigation {
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
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
}

.link-light {
  color: #fff;
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;

  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
