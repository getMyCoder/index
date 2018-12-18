<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style type="text/css">
  body {margin: 0;padding: 0;}
  * {margin: 0;padding: 0;}
  h1, h2, h3, h4, h5, h6, ul, li, ol, dl, dd, dt {list-style: none;}
  a {text-decoration: none}
  img {vertical-align: top}
  .clear {clear: both}
  #app {
    font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar{width: 10px;height: 10px; }
  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track{-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);border-radius: 5px;background-color: #F5F5F5;}
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb{border-radius: 5px;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);background-color: #999999;}
</style>
