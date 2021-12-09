<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
export default {
  name: "Home",
  components:{
    BlogPost,
  },
  data(){
    return{
      welcomeScreen: {
        title: 'LIFELINE',
        blogPost: 'blablabla blablabla blablabla blablabla blablabla blablabla blablab lablablabla blablabla.',
        welcomeScreen: true,
        photo: 'coding',
      },
    }
  },
};
</script>


<style lang="scss" scoped>
.home {
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 100px;
      height: 400px;
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
