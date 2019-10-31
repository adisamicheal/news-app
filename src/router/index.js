import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Allnews from '../views/Allnews.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/allnews',
    name: 'allnews',
    component: Allnews
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
