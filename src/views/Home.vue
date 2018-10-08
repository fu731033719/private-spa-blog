<template>
  <div class="home">
    <div class="container">
      <div class="top-block">
        <img class="logo-brain" src="../common/img/logo.png" alt="">
        <div class="banner-info">
          <div class="line-container">
            <h1 id="first-line" class="line"></h1>
          </div>
          <div class="line-container">
            <h2 id="second-line" class="line"></h2>
          </div>
        </div>
        <div class="private">
          <div class="private-item" slot="reference" v-tip="private_info[0]">
            <img class="private-img" src="../common/icon/sheshou.svg" alt="">
            <p class="private-p">射手座</p>
          </div>
          <div class="private-item" v-tip="private_info[1]">
            <img class="private-img" src="../common/icon/man.svg" alt="">
            <p class="private-p">男性</p>
          </div>
          <div class="private-item" v-tip="private_info[2]">
            <img class="private-img" src="../common/icon/game.svg" alt="">
            <p class="private-p">玩家</p>
          </div>
          <div class="private-item" v-tip="private_info[3]">
            <img class="private-img" src="../common/icon/superman.svg" alt="">
            <p class="private-p">业余拯救世界</p>
          </div>
        </div>
        <div class="spot-cut-line"></div>
      </div>
      <div class="middle-block">
        <div class="article-block">
          <div class="article-list">
            
          </div>
        </div>
        <div class="info-block"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { init  } from 'ityped'
export default {
  name: 'home',
  data () {
    return {
      private_info: [
        '自由的气息🚹',
        '本博客也兼觅友😊',
        '硬核Gamer🏆',
        '业余时间拯救多块中西方异世大陆🗡'
      ]
    }
  },
  mounted () {
      const first_line = document.querySelector('#first-line')
      const second_line = document.querySelector('#second-line')
      init(first_line, { loop: false, strings: ['Dany_bullshit_', 'Dany_td_lemon_1900'], onFinished: () => {
        const first_cursor = document.querySelectorAll('.ityped-cursor')[0]
        first_cursor.style.display = 'none'
        init(second_line, { loop: false, strings: ['24 year old Superhero', '24 year old Codefarmer QAQ!'], onFinished: () => {
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
    padding: 10px;
    .container {
      position: relative;
      .top-block {
        width: 100%;
        padding-top: 150px;
        .logo-brain {
          width: 167px;
          height: 174px;
          border-radius: 100%;
          margin:  0 auto;
          display: block;
          cursor: pointer;
          transition: transform .2s linear;
          &:hover {
            transform: scale(1.1, 1.1);
          }
        }
        .banner-info {
          min-height: 250px;
          margin-top: 40px;
          .line-container{
            width: 100%;
            text-align: center;
          }
          .line {
            color: #333;
            display: inline-block;
            text-align: center;
            margin-bottom: 20px;
            font-size: 4.5rem;
            font-weight: bolder;
            font-family: "Perfetto";
          }
        }
        .private {
          display: flex;
          justify-content:center;
          .private-item {
            padding: 0px 20px;
            height: 25px;
            line-height: 25px;
            display: inline-block;
            vertical-align: middle;
            color: #fff;
            opacity: .8;
            transition: .15s;
            cursor: pointer;
            &:hover {
              opacity: 1;
              .private-img {
                transform: scale(1.1, 1.1);
              }
            }
            .private-img {
              width: 25px;
              height: 25px;
              display: inline-block;
              padding-right: 5px;
              float: left;
              transition: .15s;
            }
            .private-p{
              color: #333;  
              float: left;
              line-height: 25px;
              display: inline-block;
            }
          }
        }
        .spot-cut-line {
          width: 95%;
          height: 1px;
          margin: 0 auto;
          margin-top: 50px;
          border: 1px dotted #ddd;
        }
      }
      .middle-block {
        width: 100%;
        height: 2000px;
        padding: 40px 0;
        .article-block {
          width: 50%;
          height: 100%;
          display: inline-block;
          float: left;
          border-right: 1px dotted #ddd;
        }
        .info-block {
          width: 50%;
          height: 100%;
          display: inline-block;
          float: left;
        }
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
