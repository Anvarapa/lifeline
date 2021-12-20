<template>
  <div class="reset-password">
    <div class="form-wrap">
      <div class="col">
        <form class="reset" @submit.prevent="handleSubmit">
          <h2 class="provide_email">Login to Lifeline</h2>
          <p class="login-register">Forgot your password? Enter your email to reset it</p>
          <div class="inputs">
            <div class="input">
              <input type="email" placeholder="Email" v-model="email">
              <emailImg class="icon"/>
            </div>
          </div>
          <button class="forgot-password-button">Send</button>
        </form>

<!--        <form class="reset" @submit="sendPassword">-->
<!--          <h2 class="provide_password">provide a new password</h2>-->
<!--          <div class="inputs">-->
<!--            <div class="input">-->
<!--              <input type="email" placeholder="Email">-->
<!--              <emailImg class="icon"/>-->
<!--            </div>-->
<!--            <div class="input">-->
<!--              <input type="email" placeholder="Code">-->
<!--              <passwordImg class="icon"/>-->
<!--            </div>-->
<!--            <div class="input">-->
<!--              <input :type="showPassword" placeholder="Password">-->
<!--              <passwordImg @click="showP" class="icon showPassword"/>-->
<!--            </div>-->
<!--          </div>-->
<!--          <button class="forgot-password-button">Send</button>-->
<!--        </form>-->
      </div>

      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import emailImg from '../assets/Icons/envelope-regular.svg'
// import passwordImg from '../assets/Icons/lock-alt-solid.svg'

export default {
  name: "ForgotPassword",
  components: {
    emailImg,
    // passwordImg,
  },
  data() {
    return {
      email: '',
      showPassword: 'password',
      password: '',
      password_confirm: '',
    }
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('api/users/recover', {
        email: this.email
      });
      this.email = ''
      console.log(response)
    },
    // async sendPassword() {
    //   const response = await axios.post('api/users/reset', {
    //     code: this.password_confirm,
    //     password: this.password,
    //   });
    //   this.email = ''
    //   this.password_confirm = ''
    //   this.password = ''
    //   console.log(response)
    // },
    showP() {
      if (this.showPassword === 'password') {
        this.showPassword = 'text'
      } else if (this.showPassword === 'text') {
        this.showPassword = 'password'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;

  .form-wrap {
    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 800px;

      form {
        .provide_email {
          @media (max-width: 600px) {
            font-size: 20px;
          }
        }

        .provide_password {
          margin-bottom: 20px;
          @media (max-width: 600px) {
            font-size: 20px;
          }
        }
      }
    }

    .reset {
      h2 {
        margin-bottom: 8px;
      }

      p {
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
