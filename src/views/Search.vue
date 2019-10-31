<template>
  <div>
    <div class="container">
      <img src="../assets/news-logo.png" />
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
        @keyup.enter="doSearch"
      />
    </div>
    <div>
      <div v-if="articles.length != 0" class="news-wrapper">
        <div class="row news-container" v-for="article in articles" :key="article.id">
          <div>
            <div class="col-sm-6 news">
              <div class="card">
                <img :src="article.urlToImage" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{{article.title}}</h5>
                  <p class="card-text">by {{article.author}}</p>
                  <p>{{article.content}}</p>
                  <p>{{article.publishedAt | fineDate}}</p>
                  <a :href="article.url" target="_blank" class="btn">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
          <Loading />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      articles: "",
      search: ""
    };
  },
  components: {},
  computed: {
    filteredArticles() {
      return this.artcicles.filter(article => {
        return article.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    }
  },
  methods: {
      doSearch() {
          this.$http
      .get(
        `https://newsapi.org/v2/everything?q=${this.search}&apiKey=58eec6a66ff546e19495bcb37f068f71`
      )
      .then(response => {
        console.log(response);
        this.articles = response.data.articles;
      });
      }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  padding-top: 150px;
  margin: auto;
}
.container > img {
  display: block;
  margin: auto;
}
.container > input {
  margin-top: 20px;
}
.news-wrapper{
  padding-top: 100px;
  padding-bottom: 100px;
}
.news-container {
  max-width: 1200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.news {
  display: block;
  margin: auto;
}
.card-text {
  font-style: italic;
}
@media screen and (max-width: 768px) {
  .container {
    max-width: 500px;
    margin: auto;
    padding-top: 250px;
  }
  .container > img {
    display: block;
    margin: auto;
    height: 100px;
    width: 100px;
  }
}
</style>