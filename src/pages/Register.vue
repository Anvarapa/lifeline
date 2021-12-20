<template>
  <div class="form-wrap">
    <form class="register" @submit.prevent="handleSubmit">
      <h2>Create Your LIFELINE Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="User Name" v-model="username">
          <user class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email">
          <email class="icon"/>
        </div>
        <div class="input">
          <input :type="showPassword" placeholder="password" v-model="password">
          <password @click="showP" class="icon showPassword"/>
        </div>
        <div class="input">
          <input :type="showPassword" placeholder="reaped password"  v-model="reapedPassword">
          <password @click="showP" class="icon showPassword"/>
        </div>
      </div>
      <span class="wrongPassword" v-if="validation">WRONG PASSWORD</span>
      <span class="wrongPassword" v-if="empty">not enough information</span>

      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
      </p>

      <button class="register-button">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import axios from 'axios'
import email from '../assets/Icons/envelope-regular.svg';
import password from '../assets/Icons/lock-alt-solid.svg';
import user from "../assets/Icons/user-alt-light.svg"

export default {
  name: "Register",
  components: {
    email,
    password,
    user,
  },
  data(){
    return{
      empty:false,
      validation: false,
      username:null,
      email:null,
      password:null,
      reapedPassword:null,
      showPassword:'password'
    }
  },
  methods: {
    showP(){
      if(this.showPassword === 'password'){
        this.showPassword = 'text'
      }
      else if(this.showPassword === 'text'){
        this.showPassword = 'password'
      }
    },
    async handleSubmit() {
      if(!this.username || !this.email || !this.password || !this.reapedPassword){
        this.empty = true
        setInterval(()=>{
          this.empty = false
        }, 4000)
      }
      else {
        if (this.reapedPassword !== this.password) {
          this.validation = true
        } else {
          await axios.post('auth/signup', {
            username: this.username,
            password: this.password,
            email: this.email,
          });
          this.$router.push('/login')
          this.validation = false
        }
      }

    }
  }
}
</script>

<style lang="scss" scoped>

.register {
  h2 {
    max-width: 350px;
  }
  //.register-button{
  //  margin-top: 20px;
  //}
}
.wrongPassword{
  color: red;
  transition: 0.5s ease-in-out;
}
</style>
