<template>
  <div class="PlugUnit">
    <el-row>
      <el-col :span="6" class="PlugUnitItems" v-for="(proMsg,index) in ProMessage.projects.plug" :key="proMsg.id">
        <div class="PlugUnitDiv">
          <a :href="proMsg.url" target="_blank">
            <div class="PlugUnitDivTitle">
              <img :src='require("../assets/images/imgsrc/"+proMsg.img)' alt="">
            </div>
            <div class="PlugUnitCon">
              <h2>{{proMsg.title}}</h2>
              <p>{{proMsg.text}}</p>
            </div>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'PlugUnit',
    props:['ProMessage'],
    data() {
      return {}
    },
    methods: {},
    mounted: function () {}
  }
</script>
<style type="text/css">
  .PlugUnit{padding: 15px;}
  .PlugUnitItems{padding: 15px;cursor: pointer;}
  .PlugUnitDiv{width: 100%;background: rgba(255,255,255,0.8);-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;overflow: hidden;height: 270px; }
  .PlugUnitDiv:hover img{width: 100%;height: 170px;margin: 0;}
  .PlugUnitDiv:hover{box-shadow: 0 0 15px 0 rgba(255,255,255,0.5)}
  .PlugUnitDiv:hover h2{ color: #409EFF;}
  .PlugUnitDiv:hover p{ color: #409EFF;}
  .PlugUnitDivTitle{width: 100%;height: 170px;}
  .PlugUnitDivTitle img{width: 92%;height: 150px;margin: 10px 4%;transition: all 0.1s ease-in-out;}
  .PlugUnitCon{padding: 10px;height: 80px;}
  .PlugUnitCon h2{font-size: 16px;color: #666;line-height: 24px;height: 24px;overflow: hidden;}
  .PlugUnitCon p{font-size: 12px;color: #666;line-height: 23px;height: 46px;overflow: hidden;padding-top: 10px;}
</style>
