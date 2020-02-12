<template>
<el-row type="flex" align="middle" :gutter="10">
  <el-col :span="4" class="left-box">
    期末复习系统
  </el-col>
  <el-col :span="16">
    <el-menu :default-active="active-index"
      text-color="#fff"
      mode="horizontal"
      active-text-color="#409EFF"
      background-color="#000000"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">资源中心</el-menu-item>
      <el-menu-item index="3">巩固练习</el-menu-item>
      <el-menu-item index="4">随机练习</el-menu-item>
      <el-menu-item index="5">讨论天地</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="4" class="right-box">
    <el-row type="flex">
      <el-col :span="10">
        我的学习
      </el-col>
      <el-col :span="3">
        <i class="el-icon-setting"></i>|
      </el-col>
      <el-col :span="10">
        {{username}}
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
  computed: {},
  mounted: {},
  methods: {},
};

</script>
<style scoped>
.el-row{
  background-color:#000000;
  height:100%;
}
.el-col{
  height:100%;
}
.el-menu{
  border-bottom:1px solid #000000;
}
.left-box{
  font-size: 24px;
  color:#fff;
  padding-left:20px;
  text-align: center;
}
.right-box{
  color:#fff;
}
</style>
