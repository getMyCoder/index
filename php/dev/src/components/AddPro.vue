<template>
  <div class="AddPro" :style="{minHeight:setAddHeight}">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm setAddProForm">
      <el-form-item class="setADddProF" label="项目标题" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item class="setADddProF" label="项目类型" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择项目类型">
          <el-option label="项目展示" value="project"></el-option>
          <el-option label="插件列表" value="PlugUnit"></el-option>
          <el-option label="其他内容" value="other"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="setADddProF" label="当前时间" required>
        <el-col :span="11">
          <el-form-item class="setADddProF" prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item class="setADddProF" prop="date2">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item class="setADddProF" label="上传图片" prop="uploadImg">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item class="setADddProF" label="项目描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item class="setADddProF">
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'AddPro',
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          uploadImg:'',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入项目标题', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          uploadImg:[
            { type: 'date', required: true, message: '请选择图片', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写项目描述', trigger: 'blur' }
          ]
        },
        dialogImageUrl: '',
        dialogVisible: false,
        setAddHeight:""
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {

      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    mounted:function () {
      this.setAddHeight=document.documentElement.clientHeight-85+"px"
    }
  }
</script>
<style type="text/css">
  .AddPro{width: 450px;margin: 20px auto; background: rgba(0,0,0,0.4);}
  .setADddProF label{color: #fff}
  .el-upload-dragger{width: 350px;}
  .setAddProForm{padding: 40px 20px;}
</style>
