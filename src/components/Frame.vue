<template>
  <!-- 用来做基本框架结构，放置页头页脚 -->
  <div class="frame">
    <!-- <el-row class="home-page-header">
      <el-col :span="4" class="title">英语阅读学习系统</el-col>
      <el-col :span="8" class="search-bar">
        <el-input
          placeholder="请输入内容"
          v-model="searchKey"
          class="input-with-select"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="课程" value="1"></el-option>
          </el-select>
          <el-button type="success" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
       <el-col :span="12" class="login-register">
        <span @click="turnToLoginPage">登录</span>
        <span>|</span>
        <span>注册</span>
      </el-col>
    </el-row> -->
    <Navigator></Navigator>
    <main class="main">
      <router-view> </router-view>
    </main>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator';
import Footer from '@/components/Footer';

export default {
  data() {
    return {
      searchKey: '',
    };
  },
  components: {
    Navigator,
    Footer,
  },

  methods: {
    turnToLoginPage() {
      this.$router.push({
        path: '/Login',
      });
    },
  },
};
</script>
<style scoped>
.frame {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
}
.home-page-header{
  padding: 10px 0;
}
.title, .search-bar{
  text-align: center;
  line-height: 50px;
  vertical-align: middle;
}

.login-register{
  padding: 0 50px;
  text-align: right;
  line-height: 50px;
  vertical-align: middle;
}
.login-register span{
  cursor: pointer;
}
</style>
