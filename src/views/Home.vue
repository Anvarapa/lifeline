<template>
  <div class="home">
    <div class="blog-card-wrap">
      <div class="container">
        <h3>LIFELINE Products</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCards from "../components/BlogCard";
export default {
  name: "Home",
  components:{
BlogCards,
  },
  data(){
    return{
      sampleBlogCards: [
        {blogTitle: "Assist", blogCoverPhoto: "stock-1", blogDate: 'Like "OnStar" for your computer, LifeLine Assist enables secure remote computer access and assistance for immediate troubleshooting any time anywhere.'},
        {blogTitle: "Connect", blogCoverPhoto: "stock-2", blogDate: 'An intelligent gateway that uses both your mobile and fixed broadband line together to boost your Internet connection\'s performance, reliability, stability, and security.'},
        {blogTitle: "Cable", blogCoverPhoto: "stock-3", blogDate: 'Secure user devices and workspaces for distributed workforces on the Edge with all-in-one PC connector and charging cable for iOS and Android smartphones.'},
      ],
    }
  },
};
</script>


<style lang="scss" scoped>
.blog-card-wrap {
  .container{
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
