<template>
  <div class="link_card">
    <customerModal
        class="unregisterModal"
        v-if="modalActive"
        v-on:close-modal="closeModal"/>
    <shareModal
        class="unregisterModal"
        v-if="shareActive"
        v-on:closeShare="closeShare"/>

    <h5 class="name" v-for="(item) in user" :key="item.domain" href="#">{{ item.name }}</h5>
    <h5 class="domain" v-for="(item) in user" :key="item.name" href="#">{{ item.domain }}</h5>
    <div class="bottomPart">
      <div class="bottomPart_button unregister" @click="resetPassword">Unregister</div>
      <div class="bottomPart_button share" @click="share">Share</div>
      <a v-for="(item) in user" :key="item.name" :href="'https://'+item.domain" target="_blank"
         class="bottomPart_button share link_a">Open</a>
    </div>
  </div>
</template>
<!--v-if="user"-->
<script>

import customerModal from './Life-modal-cutomer'
import shareModal from './Life-modal-share'
import {mapGetters} from 'vuex'

export default {
  name: "lLinkCard",
  components: {
    customerModal,
    shareModal
  },
  data() {
    return {
      modalActive: false,
      shareActive:false,
    }
  },
  methods: {
    resetPassword() {
      this.modalActive = true;
    },
    share(){
      this.shareActive = true;
    },
    closeModal() {
      this.modalActive = !this.modalActive
    },
    closeShare(){
      this.shareActive = !this.shareActive
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
}
</script>

<style lang="scss" scoped>
.link_card {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  width: 100%;
  padding: 20px 20px;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.56);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.31);
  grid-gap: 20px;
  border: 1px solid rgba(150, 152, 151, 0.47);
  border-radius: 5px;
  margin-top: 5px;

  .name {
    font-weight: bolder;
    font-size: 18px;
  }

  .domain {
    color: #6e6e6e;
  }

  .bottomPart {
    display: flex;
    max-width: 300px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    .bottomPart_button {
      padding: 2px 5px;
      cursor: pointer;
    }

    .unregister {
      background-color: red;
      border-radius: 3px;
      color: #fff;
    }

    .share {
      background-color: #dddcdc;
      border-radius: 3px;
      font-weight: 600;
    }

    .link_a {
      text-decoration: none;
      color: black;
    }
  }
}
</style>
