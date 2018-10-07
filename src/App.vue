<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Nav></Nav>
    <Scroll></Scroll>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
  import Nav from './views/Nav.vue'
  import Scroll from './views/ScrollTop.vue'
  import Footer from './views/Footer.vue'
  export default {
    components: {
      Nav,
      Scroll,
      Footer
    }
  }
</script>