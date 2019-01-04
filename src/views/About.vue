<template>
  <div class="about">
    <div class="container">
      <canvas id="spark"></canvas>
      <div class="context">
        <img class="pic-self" src="../common/img/pic.png">
        <h1>Introduce</h1>
        <h2>(click scroll~ click scroll😋)</h2>
        <div :class="`context-item item-${index+1}`" v-for="(item, index) in article_list" :key=index v-text="item"></div>
      </div>
      <div class="down-scroll">
        <img src="../common/icon/down-scroll.svg" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @keyframes move {
      0% {
        transform: translateY(0px) scale(.9, .9);
      }
      25% {
        transform: translateY(2px) scale(1.1, 1.1);
      }
      50% {
        transform: translateY(4px) scale(1.2, 1.2);
      }
      75% {
        transform: translateY(6px) scale(1.1, 1.1);
      }
      100% {
        transform: translateY(8px) scale(.9, .9);
      }
    }
  .about {
    padding: 10px;
    background: #fff;
    min-height: 2000px;
    .pic-self {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      margin-top: 200px;
    }
    #spark {
      width: 100%;
      height: 100%;
      top: 0;
      position: fixed;
    }
    .context {
      width: 100%;
      text-align: center;
      h1 {
        margin-top: 50px;
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 44px;
      }
      h2{
        font-size: 24px;
        color: #ddd;
        margin-bottom: 40px;
      }
      .context-item {
        width: 60%;
        line-height: 40px;
        margin: 0 auto;
        margin-bottom: 40px;
        font-size: 20px;
      }
      @for $i from 1 through 12 { .item-#{$i} { opacity: var(--opacity); transform: translateY(var(--trans_y)); transition: .5s;} }
    }
    .down-scroll{
      width: 100%;
      position: fixed;
      bottom: 120px;
      text-align: center;
      opacity: var(--opacity) !important;
      animation: move .6s infinite;
      img{
        width: 30px;
        height: 30px;
      }
    }
  }
</style>
<script>
  import * as basicScroll from 'basicscroll'
  export default {
    data() {
      return {
        article_list: [
          '付晨伟，农历甲戌年生人(双十二之子)，非典型的浓密发量型程序猿.',
          '工科生、受硅基真神感召从而变道的Codefarmer👨‍💻（Hallelu Yah），从不狂热吹嘘单一语言或框架，保持稳定中立😀.',
          '熟悉Http协议及浏览器原理',
          '了解模块化规范，以及ES6+语法特性，轻微代码洁癖，能编写符合规范的js代码',
          '熟练掌握Vue及其生态下的各种工具（Vue-router、Vuex、Axios、）等的使用',
          '了解webpack打包机制及性能优化，能对基础脚手架目录进行业务化修改',
          '熟练使用Git、SVN等团队协作版本管理工具，能有效率的进行团队开发',
          '对后端开发始终抱有热情，多次在个人项目中进行服务器搭建配置及node服务端尝试',
          '本质是无神论者，在特定情况下信仰飞天意面神教🙌',
          '沉迷DND以及克苏鲁、SCP，熟读战锤通史，拥有平庸的音乐天赋（在水磨功夫下通关国粹二胡业余等级考试🐷）但内核是一个热情的爵士乐爱好者🎷，业余心理医生（通过进食促使自己与同行者获得愉悦+1同时获得多余热量+2）.',
          '平时是一个平平无奇的上班族，但私底下其实是忙碌的救世主，一周内会去不同大陆进行布道救世的行动，具体行动持续时间视项目紧张程度而定🎮。',
          '夜行跑者，通常习惯在10点🕙后进行炼体活动🤳',
        ]
      }
    },
    methods: {
      createContextAni (index) {
        let to_num = 100*Number(index) + 200;
        let logo = basicScroll.create({
          elem: document.querySelectorAll('.context-item')[index],
          from: '0',
          to: `${to_num}px`,
          direct: true,
          props: {
            '--opacity': {
                from: '0',
                to: '1'
              },
            '--trans_y': {
              from: '-10px',
              to: '0'
            }
          }
        })
        logo.start()
      }
    },
    mounted () {
      const arrow = basicScroll.create({
        elem: document.querySelector('.down-scroll'),
        from: '0',
          to: '400px',
          direct: true,
          props: {
          '--opacity': {
              from: '1',
              to: '0'
            },
          }
      })
      arrow.start()
      for (let i = 0; i<12; i++) {
        this.createContextAni(i)
      }
      let spark = document.getElementById("spark");
      spark.width = document.documentElement.clientWidth;
      spark.height = document.documentElement.clientHeight;
      let ctx = spark.getContext("2d");
      let flag = false;    //启动的标志
      let particles = [];
      let color = ['#ff5959', '#ffad5a', '#4f9da6', '#1a0841', '#1fe5bd', '#41a7b3', '#d22780', '#ccf0c3'];
      animate();
      function animate() {
        setInterval(function () {
          render();
          area();
        }, 1000 / 60)
      }
      spark.onmousedown = function (event) {
        let e = event || window.event;
        flag = true;
        do_spawn(e, 35 * Math.random() + 35);
      };
      spark.onmouseup = function () {
        flag = false;
      };
      spark.onmouseout = function () {
        flag = false;
      };
      spark.onmousemove = function (event) {
        let e = event || window.event;
        if (flag) {
          do_spawn(e, 9);
        }
      };
      spark.ontouchstart = function (e) {
        flag = true;
        do_spawn(e, 35 * Math.random() + 35);
      };
      spark.ontouchend = function () {
        flag = false;
      };
      spark.ontouchmove = function (e) {
        if (flag) {
          do_spawn(e, 9);
        }
      };
      function do_spawn(e, n) {   //设置孵化器的生产数量
        let x = e.clientX || e.touches[0].pageX;  //鼠标坐标||移动端触摸坐标
        let y = e.clientY || e.touches[0].pageY;
        for (let i = 0; i < n; i++) {
          spawn(x, y);
        }
      }
      function spawn(x, y) {   //孵化器，生成一个原点对象
        let particle = new Particle();
        particle.init(x, y);
        particles.push(particle);

      }
      function render() {    //把生成的原点渲染出来
        ctx.clearRect(0, 0, spark.width, spark.height);
        for (let i = 0, len = particles.length; i < len; i++) {
          particles[i].draw();
          particles[i].update();
        }
      }
      function area() {  //半径足够小的时候删除该点
        let n = 0;
        for (let i = 0, l = particles.length; i < l; i++) {
          if (particles[i].r > 1) {
            particles[n++] = particles[i];
          }
        }
        while (particles.length > Math.min(700, n)) {
          particles.pop();
        }
      }
      function Particle() { }  //构造函数，小球原型
      Particle.prototype = {
        init: function (x, y) {  //初始化小球各项数据
          this.x = x || 0.0;
          this.y = y || 0.0;
          this.r = 10 * Math.random() + 10 || 40;
          this.color = color[~~(Math.random() * 8)];
          this.theta = Math.random() * 2 * Math.PI;
          this.R = Math.random() * 4 + 2;
          this.vx = Math.cos(this.theta) * this.R;
          this.vy = Math.sin(this.theta) * this.R;
        },
        draw: function () {    //画出一个球的方法
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        },
        update: function () {    //改变球的各项属相的方法
          this.x += this.vx;
          this.y += this.vy;
          this.vx += Math.cos(this.theta) * .1;
          this.vy += Math.sin(this.theta) * .1;
          this.vx *= .94;
          this.vy *= .94;    //给速度设置一个衰减系数
          this.r *= .92;
          this.color = color[~~(Math.random() * 8)]; //动态改变圆点的颜色达到闪烁的效果
        }
      };
    }
  }
</script>