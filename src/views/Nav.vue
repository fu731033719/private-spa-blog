<template>
  <div class="nav-container">
    <div class="mask-t mask"></div>
    <div class="mask-l mask"></div>
    <div class="mask-r mask"></div>
    <div class="mask-b mask"></div>
    <div :class="!show_flag ? 'nav' : 'nav nav-show' ">
      <div class="nav-logo">
        <img src="../common/icon/keyboard.png" alt="">
        <p>KeyBoardMan_Dany</p>
      </div>
      <div class="nav-list">
        <router-link class="icon" to="/">
          <img class="icon-img" src="../common/icon/target.svg" alt="">
          <p class="icon-p">主页</p>
        </router-link>
        <router-link class="icon" to="/book">
          <img class="icon-img" src="../common/icon/book.svg" alt="">
          <p class="icon-p">藏经阁</p>
        </router-link>
        <router-link class="icon" to="/about">
          <img class="icon-img" src="../common/icon/about.svg" alt="">
          <p class="icon-p">关于</p>
        </router-link>
        <a class="icon" href="https://github.com/fu731033719" target="_blank">
          <img class="icon-img" src="../common/icon/github.svg" alt="">
          <p class="icon-p">gayhub</p>
        </a>
        <a class="icon" href="https://weibo.com/danybullshittdlemon" target="_blank">
          <img class="icon-img" src="../common/icon/weibo.svg" alt="">
          <p class="icon-p">大眼怪</p>
        </a>
      </div>
    </div>
  </div>
  
</template>
<style lang="scss" scope>
  .mask {
    z-index: 200;
  }
  .mask-t {
    width: 100%;
    height: 10px;
    background: #fff;
    top: 0;
    position: fixed;
  }
  .mask-l {
    width: 10px;
    height: 100%;
    background: #ff5959;
    left: 0;
    position: fixed;
  }
  .mask-r {
    width: 10px;
    height: 100%;
    background: #ff5959;
    right: 0;
    position: fixed;
  }
  .mask-t {
    width: 100%;
    height: 10px;
    background: #ff5959;
    bottom: 0;
    position: fixed;
  }
  .nav {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #ff5959;
    position: fixed;
    top: 0;
    transform: translateY(-60px);
    z-index: 300;
    transition: .15s;
    .nav-logo {
      width: 30%;
      display: inline-block;
      float: left;
      cursor: pointer;
      opacity: .8;
      transition: .15s;
      &:hover {
        opacity: 1;
      }
      img {
        margin: 0px 20px;
        width: 62px;
        height: 22px;
      }
      p{
        display: inline-block;
        font-size: 17px;
        color: #fff;
        font-weight: bold;
      }
    }
    .nav-list {
      width: 70%;
      float: right;
      text-align: right;
      padding-right: 40px;
      .icon {
        height: 25px;
        line-height: 25px;
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        opacity: .8;
        transition: .15s;
        margin-left: 30px;
        &:hover {
          opacity: 1;
          .icon-img {
            transform: scale(1.1, 1.1);
          }
        }
        .icon-img {
          width: 25px;
          height: 25px;
          display: inline-block;
          padding-right: 5px;
          float: left;
          transition: .15s;
        }
        .icon-p{
          float: left;
          line-height: 25px;
          display: inline-block;
        }
      }
    }
  }
  .nav-show{
    transform: translateY(0px);
  }
</style>
<script>
  export default {
    data () {
      return {
        scroll: '',
        show_flag: false
      }
    },
    methods: {
      navShow () {
        let scroll_nav = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if (scroll_nav > 50) {
          this.show_flag = true
        } else {
          this.show_flag = false
        }
      }
    },
    mounted () {
      window.addEventListener('scroll', this.navShow)
    }
  }
</script>
