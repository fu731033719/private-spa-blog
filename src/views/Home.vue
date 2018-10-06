<template>
  <div class="home">
    <div class="container">
      <div class="top-block">
        <img class="logo-brain" src="../common/img/logo.jpg" alt="">
        <div class="banner-info">
          <div class="line-container">
            <h1 id="first-line" class="line"></h1>
          </div>
          <div class="line-container">
            <h1 id="second-line" class="line"></h1>
          </div>
        </div>
      </div>
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import * as basicScroll from 'basicscroll'
import { init  } from 'ityped'
export default {
  name: 'home',
  mounted () {
    const logo = basicScroll.create({
        elem: document.querySelector('.logo-brain'),
        from: '0',
        to: '200px',
        direct: true,
        props: {
          '--turn': {
              from: '0',
              to: '0turn'
            }
        }
      })
      logo.start()
      const first_line = document.querySelector('#first-line')
      const second_line = document.querySelector('#second-line')
      init(first_line, { loop: false, strings: ['中文中文', '中文中文反复'], onFinished: () => {
        const first_cursor = document.querySelectorAll('.ityped-cursor')[0]
        first_cursor.style.display = 'none'
        init(second_line, { loop: false, strings: ['中文中文2'], onFinished: () => {
          const second_cursor = document.querySelectorAll('.ityped-cursor')[1]
          second_cursor.style.display = 'none'
        }})
      }})
  }
}
</script>
<style lang="scss">
  .home {
    width: 100%;
    background: #ffad5a;
    padding: 10px;
    .container{
      position: relative;
      .top-block {
        width: 100%;
        padding-top: 40px;
        .logo-brain {
          width: 150px;
          height: 150px;
          border: 5px solid #1a0841;
          border-radius: 100%;
          margin:  0 auto;
          display: block;
          cursor: pointer;
          transform: rotate(var(--turn));
          transition: transform .2s linear;
          &:hover {
            transform: scale(1.1, 1.1);
          }
        }
        .banner-info {
          margin-top: 40px;
          .line-container{
            width: 100%;
            text-align: center;
          }
          .line {
            color: #1a0841;
            font-size: 40px;
            display: inline-block;
            font-weight: bolder;
            text-align: center;
          }
        }
      }
      .block {
        width: 100%;
        height: 2000px;
      }
    }
    .top-text{
      opacity: var(--opacity);
    }
  }
  @keyframes blink {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  .ityped-cursor {
      font-size: 2.2rem;
      opacity: 1;
      animation: blink 0.3s infinite;
      animation-direction: alternate;
    }
</style>
