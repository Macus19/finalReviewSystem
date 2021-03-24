<template>
  <el-card @click="jumpTo" class="video-card-container" :body-style="{ padding: '0px' }">
    <div class="video-card-banner">
      <img :src="pic" class="video-card-image" />
      <i class="el-icon-video-play"></i>
    </div>
    <div>
      <span>{{videoName}}</span>
      <p>{{intro}}</p>
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
    margin: 20px;
    cursor: pointer;
}
.video-card-image{
    width:100%
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
</style>
