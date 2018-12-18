<template>
  <div class="Home" :style="{background:BackgroundImg,height:setHeight+'px'}">
    <!--登录-->
    <div class="login" :style="{height:setLoginHeight}" v-if="loginFlage">
      <div class="loginBG" :style="{height:setLoginHeight,paddingTop:setLoginPT}">
        <div class="loginform">
          <h2>用户登录</h2>
          <p><input type="text" class="userF" placeholder="请输入用户名" v-model="user_name" @keyup.13="setLogin()"></p>
          <p><input type="password" class="passwordF" placeholder="请输入密码"  v-model="user_password" @keyup.13="setLogin()"></p>
          <p><el-button type="primary" size="small" @click="setLogin()"> 登入 </el-button></p>
        </div>
      </div>
      <div class="setLoading" :style="{height:setLoginHeight}" v-if="loginLoadFlage">
        <i :class="loginLog"><span v-if="loginLogSpan" class="setLoginError">登录失败，密码或是用户名错误，请重新登录！</span></i>
      </div>
    </div>
    <!--主体部分-->
    <div class="HomeMain" v-if="HomeFlage">
      <!--主体左边-->
      <div class="HomeLeft" :style="{height:setHeight+'px',width:setMenusLeft}">
        <!--顶部导航左边-->
        <div class="HTLeft">
          <div class="TLTitle">
            <i class="el-icon-d-caret TLTitleI" v-show="menuShow"></i>
            <span v-show="menuShow">PER-SYSTEM</span>
            <i class="el-icon-menu TLTitleI2" @click="setMenus()"></i>
          </div>
        </div>
        <!--个人信息-->
        <div class="HLUser">
          <h2><img :src="user.headImg" alt=""></h2>
          <h3 class="setN-Time" v-show="menuShow">
            <p>{{user.name}}</p>
            <span></span>
          </h3>
          <h4  v-show="menuShow">
            <el-popover placement="right" width="300" trigger="click">
              <div class="userMessage">
                <el-row>
                  <el-col :span="16" :offset="4">
                    <h2><img :src="user.headImg" alt=""></h2>
                  </el-col>
                  <el-col :span="4">
                    <el-button size="medium" type="primary" icon="el-icon-edit" @click="centerDialogVisible = true" circle></el-button>
                  </el-col>
                </el-row>
                <p>姓名：<span>{{user.name}}</span></p>
                <p>签名：<span>{{user.conText}}</span></p>
                <p>手机号：<span>{{user.iphoneNum}}</span></p>
                <p>邮箱：<span>{{user.Email}}</span></p>
                <h3>
                  <el-button size="small" type="primary" @click="SignOut()">退出登录</el-button>
                </h3>
              </div>
              <i class="el-icon-more" slot="reference"></i>
            </el-popover>
          </h4>
          <!--修改个人信息弹窗-->
          <el-dialog title="编辑资料" :visible.sync="centerDialogVisible" width="365px" center>
            <div class="setPersonMessage">
              <h2><span><input type="file" class="uploadHead"> <img :src="user.headImg" alt=""></span></h2>
              <p><span>姓名：</span><input type="text" v-model="user.name"></p>
              <p><span>签名：</span><input type="text" v-model="user.conText"></p>
              <p><span>手机号：</span><input type="text" v-model="user.iphoneNum"></p>
              <p><span>邮箱：</span><input type="text" v-model="user.Email"></p>
              <p><span>修改密码：</span><input type="password" v-model="user.password"></p>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="userSubmit()">确 定</el-button>
              <!--@click="centerDialogVisible = false"-->
            </span>
          </el-dialog>
        </div>
        <!--左边的menu-->
        <div class="HomeLMenu">
          <ul>
            <li v-for="(links,index) in setLink" @click="setActiveLi(index)" :class="index==setIndex ? 'ActiveMenuLi' : ''">
              <router-link  :to="links.toVal" >
                <p>
                  <i :class="links.icon"></i>
                  <span v-show="menuShow">{{links.spanVal}}</span>
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="HomeRight" :style="{width:setRightWidth}">
        <!--顶部导航右边-->
        <div class="HTRight">
          <div class="HTRL">
            <div class="resh">
              <i class="el-icon-refresh"><a href="#"></a></i>
            </div>
            <div class="search">
              <i class="el-icon-search"></i>
              <input type="text" class="input-search" placeholder="请输入搜索内容">
            </div>
          </div>
          <div class="HTRR">
            <p><i class="el-icon-tickets"></i><span>1</span></p>
            <p><i class="el-icon-message"></i><span>2</span></p>
            <p><i class="el-icon-bell"></i><span>3</span></p>
            <div class="usersHeader">
              <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link usersSpan">
                  <h3><img :src="user.headImg"></h3>
                  <h4>{{user.name}}<i class="el-icon-caret-bottom"></i></h4>
                </span>
                <el-dropdown-menu slot="dropdown" class="userUl">
                  <el-dropdown-item class="BGel">
                    <p class="BGP">更改主题：</p>
                    <p class="BGImg">
                      <span v-for="(imgurl,index) in BackgroundUrl" @click="setBG(index)"><img :src="imgurl" alt=""></span>
                    </p>
                  </el-dropdown-item>
                  <el-dropdown-item class="users-line">
                    <div @click="SignOut()">
                      退出登录<span class="i-loginC"><img src="../assets/images/loginClose.png" alt=""></span>
                    </div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
        <div class="HomeContainer" :style="{height:setRightConH}">
          <router-view :ProMessage="ProMessage"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Home',
    data() {
      return {
        messageUrl:"http://localhost/My-Project/SysModel/static/",//跨域请求的路径
        BackgroundUrl:[
          require("../assets/images/background/bg1.png"),
          require("../assets/images/background/bg2.png"),
          require("../assets/images/background/bg3.png"),
          require("../assets/images/background/bg4.png"),
          require("../assets/images/background/bg5.png"),
          require("../assets/images/background/bg6.png")
        ],
        BackgroundImg:localStorage.BackgroundImg || "",
        setHeight:"",
        user:{},
        setTime:{
          NYR:"",
          SFM:""
        },
        centerDialogVisible: false,
        // 导航,
        menuShow:true,
        setMenusLeft:"250px",
        setRightWidth:"",
        setRightConH:"",
        setIndex: localStorage.setIndex || 0,
        // 路由
        setLink:[
          {toVal:"/",icon:"el-icon-service",spanVal:"展示页"},
          {toVal:"/Home/project",icon:"el-icon-edit-outline",spanVal:"项目展示"},
          {toVal:"/Home/PlugUnit",icon:"el-icon-sold-out",spanVal:"插件列表"},
          {toVal:"/Home/other",icon:"el-icon-news",spanVal:"其他内容"},
          {toVal:"/Home/AddPro",icon:"el-icon-setting",spanVal:"添加项目"}
        ],
        // DocNotes
        ProMessage:{
          docNotes:{},
          allMessage:{},
          projects:{}
        },
        setLoginHeight:"",
        setLoginPT:"",
        loginFlage:true, //登录框
        loginLoadFlage:false,//登录中和登录失败
        HomeFlage:false, // 页面主体
        user_name:localStorage.user_name || '',
        user_password:localStorage.user_password ||  '',
        loginLog:"",
        loginLogSpan:false,
        loginClass:{
          success:"el-icon-loading",
          error:"el-icon-warning"
        }
      }
    },
    methods: {
      setBG:function (index) {
        var setBgs=require("../assets/images/background/"+(index+1)+".jpg");
        this.BackgroundImg="url("+setBgs+") no-repeat center top / 100% 120%";
        localStorage.BackgroundImg="url("+setBgs+") no-repeat center top / 100% 120%";
        var Ithis_=this;
        this.$http({
            url:Ithis_.messageUrl+"getBGIndex.php",
            method:"get",
            params:{
                name:Ithis_.user_name,
                password:Ithis_.user_password,
                index:index
            }
        }).then(function (IRes) {
            if(IRes.data=="success"){
                Ithis_.$notify({
                    title: '背景设置成功',
                    message: '',
                    type: 'success'
                });
            }else{
                Ithis_.$notify.error({
                    title: '设置失败',
                    message: ''
                });
            }
        })
      },
      // 导航,
      setMenus:function () {
        this.menuShow ? this.menuShow=false : this.menuShow=true;
        this.setMenusLeft=(this.setMenusLeft=="250px") ? "65px" : "250px";
        this.setRightWidth=document.documentElement.clientWidth-parseFloat(this.setMenusLeft)+"px";
      },
      setActiveLi:function (index) {
        this.setIndex=index;
        localStorage.setIndex=index;
      },
      SignOut:function () {
        window.localStorage.clear();
        this.loginFlage=true;
        this.loginLoadFlage=false;
        this.HomeFlage=false;
      },
      setLogin:function () {
        var _that=this;
        this.loginLoadFlage=true;
        this.HomeFlage=false;
        this.$http({
          url:_that.messageUrl+"getStatic.php",
          method:"get",
          params:{
              name:_that.user_name,
              password:_that.user_password
          }
        }).then(function (response) {
            if(response.data=='success'){
                localStorage.user_name=_that.user_name;
                localStorage.user_password=_that.user_password;
                _that.getHttp(_that);
                _that.getUserHttp(_that);
            }else{
                _that.loginFlage=true;
                _that.loginLoadFlage=true;
                _that.loginLog=_that.loginClass.error;
                _that.loginLogSpan=true;
                setTimeout(function () {
                    _that.loginLogSpan=false;
                    _that.loginLoadFlage=false;
                    _that.loginLog=_that.loginClass.success;
                },2000)
            }
        })
      },
      // 获取页面数据
      getHttp:function (_this_) {
        this.$http.get('./static/json.json').then(function (res) {
          // _this_.user=res.data.user;
          // _this_.user.headImg=require("../assets/images/"+res.data.user.headImg);
          _this_.ProMessage.docNotes=res.data.wordNotes;
          for(var i=0;i<_this_.ProMessage.docNotes.length;i++){
            _this_.ProMessage.docNotes[i].href="https://github.com/getMyCoder/EducationDoc/blob/master/"+_this_.ProMessage.docNotes[i].name
          }
          _this_.ProMessage.allMessage=res.data.allMessage;
          _this_.ProMessage.projects=res.data.projects;
          _this_.loginFlage=false;
          _this_.loginLoadFlage=false;
          _this_.HomeFlage=true;
        });
      },
      getUserHttp:function (_this_) {
          _this_.$http({
              url:_this_.messageUrl+"getData.php",
              method:"get",
              params:{
                  name:_this_.user_name,
                  password:_this_.user_password
              }
          }).then(function (rest) {
              _this_.user=rest.data;
              _this_.user.headImg=require("../assets/images/"+rest.data.headImg);
              var setBgs=require("../assets/images/background/"+(parseInt(rest.data.indexNum)+1)+".jpg");
              _this_.BackgroundImg="url("+setBgs+") no-repeat center top / 100% 120%";
              localStorage.BackgroundImg="url("+setBgs+") no-repeat center top / 100% 120%";
          })
      },
      // 提交用户修改的信息
      userSubmit:function () {
          var Ithis_=this;
          this.$http({
              url:Ithis_.messageUrl+"setUserMsg.php",
              method:"get",
              params:{
                  id:Ithis_.user.id,
                  name:Ithis_.user.name,
                  conText:Ithis_.user.conText,
                  iphoneNum:Ithis_.user.iphoneNum,
                  Email:Ithis_.user.Email,
                  password:Ithis_.user.password
              }
          }).then(function (IRes) {
              if(IRes.data=="success"){
                  Ithis_.$message({
                      message: '个人信息设置成功！',
                      type: 'success'
                  });
              }else{
                  Ithis_.$message.error('提交失败！');
              }
          });
          this.centerDialogVisible = false;
      }
    },
    mounted: function () {
      this.setHeight=document.documentElement.clientHeight;
      this.setRightWidth=document.documentElement.clientWidth-parseFloat(this.setMenusLeft)+"px";
      this.setRightConH=document.documentElement.clientHeight-45+"px";
      this.setLoginHeight=document.documentElement.clientHeight+"px";
      this.setLoginPT=(document.documentElement.clientHeight-350)/2-50+"px";
      this.loginLog=this.loginClass.success;
      if(localStorage.user_name==this.user_name && localStorage.user_password==this.user_password){
          this.loginFlage=false;
          this.loginLoadFlage=false;
          this.HomeFlage=true;
          this.getHttp(this);
          this.getUserHttp(this);
      }else{
          this.loginFlage=true;
          this.loginLoadFlage=false;
          this.HomeFlage=false;
      }
      var that=this;
      setInterval(function () {
        var getMyData=new Date();
        that.setTime.NYR=getMyData.getFullYear()+"/"+(getMyData.getMonth()+1)+"/"+getMyData.getDate();
        that.setTime.SFM=getMyData.getHours()+":"+getMyData.getMinutes()+":"+getMyData.getSeconds();
        $(".setN-Time span").html(that.setTime.NYR+"/<i>"+that.setTime.SFM+"</i> ")
      },1000);
      window.onresize=function () {
        if(document.documentElement.clientWidth>1200){
          that.setRightWidth=document.documentElement.clientWidth-parseFloat(that.setMenusLeft)+"px";
        }else{
          that.setRightWidth="950px";
        }
      }
    }
  }
</script>
<style type="text/css">
  .Home {width: 100%;background:url("../assets/images/background/3.jpg") no-repeat center top;background-size: 100% 120%;overflow: hidden;min-width: 1200px;position: relative;}
  /*.HomeTop {background: rgba(0, 0, 0, 0.1);height: 45px;}*/
  button{outline: none;}
  .HTLeft {height: 45px;background: rgba(0, 0, 0, 0.1);overflow: hidden;float: left;width:100%;}
  .TLTitle {color: #fff;line-height: 45px; float: left;overflow: hidden;width: 100%;}
  .TLTitle span {font-size: 16px;color: #fff; line-height: 45px;display: inline-block;font-weight: bold;padding-left: 15px;float: left;}
  .TLTitleI {font-size: 20px;float: left;line-height: 45px !important;padding-left: 20px;}
  .TLTitleI2{float: right;line-height: 45px !important;margin-right: 24px;font-size: 20px;cursor: pointer;}
  .HTRight {height: 45px; overflow: hidden;width: 100%;background: rgba(0, 0, 0, 0.1);}
  .HTRL {float: left;overflow: hidden;width: 270px;}
  .resh {float: left;line-height: 30px; cursor: pointer;padding: 0 10px;height: 30px;border-right: 1px solid rgba(0, 0, 0, 0.1);margin-top: 7px;}
  .resh i { color: #fff;font-size: 16px;font-weight: bold;padding-right: 5px;}
  .search {float: left;line-height: 42px;padding-left: 10px;}
  input {border: none;outline: none;}
  .search i { color: #fff;font-size: 16px;font-weight: bold;padding-right: 5px;}
  .input-search {background: none;height: 30px;width: 180px;color: #fff;border-bottom: 1px solid rgba(0, 0, 0, 0.1);padding-left: 3px;}
  .HTRR {float: right;overflow: hidden;width: 420px;}
  .HTRR p {float: left;height: 30px;margin-top: 7px;overflow: hidden;padding: 0 10px 0 18px;border-right: 1px solid rgba(0, 0, 0, 0.1)}
  .HTRR p i {font-size: 16px;color: #fff;display: block;float: left;line-height: 30px;}
  .HTRR p span {display: block;width: 16px;height: 20px;background: rgba(0, 0, 0, 0.2);-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px; float: left;margin: 5px 10px 0 10px;text-align: center;color: #fff;font-size: 12px;line-height: 20px;}
  .usersHeader {float: left;height: 30px;border-right: 1px solid rgba(0, 0, 0, 0.1);margin-top: 7px;overflow: hidden;padding: 0 15px;cursor: pointer;}
  .usersHeader h3 {float: left;padding-right: 15px;}
  .usersHeader h3 img {width: 30px;height: 30px;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;}
  .usersHeader h4 {float: left;line-height: 30px;color: #fff;font-weight: normal;font-size: 14px;}
  .usersHeader h4 i {padding-left: 10px;}
  .usersSpan{color: #fff;}
  .userUl{width: 200px;padding-bottom: 0;}
  .BGP{color: #666;}
  .BGImg{float: left;}
  .BGImg span{display: block;float: left;width: 26px;height: 26px; overflow: hidden;text-align: center}
  .BGImg span img{width: 20px;height: 20px;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;margin-top: 3px;}
  .BGImg span img:hover{width: 25px;height: 25px;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;margin-top: 0;}
  .BGel{height: 75px;}
  .users-line{border-top: 1px solid #f1f1f1;}
  .i-loginC{float: right;padding-top: 10px;}
  /*主体左边*/
  .HomeMain{width: 100%;overflow: hidden;}
  .HomeLeft{float: left; width: 20%;background: rgba(0,0,0,0.05);max-width: 250px;}
  .HLUser{overflow: hidden;padding: 15px 0 15px 10px;}
  .HLUser h2{width: 45px;height: 45px;overflow: hidden;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;float: left;}
  .HLUser h2 img{width: 45px;height: 45px;}
  .HLUser h3{float: left;color: #fff;font-weight: normal;margin-left: 12px;}
  .HLUser h3 p{font-size: 16px;height: 24px;line-height: 24px;}
  .HLUser h3 span{font-size: 12px;height: 20px;line-height: 20px;display: block;color: #f1f1f1;}
  .HLUser h3 span i{font-size: 14px;color: #fff;font-style: normal;line-height: 20px;}
  .HLUser h4{float: right;color: #fff;line-height: 45px;font-size: 18px;margin-right: 15px;cursor: pointer;}
  .userMessage{}
  .userMessage h2{text-align: center;padding: 20px 0;}
  .userMessage h2 img{width: 80px;height: 80px;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;}
  .userMessage p{margin: 15px;}
  .userMessage p span{color: #538ecb;}
  .userMessage h3{text-align: center;margin: 30px 0;}
  /*个人资料*/
  .setPersonMessage{}
  .setPersonMessage h2{width: 100%;text-align: center;height: 80px;margin-bottom: 20px;}
  .setPersonMessage h2 span{width: 80px;text-align: center;height: 80px;position: relative;}
  .uploadHead{position: absolute;top: 0;left: 0;width: 80px;height: 80px;opacity: 0;filter: alpha(opacity=0);cursor: pointer;}
  .setPersonMessage h2 img{width: 80px;height: 80px;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;}
  .setPersonMessage p{margin: 10px;}
  .setPersonMessage p span{display: block;float: left;width: 80px;text-align: right;line-height: 30px;}
  .setPersonMessage p input{border-bottom:1px solid rgba(0,0,0,0.2);height: 30px;width: 200px;}
  .setPersonMessage p input:focus{ border-color: #409EFF;}
  /*导航*/
  .HomeRight{float: left;overflow: hidden;min-width: 950px; }
  .HomeLMenu{}
  .HomeLMenu ul{padding: 0 !important;}
  .HomeLMenu ul li{height: 40px;line-height: 40px;padding-left: 20px;font-size: 14px;color: #fff;margin: 5px 0;cursor: pointer;}
  .HomeLMenu ul li:hover{background: rgba(0,0,0,0.2);}
  .HomeLMenu ul li a{color: #fff;}
  .HomeLMenu ul li p{width: 100%;height: 40px;overflow: hidden;}
  .HomeLMenu ul li p span{line-height: 40px;display: block;float: left;}
  .HomeLMenu ul li p i{padding-right: 15px;font-size: 18px;line-height: 40px;float: left;}
  .ActiveMenuLi{background: rgba(0,0,0,0.2);}
  .HomeContainer{overflow-y: auto}
  .login{width: 100%;position: absolute;z-index: 99999;background:url("../assets/images/login.jpg") no-repeat center top;background-size: 100% 100%;}
  .loginBG{width: 100%;background: linear-gradient(to bottom, rgba(123, 67, 151, 0.35), rgba(33, 150, 243, 0.55));}
  .loginform{width: 350px;background: #fff;margin: 0 auto;text-align: center;padding: 20px 0 80px 0;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;box-shadow: 0 0 15px 0 #ccc}
  .loginform h2{font-size: 16px;color: #666;font-weight: normal;padding-top: 20px;line-height: 40px;}
  .loginform input{width: 80%;border:1px solid #ccc;height: 35px;padding-left: 5px;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;}
  .loginform input:focus{border-color: #409EFF;}
  .loginform p{overflow: hidden;margin: 30px 0 0 0;}
  .loginform button{width:80%;height: 40px; }
  .setLoading{position: absolute;top: 0;left: 0;z-index: 999999;width: 100%;background: rgba(255,255,255,0.6);text-align: center}
  .setLoading i{font-size: 40px;margin-top: 250px;}
  .setLoginError{font-size: 14px;color: #fff;line-height: 30px;display: block;background: rgba(0,0,0,0.8);padding: 5px 15px;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;margin-top: 20px;}
</style>
