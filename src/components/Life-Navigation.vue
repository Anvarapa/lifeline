<template>
  <header>
    <nav class="container" ref="container">
      <div class="branding">
        <router-link class="header" :to="{name:'Home'}">ICON_LL </router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile" v-if="!user">
          <router-link class="link" :to="{name:'Login'}">GET STARTED</router-link>
        </ul>
        <ul v-show="!mobile" v-if="user">
          <a href="javascript:void(0)" @click="handleClick()" class="link">logout</a>
        </ul>

      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav" v-if="!user" >
        <closeMenu @click="toggleMobileNav" class="close"/>
        <router-link class="link" :to="{name:'Login'}">GET STARTED</router-link>
      </ul>
      <ul class="mobile-nav" v-show="mobileNav" v-if="user" >
        <closeMenu @click="toggleMobileNav" class="close"/>
        <router-link class="link" :to="{name:'Home'}">Home</router-link>
        <a href="javascript:void(0)" @click="handleClick()" class="link">logout</a>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg'
import closeMenu from '../assets/Icons/times-circle-light.svg'
import {mapGetters} from 'vuex'

export default {
  name: "navigation",
  components: {
    menuIcon,
    closeMenu,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windownWidth: null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen()
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth
      if (this.windownWidth <= 750) {
        this.mobile = true;
        return
      } else {
        this.mobile = false;
        this.mobileNav = false;
      }
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    closeModal() {
      this.mobileNav = false;
    },
    handleClick() {
      localStorage.removeItem('token')
      this.$store.dispatch('user', null)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted() {
    let vm = this
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs['container']) {
        vm.closeModal()
      }
    })
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: #ffff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;


  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: .3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    display: flex;
    padding: 10px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 700;
        font-size: 24px;
        color: #2f708d;
        text-decoration: none;
        max-width: 50px;
        width: 100%;
        img{
          width: 100%;
        }
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 32px;
        }

        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .close {
      width: 25px;
      height: 25px;
      cursor: pointer;
      align-self: flex-end;

      path {
        fill: #fff;
      }
    }

    .link {
      padding: 15px 0;
      color: #ffffff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
