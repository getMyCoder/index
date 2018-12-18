<template>
  <div class="project">
    <el-row>
      <el-col :span="6" class="projectItems" v-for="(proMsg,index) in ProMessage.projects.project" :key="proMsg.id">
         <div class="projectDiv">
           <a :href="proMsg.url" target="_blank">
             <div class="proDivTitle">
               <img :src='require("../assets/images/imgsrc/"+proMsg.img)' alt="">
             </div>
             <div class="projectCon">
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
    name: 'project',
    props:['ProMessage'],
    data() {
      return {}
    },
    methods: {},
    mounted: function () {}
  }
</script>
<style type="text/css">
  .project{padding: 15px;}
  .projectItems{padding: 15px;cursor: pointer;}
  .projectDiv{width: 100%;background: rgba(255,255,255,0.8);-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;overflow: hidden;height: 270px; }
  .proDivTitle{width: 100%;height: 170px;}
  .proDivTitle img{width: 92%;height: 150px;margin: 10px 4%;transition: all 0.1s ease-in-out;}
  .projectDiv:hover{box-shadow: 0 0 15px 0 rgba(255,255,255,0.5)}
  .projectDiv:hover h2{ color: #409EFF;}
  .projectDiv:hover p{ color: #409EFF;}
  .projectDiv:hover img{width: 100%;height: 170px;margin: 0;}
  .projectCon{padding: 10px;height: 80px;}
  .projectCon h2{font-size: 16px;color: #666;line-height: 24px;height: 24px;overflow: hidden;}
  .projectCon p{font-size: 12px;color: #666;line-height: 23px;height: 46px;overflow: hidden;padding-top: 10px;}
</style>
