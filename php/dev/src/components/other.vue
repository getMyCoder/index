<template>
  <div class="other">
    <el-row>
      <el-col :span="6" class="otherItems" v-for="(proMsg,index) in ProMessage.projects.other" :key="proMsg.id">
        <div class="otherDiv">
          <a :href="proMsg.url" target="_blank">
            <div class="otherDivTitle">
              <img :src='require("../assets/images/imgsrc/"+proMsg.img)' alt="">
            </div>
            <div class="otherCon">
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
    name: 'other',
    props:['ProMessage'],
    data() {
      return {}
    },
    methods: { },
    mounted: function () {}
  }
</script>
<style type="text/css">
  .other{padding: 15px;}
  .otherItems{padding: 15px;cursor: pointer;}
  .otherDiv{width: 100%;background: rgba(255,255,255,0.8);-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;overflow: hidden;height: 270px; }
  .otherDiv:hover img{width: 100%;height: 170px;margin: 0;}
  .otherDiv:hover{box-shadow: 0 0 15px 0 rgba(255,255,255,0.5)}
  .otherDiv:hover h2{ color: #409EFF;}
  .otherDiv:hover p{ color: #409EFF;}
  .otherDivTitle{width: 100%;height: 170px;}
  .otherDivTitle img{width: 92%;height: 150px;margin: 10px 4%;transition: all 0.1s ease-in-out;}
  .otherCon{padding: 10px;height: 80px;}
  .otherCon h2{font-size: 16px;color: #666;line-height: 24px;height: 24px;overflow: hidden;}
  .otherCon p{font-size: 12px;color: #666;line-height: 23px;height: 46px;overflow: hidden;padding-top: 10px;}
</style>
