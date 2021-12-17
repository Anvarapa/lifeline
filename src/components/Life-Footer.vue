<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{name:'Home'}">LIFE LINE</router-link>
          <ul>
            <li>
              <a href="#">
                <youTube class="svg-icon"/>
              </a>
            </li>
            <li>
              <a href="#">
                <twitter class="svg-icon"/>
              </a>
            </li>
            <li>
              <a href="#">
                <instagram class="svg-icon"/>
              </a>
            </li>
            <li>
              <a href="#">
                <linkedin class="svg-icon"/>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul v-if="!user">
            <router-link class="link" :to="{name:'Home'}">HOME</router-link>
            <router-link  class="link" :to="{name:'Login'}">
              GET STARTED
            </router-link>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youTube from '../assets/Icons/youtube-brands.svg';
import twitter from '../assets/Icons/twitter-brands.svg';
import instagram from '../assets/Icons/instagram-brands.svg';
import linkedin from '../assets/Icons/linkedin-brands.svg';
import {mapGetters} from 'vuex'

export default {
  name: "footer-vue",
  components: {
    youTube,
    twitter,
    instagram,
    linkedin,
  },
  computed:{
    ...mapGetters(['user'])
  }
}
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 32px 25px;
  background-color: #303030;
  @media (min-width: 800px) {
    padding: 40px 25px;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media(min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }

    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        text-align: center;
        font-size: 24px;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px){
          text-align: initial;
          margin-bottom: 10px;
        }
      }

      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }

      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }

      .col-1 {
        flex-direction: column;

        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }

        ul {
          margin-top: auto;

          li {
            display: flex;
            align-items: center;

            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }

      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }

          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
            align-items: flex-end;
          }
        }
      }
    }

    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        gap: 0;
      }
    }

    p {
      margin-top: auto;
      text-align: center;
    }
  }
}
</style>
