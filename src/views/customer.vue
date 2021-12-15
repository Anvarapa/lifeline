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
import LinkCard from '../components/lLinkCard'
export default {
  name: "customer",
  components:{
    LinkCard,
  }
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
