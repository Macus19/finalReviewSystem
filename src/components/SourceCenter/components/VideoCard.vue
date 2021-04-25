<template>
  <el-card @click="jumpTo" class="video-card-container" :body-style="{ padding: '0px' }">
    <div class="video-card-banner">
      <img :src="`http://test.ameow.xyz/en/public/${pic}`" class="video-card-image" />
      <i class="el-icon-video-play"></i>
    </div>
    <div>
      <span class="title">{{videoName}}</span>
      <p class="intro">{{intro}}</p>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},
  props: ['pic', 'videoName', 'intro', 'link'],
  methods: {
    jumpTo() {
      window.open(this.link);
    },
  },
};
</script>
<style scoped>
.video-card-container{
    height: 300px;
    margin: 20px;
    cursor: pointer;
}
.video-card-image{
    width:100%;
    height: 180px;
}
.title{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.video-card-banner {
    position: relative;
}
.el-icon-video-play{
    display: block;
    position: absolute;
    font-size: 100px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.intro{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
