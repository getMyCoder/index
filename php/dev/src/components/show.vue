<template>
  <div class="show">
    <el-row class="show-Row">
      <el-col :span="8" class="setBlock" v-for="(SBMsg,index) in setBlockMsg" :key="SBMsg.id">
          <router-link :to="SBMsg.Link">
            <div class="setAnimate" @mouseenter="setHover(index)" @mouseleave="setHoverL()" @click="linkAClick(SBMsg.Link,SBMsg.linkAS)">
              <div class="setBItems" :style="{background:SBMsg.bgImg}" :class="index==setHoverIndex ? 'setBItemsActive' : ''">
                <img src="../assets/images/circle.svg" alt="">
                <div class="setBItemsCon">
                  <h2  :class="index==setHoverIndex ? 'setBItemsActive' : ''">
                    <i class="showTI" :class="SBMsg.firstIcon"></i>
                    <span>{{SBMsg.spanVal}}</span>
                    <div class="setIC">
                      <i class="showTIL" :class="SBMsg.secondIcon"></i>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </router-link>
      </el-col>
    </el-row>
   </div>
</template>
<script type="text/javascript">
  export default {
    name: 'show',
    data() {
      return {
        setBlockMsg:[
          {id:0,bgImg:"linear-gradient(to right, #ffbf96, #fe7096)",firstIcon:"el-icon-share showTI",spanVal:"常用软件/编辑器",secondIcon:"el-icon-star-on",Link:"/Home/all",linkAS:""},
          {id:1,bgImg:"linear-gradient(to right, #90caf9, #047edf 99%)",firstIcon:"el-icon-info",spanVal:"常用收藏夹",secondIcon:"el-icon-star-on",Link:"/Home/Favorites",linkAS:""},
          {id:2,bgImg:"linear-gradient(to right, #84d9d2, #07cdae)",firstIcon:"el-icon-goods",spanVal:"引擎链接",secondIcon:"el-icon-star-on",Link:"/Home/EngineLink",linkAS:""},
          {id:3,bgImg:"linear-gradient(to right, #d7d5b7, #e9dc09)",firstIcon:"el-icon-document",spanVal:"笔记WROD文档",secondIcon:"el-icon-star-on",Link:"/Home/DocumentNotes",linkAS:""},
          {id:4,bgImg:"linear-gradient(to right, #96ffa7, #70fe70)",firstIcon:"el-icon-star-on",spanVal:"链接",secondIcon:"el-icon-share",Link:"",linkAS:"https://getmycoder.github.io/MyCoder/"}
        ],
        setHoverIndex:null,
      }
    },
    methods: {
      setHover:function (index) {
        this.setHoverIndex=index;
      },
      setHoverL:function () {
        this.setHoverIndex=null;
      },
      linkAClick:function (linkA,linkAS) {
          if(linkA==""){
              window.location.href=linkAS;
          }
      }
    },
    mounted: function () {}
  }
</script>
<style type="text/css">
  .show{padding: 15px;}
  .setBlock{height: 220px; padding: 30px 15px 0 15px;}
  .setBItems{width: 100%;height: 190px;position: relative;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px; cursor: pointer;transition: all 0.5s ease-in-out;}
  .setAnimate{transform-style:preserve-3d;transform:perspective(800px);}
  .setBlock img{position: absolute;top: 0;right: 0;height: inherit;}
  .setBItemsCon{}
  .setBItemsCon h2{color: #fff;transition: all 0.5s ease-in-out;}
  .showTI{float: left;font-size: 60px;line-height: 140px;padding-left: 20px;}
  .setBItemsCon h2 span{float: left;font-size: 18px;line-height: 140px;padding-left: 20px;}
  .showTIL{margin: 0 15px 0 0;float: right;font-size: 30px;}
  .setBItemsActive{transform: rotateY(180deg) ;}
  .HrefDiv{width: 200px;height: 80px;margin: 60px auto 0;padding-bottom: 50px;}
  .setHref{width: 200px;height:80px;background: rgba(255,255,255,0.2);border-color: rgba(255,255,255,0.2);font-size: 40px;}
  .setHref:hover{ background: rgba(255,255,255,0.5);border-color: rgba(255,255,255,0.5);}
  .setIC{width: 100%;overflow: hidden;}
  .stLinkA{font-size: 30px !important;}
</style>
