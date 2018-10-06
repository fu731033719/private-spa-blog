<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
  import Nav from './views/Nav.vue'
  import Footer from './views/Footer.vue'
  export default {
    components: {
      Nav,
      Footer
    }
  }
</script>