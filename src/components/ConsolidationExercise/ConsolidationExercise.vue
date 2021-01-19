<template>
  <div class="consolidation-exercise-container">
    <div class="container-top">
      <i class="el-icon-caret-right"></i>
      <span class="top-title">不同题型，逐个攻破！</span>
    </div>
    <el-row type="flex" class="container-main">
      <!-- 左侧菜单栏 -->
      <el-col :span="4">
        <p class="container-main-menu-title">
          <i class="el-icon-s-order"></i>
          单元选择
        </p>
        <el-menu
          background-color="#0B8C56"
          text-color="#fff"
          active-text-color="#66EE8E"
        >
          <el-menu-item index="1">U1</el-menu-item>
          <el-menu-item index="2">U2</el-menu-item>
          <el-menu-item index="3">U3</el-menu-item>
          <el-menu-item index="4">U4</el-menu-item>
          <el-menu-item index="5">U5</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-tabs stretch v-model="activeTab" type="card">
          <el-tab-pane label="原文挖空">原文挖空</el-tab-pane>
          <el-tab-pane label="单项选择">单项选择</el-tab-pane>
          <el-tab-pane label="选词填空">选词填空</el-tab-pane>
          <el-tab-pane label="中英翻译">中英翻译</el-tab-pane>
          <el-tab-pane label="阅读理解">阅读理解</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>
<style scoped>
.container-top {
  padding: 0 50px;
  height: 80px;
  line-height: 80px;
  vertical-align: middle;
}
.top-title {
  height: 80px;
  font-size: 20px;
  line-height: 80px;
  text-align: center;
  position: relative;
}
.el-icon-caret-right{
  display:inline-block;
  height: 80px;
  font-size: 40px;
  line-height: 75px;
  vertical-align: middle;
}
.top-title::after {
  position: absolute;
  width: 800px;
  height: 1px;
  background: #000;
  content: "";
  top: 13px;
}
.title::after {
  left: 0;
}
.container-main-menu-title{
  padding: 20px 10px;
  margin: 0;
  font-size: 20px;
  color: #fff;
  text-align: center;
  background-color: #0B8C56;
}
.container-main /deep/ .el-menu {
  border-right: 0;
  height: 100%;
}
</style>
