<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view/>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  },
}
</script>
<style>
</style>
