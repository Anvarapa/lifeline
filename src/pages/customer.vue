<template>
  <div class="home">
    <div class="blog-card-wrap">
      <div class="container">
        <div class="blog-cards">
          <LinkCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkCard from '../components/Life-lLinkCard'
import axios from "axios";
export default {
  name: "customer",
  components:{
    LinkCard,
  },
  async created(){
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

}
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  .container {
    max-width: 1240px;
    margin: 0 auto;
  }

  h3 {
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 32px;
  }
}
</style>
