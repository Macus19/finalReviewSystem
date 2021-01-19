<template>
  <div class="login-container">
    <el-row type="flex" class="login-box">
      <el-col :span="11" class="content-left">
        <p class="content-left-title">英语阅读系统</p>
        <p class="content-left-subtitle">
          我们是致力于帮助学生构建自我学习能力的英文阅读学习在线平台。
        </p>
      </el-col>
      <el-col :span="13" class="content-right">
        <el-tabs v-model="activeTab" stretch="true" @tab-click="handleClick">
          <el-tab-pane label="登录" name="login">
            <el-form ref="loginForm">
              <el-form-item>
                <el-input v-model="loginForm.phone" placeholder="请输入账号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                type="password"
                v-model="loginForm.password"
                placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="login" id="login-btn" type="primary">立即登录</el-button>
              </el-form-item>
            </el-form>
            <div class="bottom-bar">
                <div class="remember-pwd">
                    <el-checkbox v-model="isRememberPwd">记住密码</el-checkbox>
                </div>
                <div class="forget-pwd">
                    忘记密码？
                </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
              <el-form ref="registerForm">
              <el-form-item>
                <el-input placeholder="请输入手机号" v-model="registerForm.phone"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                type="password"
                placeholder="请输入密码"
                v-model="registerForm.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="register" id="register-btn" type="primary">立即注册</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: '',
      // 注册表单
      registerForm: {},
      loginForm: {},
    };
  },
  mounted() {
    this.activeTab = this.$route.query.content;
    // eslint-disable-next-line no-console
    console.log(this.activeTab);
  },
  components: {},
  methods: {
    login() {
      this.axios({
        url: '/api/user/login',
        method: 'POST',
        data: {
          token: 'login',
          data: {
            phone: this.loginForm.phone,
            password: this.loginForm.password,
          },
        },
      }).then((res) => {
        // eslint-disable-next-line no-console
        if (res.data.code === 0) {
          this.global.token = res.data.data.token;
          this.$message({
            message: '登录成功！',
            type: 'success',
          });
          this.$router.push({
            path: '/',
          });
        } else {
          this.$message({
            message: res.data.msg,
            type: 'info',
          });
        }
      });
    },
    register() {
      this.$router.push({
        path: '/Questions',
      });
      this.axios({
        url: '/api/user/register',
        method: 'POST',
        data: {
          token: 'login',
          data: {
            phone: this.registerForm.phone,
            password: this.registerForm.password,
          },
        },
      }).then((res) => {
        // eslint-disable-next-line no-console
        if (res.data.code === 0) {
          this.$message({
            message: '注册成功！',
            type: 'success',
          });
          this.$router.push({
            path: '/Questions',
          });
        } else {
          this.$message({
            message: res.data.msg,
            type: 'info',
          });
        }
      });
    },
  },
};
</script>
<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/cyperpunk.jpg");
  background-size: 100% 100%;
}
.login-box {
  width: 600px;
  padding: 10px;
  height: 320px;
  position: absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
}
.content-left {
  padding: 10px 20px;
  color: #fff;
  height: 100%;
  background-color:  rgba(62, 87, 161, 0.5);
}
.content-left-title {
  font-size: 30px;
  font-weight: bold;
}
.content-right {
  background-color: #fff;
  padding: 10px 20px;
  height: 100%;
}
#login-btn, #register-btn{
    width: 100%;
}
.bottom-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #808080;
}
.forget-pwd{
    font-size: 14px;
}
.forget-pwd:hover{
    cursor: pointer;
    color: #3A62D7;
}
</style>
