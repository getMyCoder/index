<template>
  <div class="Favorites">
    <el-row>
      <el-col :span="4" v-for="FMsg in FavoritesMessage" class="setFCol" :key="FMsg.id">
        <a :href="FMsg.href" target="_blank">
          <div class="FBlock">
            <div class="FBItems" :style='{background:"url("+FMsg.url+")",backgroundSize: "100% 100%"}'>
              <div class="FBlockBg">
                <p>
                  {{FMsg.title}}
                </p>
              </div>
            </div>
          </div>
        </a>
      </el-col>
      <el-col :span="4" class="setFCol">
        <a href="https://github.com/getMyCoder/MyCoder/blob/master/json.json" target="_blank">
          <div class="FBlock" style="background: #409EFF">
            <div class="FBItems FBItemsS">
              <div class="FBlockBg">
                <p>添加标签</p>
              </div>
            </div>
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Favorites',
    data() {
      return {
        FavoritesMessage: []
      }
    },
    methods: {},
    mounted: function () {
      var thisF = this;
      this.$http.get("https://getmycoder.github.io/MyCoder/json.json").then(function (res) {
        thisF.FavoritesMessage = res.data;
        for (var i = 0; i < res.data.length; i++) {
          thisF.FavoritesMessage[i].url = "https://getmycoder.github.io/MyCoder/images/" + res.data[i].url;
        }
      });
    }
  }
</script>
<style type="text/css">
  .FBlock {height: 160px;background: #fff;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;overflow: hidden;
    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transitiontransition: all 0.2s ease-in-out;
  }
  .FBItems {width: 100%;height: inherit; }
  /*.FBlock:hover{margin: 10px;height: 160px;}*/
  .setFCol {padding: 20px;margin-bottom: 15px; height: 180px;cursor: pointer;
    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transitiontransition: all 0.2s ease-in-out;
  }
  .FBlockBg {display: none;background: rgba(0, 0, 0, 0.5); height: 180px;}
  .FBlockBg p { width: 120px;margin: 0 auto;text-align: center;color: #fff;font-size: 14px;height: 180px;overflow: hidden;line-height: 180px;}
  .setFCol:hover {padding: 10px;}
  .setFCol:hover .FBlock {height: 180px;}
  .setFCol:hover .FBlockBg {display: block}

  .FBItemsS{background: url("../../assets/images/add.png") no-repeat top center;background-size: 100% 100%;}

</style>
