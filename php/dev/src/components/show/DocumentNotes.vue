<template>
  <div class="DocumentNotes">
    <div class="docTitle">文档列表 <i class="el-icon-document"></i></div>
    <div class="docCon">
      <el-row>
        <el-col :span="24" class="setNotes" v-for="(DNotes,index) in ProMessage.docNotes" :key="DNotes.id">
          <a :href="DNotes.href">
            <h3 class="hrefNotesId">{{DNotes.id}}</h3>
            <h2>{{DNotes.name}}</h2>
            <el-button  type="primary" size="mini" icon="el-icon-share" class="hrefNotes"></el-button>
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'DocumentNotes',
    props:['ProMessage'],
    data() {
      return {}
    },
    methods: {},
    mounted: function () {}
  }
</script>
<style type="text/css">
  .docTitle{text-align: center;font-size:18px;color: #fff;border-bottom: 1px solid rgba(255,255,255,0.2);width: 96%;margin: 0 auto;line-height: 60px;}
  .docTitle i{font-size: 20px;padding-left: 10px; }
  .docCon{width: 90%;margin: 40px auto;border:solid rgba(255,255,255,0.2); border-width: 1px 1px 0 1px;}
  .setNotes{border-bottom:1px solid rgba(255,255,255,0.2);height: 40px; overflow: hidden;}
  .setNotes h2{float: left;font-size: 14px;color: #fff;font-weight: normal; line-height: 40px;}
  .hrefNotes{float: right;margin: 5px 15px;}
  .setNotes a{overflow: hidden;display: block;width: 100%;height: 40px;}
  .setNotes:hover{background: rgba(255,255,255,0.2);cursor: pointer;}
  .hrefNotesId{float: left;width: 30px;height: 30px; text-align: center;background:rgba(255,255,255,0.5);-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;overflow: hidden;font-weight: normal; font-size: 12px;line-height: 30px;color: #666;margin: 5px 10px;}

</style>
