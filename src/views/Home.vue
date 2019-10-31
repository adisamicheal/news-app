<template>
  <div>
    <div>
      <!-- <Navbar /> -->
    </div>
    <div v-if="articles.length != 0">
      <div class="headline-container">
        <ul class="list-group" v-for="article in articles" :key="article.id">
          <li class="list-group-item">{{article.title}} by {{article.author}}</li>
        </ul>
      </div>
    </div>
    <div v-else >
          <Loading />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from "@/components/Loading.vue";

export default {
  name: "home",
  components: {
      Loading
  },
  data() {
    return {
      search: "",
      api_key: "58eec6a66ff546e19495bcb37f068f71", // Your API Key go here
      articles: [],
      errors: []
    };
  },
  mounted() {
    this.$http
      .get(
        "https://newsapi.org/v2/top-headlines?country=ng&apiKey=58eec6a66ff546e19495bcb37f068f71"
      )
      .then(response => {
        this.articles = response.data.articles;
      });
  }
};
</script>

<style scoped>
.headline-container {
  max-width: 800px;
  max-width: 1200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 30px; */
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>