<template>
<el-row type="flex" align="middle">
  <el-col :span="4" class="left-box">
    期末复习系统
  </el-col>
  <el-col :span="16">
    <el-menu :default-active="active-index"
      text-color="#fff"
      mode="horizontal"
      active-text-color="#409EFF"
      background-color="#000000"
      router="true"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/SourceCenter">资源中心</el-menu-item>
      <el-menu-item index="/ConsolidationExercise">巩固练习</el-menu-item>
      <el-menu-item index="/RandomExercise">随机练习</el-menu-item>
      <el-menu-item index="/DiscussionWorld">讨论天地</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="4" class="right-box">
    <el-row type="flex">
      <el-col :span="10">
        <span @click="turnToPersonalZone">我的学习</span>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-setting"></i>|
      </el-col>
      <el-col :span="10">
        <span @click="turnToPersonalInfo">{{username}}</span>
      </el-col>
    </el-row>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      username: 'Marcus',
    };
  },
  components: {},
  methods: {
    // 跳转到个人空间页面
    turnToPersonalZone() {
      this.$router.push({ path: '/PersonalZone' });
    },
    turnToPersonalInfo() {
      this.$router.push({ path: '/PersonalInformation' });
    },
  },
};

</script>
<style scoped>

.el-row{
  background-color:#000000;
  height:60px;
}
.el-col{
  height:100%;
}
.left-box{
  font-size: 24px;
  color:#fff;
  padding-left:20px;
  text-align: center;
  vertical-align: middle;
  line-height: 60px;
}
.right-box{
  text-align: center;
  vertical-align: middle;
  line-height: 60px;
  color:#fff;
}
</style>
