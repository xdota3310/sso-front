<template>
  <!--背景图-->
  <div class='note' :style='note'>
    <!--login框，表单+tab标签页的组合-->
    <div class='loginFrame'>
      <el-form
        ref='AccountForm'
        :model='account'
        rules='rules'
        label-position='left'
        label-width='0px'
        class='demo-ruleForm login-container'
      >
        <!-- tab标签 -->
        <el-form-item>统一登录认证系统</el-form-item>
        <el-form-item prop='username'>
          <el-input
            type='text'
            v-model="account.username"
            auto-complete='off'
            placeholder='请输入您的账号'
          ></el-input>
        </el-form-item>
        <el-form-item prop='password'>
          <el-input
            type='password'
            v-model='account.password'
            auto-complete='off'
            placeholder='请输入密码'
          ></el-input>
        </el-form-item>
        <el-form-item style=''>
          <el-checkbox v-model='account.isRemember' checked >记住密码</el-checkbox>
        </el-form-item>
        <el-form-item style='width:100%;'>
          <el-button type='primary' style='width:100%;'>登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: '登录',
  data () {
    return {
      logining: false,
      note: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        backgroundImage: 'url(' + require('@/assets/loginBackgroud.jpg') + ')',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      },
      account: {
        username: '',
        password: '',
        isRemember: false
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
          //  { validator: validaePass }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          //  { validator: validaePass2 }
        ]
      },
      checked: false
    }
  }
}
</script>
<style scoped>
.login-container {
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 220px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.el-form-item {
    margin-bottom: 15px;
}
</style>
