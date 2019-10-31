<template>
  <div class="home">
    <div>
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
// @ is an alias to /src

import Loading from '@/components/Loading.vue'
export default {
  name: "home",
  components: {
    Loading
  },
  data() {
    return {
      api_key: "58eec6a66ff546e19495bcb37f068f71", // Your API Key go here
      articles: [],
      errors: []
    };
  },
  mounted() {
    this.$http
      .get(
        "https://newsapi.org/v2/everything?q=Nigeria&apiKey=58eec6a66ff546e19495bcb37f068f71"
      )
      .then(response => {
        console.log(response);
        this.articles = response.data.articles;
      });
  },
  filters: {
    fineDate: function(inputFormat) {
      function pad(s) {
        return s < 10 ? "0" + s : s;
      }
      var d = new Date(inputFormat);
      return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(
        "-"
      );
    }
  }
};
</script>

<style scoped>
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
.btn {
  background: #d04d14;
  color: aliceblue;
  opacity: 0.6;
  transition: 0.3s;
  border: 1px solid #020101;
  border-radius: 10px;
}
.btn:hover {
  opacity: 1;
}
</style>