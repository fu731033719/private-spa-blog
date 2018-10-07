<template>
  <div class="book">
    <!-- <div class="container"></div> -->
    <div class="no-content">
      <img src="../common/icon/monk.svg" alt="">
      <p>施主藏经阁空空如也请改日再来吧~</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .book {
    padding: 10px;
    background: #fff;
    min-height: 1000px;
    position: relative;
    .no-content{
      width: 300px;
      height: 300px;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      img{
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
      }
      p{
        font-size: 20px;
      }
    }
  }
</style>
