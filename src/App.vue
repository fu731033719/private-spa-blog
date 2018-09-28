<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="box"></div>
  </div>
</template>

<script>
import HelloWorld from './pages/HelloWorld.vue'
import  * as basicScroll from 'basicscroll'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted () { 
    const instance = basicScroll.create({
        elem: document.querySelector('.box'),
        from: 'top-top',
        to: 'bottom-bottom',
        direct: true,
        props: {
            '--turn': {
              from: '0',
              to: '1turn'
            },
            '--move': {
              from: '0px',
              to: '0px'
            }
        }
      })
      instance.start()
  }
}
</script>

<style lang="scss">
 #app {
   height: 3000px;
   .box{
      width: 5em;
      height: 5em;
      border-radius: 100%; 
      position: fixed;
      left: 2em;
      top: 2em;
      background: linear-gradient(135deg, #3cdddd, #ff1ac6);
      transform: translateX(var(--move)) rotate(var(--turn));
      transition: transform .3s linear;
      will-change: transform;
   }
 }
</style>
