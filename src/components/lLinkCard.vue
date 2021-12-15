<template>
<div class="link_card" v-if="user">
  <h5 v-for="(item) in user" :key="item.name" href="#">{{item.name}}</h5>
  <h5 v-for="(item) in user" :key="item.name" href="#">{{item.domain}}</h5>
  <div class="bottomPart">
    <div class="bottomPart_button">a</div>
    <div class="bottomPart_button">a</div>
    <a v-for="(item) in user" :key="item.name" :href="item.domain" target="_blank" class="bottomPart_button">a</a>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "lLinkCard",
  computed:{
    ...mapGetters(['user'])
  },
}
</script>

<style lang="scss" scoped>
.link_card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  width: 100%;
  padding-top: 10px;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.6);
  box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.6);
  .bottomPart{
    display: flex;
    max-width: 200px;
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    height: 50px;
    .bottomPart_button{
      max-width: 20px;
      width: 100%;
      max-height: 20px;
      height: 100%;
      border-radius: 50%;
      background-color: #303030;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>
