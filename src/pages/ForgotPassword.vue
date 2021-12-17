<template>
  <div class="reset-password">
    <div class="form-wrap">
      <form class="reset">
        <h2>Login to Lifeline</h2>
        <p class="login-register">Forgot your passwor? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
            <email class="icon"/>
          </div>
        </div>
        <button class="forgot-password-button">Send</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from '../assets/Icons/envelope-regular.svg'
export default {
  name: "ForgotPassword",
  components:{
    email
  }
}
</script>

<style lang="scss" scoped>
.reset-password{
  position: relative;
  .form-wrap{
    .reset{
      h2{
        margin-bottom: 8px;
      }
      p{
        text-align: center;
        margin-bottom: 32px;
      }
    }
    //.forgot-password-button{
    //  margin-top: 20px;
    //}
  }
}
</style>
