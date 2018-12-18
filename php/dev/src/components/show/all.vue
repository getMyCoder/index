<template>
  <div class="all">
     <div class="allItems" v-for="allMsg in ProMessage.allMessage" :key="allMsg.id">
       <img :src='require("../../assets/images/"+allMsg.img)' alt="">
       <el-popover placement="right-start" :title="allMsg.title" width="300"  trigger="hover" :content="allMsg.content">
         <el-button slot="reference"  class="allItShow">{{allMsg.name}}</el-button>
       </el-popover>
     </div>
    <div class="desktopDiv">
      <img src="../../assets/images/show.png" alt="">
      <el-popover placement="top-start" title="Desktop Editor" width="800" trigger="hover" content="常用的编辑器">
        <el-button slot="reference" class="allItShow1">Desktop Editor</el-button>
      </el-popover>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'all',
    props:['ProMessage'],
    data() {
      return {
        visible: false,
      }
    },
    methods: {},
    mounted: function () {

    }
  }
</script>
<style type="text/css">
  .all{overflow: hidden;padding-top: 30px;}
  .allItems{width: 45%;float: left;-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;overflow: hidden;position: relative;margin: 0 0 30px 3.3%;height: 240px;text-align: center;background: rgba(255,255,255,0.5);border:1px solid rgba(255,255,255,0.5);}
  .allItems img{height: 240px;}
  .allItShow{position: absolute;top: 0;left: 0;width: 100%;height: 240px;background: none;border: none;color: #409EFF;font-size: 24px;}
  .allItems:hover .allItShow{background: rgba(0,0,0,0.5);font-size: 40px;}
  .allItems:hover{border:1px solid rgba(0,0,0,0.5);}
  .setLableAll{background: red;}
  .desktopDiv{width: 93.4%;margin: 30px auto;-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;overflow: hidden;position: relative;}
  .desktopDiv img{width: 100%}
  .allItShow1{position: absolute;top: 0;left: 0;width: 100%;height: 100%;background: none;border: none;color: #409EFF;font-size: 24px;}
  .desktopDiv:hover .allItShow1{background: rgba(0,0,0,0.5);font-size: 40px;}
  .desktopDiv:hover{border:1px solid rgba(0,0,0,0.5);}
</style>
