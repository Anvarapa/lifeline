<template>
  <div class="reset-password">
    <div class="form-wrap">
      <div class="col">
        <form class="reset" @submit.prevent="handleSubmit">
          <h2 class="provide_email">Reset your password</h2>
          <div class="inputs">
            <div class="input">
              <input type="email" placeholder="new password" v-model="email">
              <email class="icon"/>
            </div>
            <div class="input">
              <input :type="showPassword" placeholder="code" v-model="code">
              <passwordImg @click="showP" class="icon showPassword"/>
            </div>
            <div class="input">
              <input :type="showPassword" placeholder="new password" v-model="password">
              <passwordImg @click="showP" class="icon showPassword"/>
            </div>
          </div>
          <button class="forgot-password-button">Send</button>
        </form>
      </div>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from '../assets/Icons/envelope-regular.svg'
import passwordImg from '../assets/Icons/lock-alt-solid.svg'
import axios from 'axios'

export default {
  name: "Life-resetPassword",
  data() {
    return {
      showPassword: 'password',
      email:'',
      code:'',
      password: '',
    }
  },
  components: {
    passwordImg,
    email,
  },
  methods: {
    showP() {
      if (this.showPassword === 'password') {
        this.showPassword = 'text'
      } else if (this.showPassword === 'text') {
        this.showPassword = 'password'
      }
    },
    async handleSubmit() {
      const response = await axios.post('/api/users/reset', {
        email:this.email,
        code:this.code,
        password: this.password,
      });
      console.log(response)
      this.$router.push('/login')
    },
  }
}
</script>

<style lang="scss" scoped>
.showPassword {
  cursor: pointer;
}

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

        h2 {
          font-size: 30px;
          margin-bottom: 20px;
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
  }
}
</style>
