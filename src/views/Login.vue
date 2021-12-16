<template>
  <div class="form-wrap">
    <form class="login" @submit.prevent="handleSubmit">

      <h2>Login to Lifeline</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="user name" v-model="username">
          <email class="icon"/>
        </div>
        <div class="input">
          <input type="password" placeholder="password" v-model="password">
          <password class="icon"/>
        </div>
      </div>
      <p class="login-register">
        Don`t have an account?
        <router-link class="router-link" :to="{name: 'Register'}">Register</router-link>
      </p>
      <router-link class="forgot-password" :to="{name:'ForgotPassword'}">Forgot your password</router-link>
      <button>Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from '../assets/Icons/envelope-regular.svg'
import password from '../assets/Icons/lock-alt-solid.svg'
import axios from "axios";

export default {
  name: "Login",
  components: {
    email,
    password,
  },
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("api/auth/signin", {
        username: this.username,
        password: this.password,
      });

      console.log("GET token from backend:" + response.data.accessToken);

      localStorage.setItem("token", response.data.accessToken);



      const response2 = await axios.get("api/users/get/devices", {
        headers:{
          'x-access-token': localStorage.getItem('token')
        }
      });
      this.$store.dispatch("user", response2.data);
      this.$router.push("/customer");
    },
  },
}
</script>

<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin: 20px 20px;

    .router-link {
      color: #000;
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }
    .inputs{
      width: 100%;
      max-width: 350px;
      .input{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        input{
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;
          &:focus{
            outline: none;
          }
        }
        .icon{
          width: 12px;
          position: absolute;
          left: 6px;
        }
      }
    }
    .forgot-password{
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin:0px 0px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;
      &:hover{
      border-color: #303030;
      }
    }
    .angle{
    display: none;
      position: absolute;
      background-color: #e9e8e8;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }
  .background{
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/background.png");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
