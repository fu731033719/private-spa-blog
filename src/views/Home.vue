<template>
  <div class="home">
    <div class="top-info">
      <p class="top-text">banner is there place</p>
      <div class="top-text-bg"></div>
    </div>
    <div class="home-info"></div>
  </div>
</template>

<script>
import * as basicScroll from 'basicscroll'
export default {
  name: 'home',
  mounted () {
    const top_text = basicScroll.create({
        elem: document.querySelector('.top-text'),
        from: '0',
        to: '200px',
        direct: true,
        props: {
          '--opacity': {
              from: 1,
              to: 0
            }
        }
      })
      top_text.start()
  }
}
</script>
<style lang="scss" scoped>
  .home {
    width: 100%;
    background: #1b1d1b;
    .top-info{
      height: 600px;
      background-image: 
      radial-gradient(farthest-side at 0 0,rgba(52, 178, 136, .5),rgba(52, 178, 136, 0)),
      radial-gradient(farthest-side at 100% 0,rgba(124,192,89,.8),rgba(124,192,89, 0)),
      radial-gradient(farthest-side at 0 0,rgba(52, 178, 136, .4),rgba(52, 178, 136, 0));
      display: flex;
      align-items: center;
      justify-content: center;
      color: antiquewhite;
      font-size: 3em;
      font-family: 'Space-Mono';
      position: sticky;
      .top-text{
        opacity: var(--opacity);
      }
    }
    .home-info {
      width: 100%;
      height: 2000px;
      background: #1b1d1b;
    }
  }
</style>
