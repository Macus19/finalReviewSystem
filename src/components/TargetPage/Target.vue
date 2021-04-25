<template>
  <div class="target-container">
    <div class="contain">
     <el-row class="target-choose">
         <el-col :span="12">1.请设定你的目标：</el-col>
         <el-col :span="12">
             <el-input type="text" v-model="target"></el-input>
         </el-col>
     </el-row>
     <el-row class="target-choose">
         <el-col :span="12">2.请设定目标分数：</el-col>
         <el-col :span="12">
             <el-input type="text" v-model="score"></el-input>
         </el-col>
     </el-row>
     <div class="btn-list">
        <el-button>提交</el-button>
     </div>
     </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      target: '',
      score: '',
    };
  },

  components: {},

  methods: {
    submitTarget() {
      this.axios({
        url: '/user/setTarget',
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            target: this.target,
            target_score: this.score,
          },
        },
      }).then((res) => {
        if (res.data.code === 0) {
          this.$message({
            message: '设定成功！',
            type: 'success',
          });
          this.$router.push({
            path: '/',
          });
        }
      });
    },
  },
};

</script>
<style scoped>
.target-container{
  width: 100%;
  height: 100%;
  background-image: url("../../assets/cyperpunk.jpg");
  background-size: 100% 100%;
  overflow: hidden;
}
.target-choose{
    margin: 10px 100px;
}
.contain{
    width: 80%;
    box-sizing: border-box;
    height: 600px;
    margin: 50px auto;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 100px 0;
}
.btn-list{
    text-align: center;
}
</style>
