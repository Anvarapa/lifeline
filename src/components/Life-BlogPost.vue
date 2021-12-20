<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>

        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>

        <router-link class="link link-light" :to="{name:'Login'}" v-if="post.welcomeScreen">
          Login/Register
          <Arrow class="arrow arrow-light"/>
        </router-link>

      </div>
    </div>
    <div class="blog-photo">
      <img v-if="post.welcomeScreen" :src="require(`../assets/blogCards/${post.photo}.png`)" alt="">
    </div>
  </div>
</template>

<script>
import Arrow from '../assets/Icons/arrow-right-light.svg'

export default {
  name: "blogPost",
  components: {
    Arrow,
  },
  props: ['post'],

}
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;

  margin-top: 50px;
  height: 100%;
  @media (min-width: 700px) {
    flex-direction: row;
    height: 100vh;
  }

  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex: 3;
    }

    div {
      max-width: 375px;
      padding: 72px 24px;
      @media (min-width: 700px) {
        padding: 0 24px;
      }

      h2 {
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media (min-width: 700px) {
          font-size: 40px;
        }
      }

      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.7;
      }

      .content-preview {
        font-size: 14px;
        max-height: 24px;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: .5s ease-in all;

        &:hover {
          border-bottom-color: #303030;
        }
      }

      .link-light {
        &:hover {
          border-bottom-color: #fff;
        }
      }
    }
  }

  .blog-photo {
    order: 1;
    flex: 3;

    //max-width: 100%;
    width: 100%;
    img{
      width: 100%;
    }

    @media (min-width: 700px) {
      order: 2;
    }
    @media (min-width: 800px) {
      order: 4;
      max-width: 50%;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(even) {
    .blog-content {
      order: 2;
    }

    .blog-photo {
      order: 1;
    }
  }
}

.no-user:first-child {
  .blog-content {
    background-color: #55b5c6;
    color: #fff;
  }
}
</style>

