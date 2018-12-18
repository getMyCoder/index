<template>
  <div class="EngineLink">
    <div class="items" v-for="(setUrlMsg,index) in setUrl" :key="setUrlMsg.id">
      <h2><img :src="setUrlMsg.img" alt=""></h2>
      <div class="input">
        <div class="input-left" :class="setUrlMsg.class1">
          <input type="text"  v-model="setUrlMsg.setRef" @keyup.13="setKey(setUrlMsg.setRef,setUrlMsg.start,setUrlMsg.end)">
        </div>
        <div class="input-right" :class="setUrlMsg.class3" @click="setLocation(setUrlMsg.setRef,setUrlMsg.start,setUrlMsg.end)">
          <button>{{setUrlMsg.selectVal}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'EngineLink',
    data() {
      return {
        setUrl:[
          {
            id:0,
            setRef:"",
            img:require("../../assets/images/baidu.png"),
            class1:"iLBaidu",
            class3:"iRBaidu",
            selectVal:"百度一下",
            start:"http://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=",
            end:""
          },
          {
            id:1,
            setRef:"",
            img:require("../../assets/images/sougou.png"),
            class1:"iLSG",
            class3:"iRSG",
            selectVal:"搜狗",
            start:"https://www.sogou.com/web?query=",
            end:"&ie=utf8&_ast=1544068608&_asf=null&w=01029901&p=40040100&dp=1&cid=&cid=&s_from=result_up"
          },
          {
            id:2,
            setRef:"",
            img:require("../../assets/images/google.png"),
            class1:"iLGG",
            class3:"iRGG",
            selectVal:"Google",
            start:"https://www.google.com.hk/search?q=",
            end:"&aqs=chrome&sourceid=chrome&ie=UTF-8"
          },
          {
            id:3,
            setRef:"",
            img:require("../../assets/images/360.png"),
            class1:"iL360",
            class3:"iR360",
            selectVal:"360",
            start:"https://www.so.com/s?q=",
            end:"&src=srp&fr=none&ps"
          },
          {
            id:4,
            setRef:"",
            img:require("../../assets/images/china.png"),
            class1:"iLZG",
            class3:"iRZG",
            selectVal:"CHINA",
            start:"http://www.chinaso.com/search/pagesearch.htm?q=",
            end:""
          }
        ],
      }
    },
    methods: {
      setLocation:function (setR,setS,setE) {
        window.location.href=setS+setR+setE
      },
      setKey:function (setR,setS,setE) {
        window.location.href=setS+setR+setE
      }
    },
    mounted: function () {

    }
  }
</script>
<style type="text/css">
  .EngineLink{}
  .items{margin: 20px 0 0 0;}
  .items h2{text-align: center}
  .items h2 img{width: 220px;}
  .input{overflow: hidden;width: 662px;margin: 10px auto 0;}
  .input-left{width: 555px;height: 40px;float: left;border:solid #b8b8b8;border-width: 1px 0 1px 1px;overflow: hidden;}
  .input-left input{width: 545px;height: 40px;border:none;padding-left: 10px;font-size: 14px;}
  .input-right{width: 100px;height: 42px;border:none;float: left;}
  .input-right button{width: 100px;height: 42px;background: none;border:none;color: #fff;font-size: 14px;}
  /*百度*/
  .iRBaidu{background: #1e82f9;}
  /*搜狗*/
  .iRSG{background: #ff6957;}
  /*Google*/
  .iRGG{background: #333;}
  .iLGG{ -webkit-border-bottom-left-radius: 18px;-moz-border-bottom-left-radius: 18px;border-bottom-left-radius: 18px;
    -webkit-border-top-left-radius: 18px;-moz-border-top-left-radius: 18px;border-top-left-radius: 18px;}
  .iRGG{-webkit-border-bottom-right-radius: 18px;-moz-border-bottom-right-radius: 18px;border-bottom-right-radius: 18px;
    -webkit-border-top-right-radius: 18px;-moz-border-top-right-radius: 18px;border-top-right-radius: 18px;}
  /*360*/
  .iR360{background: #00ba60;}
  /*中国*/
  .iRZG{background: #e3030b;}
</style>
