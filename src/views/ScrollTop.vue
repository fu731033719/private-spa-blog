<template>
  <div :class="!icon_flag? 'scroll-top hide-scroll' : 'scroll-top'" @click="backTop"></div>
</template>
<style lang="scss" scoped>
  .scroll-top {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 100%;
    background: url('../common/icon/backtop.svg');
    background-size:50px 50px;
    bottom: 100px;
    right: 100px;
    position: fixed;
    z-index: 999;
    transition: .15s;
    &:hover{
      transform: scale(1.1, 1.1);
    }
  }
  .hide-scroll {
    opacity: 0;
  }
</style>
<script>
  const SmoothScroll = require('smooth-scroll')
  export default {
    data () {
      return {
        icon_flag: false
      }
    },
    created () {
      this.scroll_init = SmoothScroll()
    },
    methods:{
      backTop () {
        this.scrollTo('app')
      },
      scrollTo(el_id) {
        this.scroll_init.animateScroll(document.getElementById(el_id))
      },
      iconShow () {
        let scroll_num = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if (scroll_num > 0) {
          this.icon_flag = true
        } else {
          this.icon_flag = false
        }
        console.log(this.icon_flag)
      }
    },
    mounted () {
      window.addEventListener('scroll', this.iconShow)
    }
  }
</script>
