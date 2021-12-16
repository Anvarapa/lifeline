<template>
  <div class="blog-card">
    <img class="card_img" :src="require(`../assets/blogCards/${post.blogCoverPhoto}.png`)" alt="">
    <div class="info">
      <h4 class="product_title">{{ post.blogTitle }}</h4>
      <h6>{{ post.blogDate }} </h6>
      <router-link class="link" to="#">
        View The Post
        <Arrow class="arrow"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"


export default {
  name: "blogCard",
  props: ['post'],
  components: {
    Arrow,

  }
}
</script>

<style lang="scss" scoped>

.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  background-color: #ffffff;
  min-height: 480px;
  transition: .5s ease all;

.card_img{
  max-width: 200px;
  width: 100%;
  background-color: #fff;
  img{
    width: 100%;
  }
}
  &:hover {
    transform: rotateZ(-1.5deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.6);
  }


  img {
    display: block;
    border-radius: 5px 5px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #fff;
    background-color: #68b9d2;
    border-radius: 0 0 5px 5px;

    .product_title {
      font-weight: bolder;
    }

    h4 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
    }

    h6 {
      font-weight: 400;
      font-size: 15px;
      padding-bottom: 16px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      font-size: 12px;
      padding-bottom: 4px;
      transition: .5s ease-in all;
      color: #ffffff;

      &:hover {
        color: rgba(234, 230, 230, 0.8);
      }

      .arrow {
        width: 10px;
      }
    }
  }
}


</style>
