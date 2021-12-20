<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
  </div>
</template>

<script>
import BlogPost from "../components/Life-BlogPost";

export default {
  name: "Home",
  components: {
    BlogPost
  },
  data() {
    return {
      welcomeScreen: {
        title: 'Assist',
        blogPost: 'Like "OnStar" for your computer, ' +
            'LifeLine Assist enables secure remote' +
            ' computer access and assistance for' +
            ' immediate troubleshooting any time anywhere..',
        welcomeScreen: true,
        photo: 'LL-assist-icon-dkgrey-trans',
      },
    }
  },
};
</script>


<style lang="scss" scoped>
.blog-card-wrap {
  .container {
    max-width: 1240px;
    margin: 0 auto;
  }

  h3 {
    font-weight: bolder;
    font-size: 20px;
    margin-bottom: 32px;
  }
}

</style>
