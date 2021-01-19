<template>
  <el-row type="flex" class="random-exercise-container">
     <el-col :span="4">
       <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
       >
       <el-submenu>
         <template slot="title">阅读属性测试题</template>
         <el-menu-item>快速阅读</el-menu-item>
         <el-menu-item>精读练习</el-menu-item>
       </el-submenu>
       <el-submenu>
         <template slot="title">综合测试题</template>
       </el-submenu>
       <el-submenu>
         <template slot="title">自陈式试题</template>
       </el-submenu>
       </el-menu>
     </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  components: {},

  methods: {},
};

</script>
<style scoped>
.random-exercise-container{
  height: 100%;
}
</style>

