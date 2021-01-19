<template>
  <el-row type="flex" class="video-content-container">
    <!-- 左侧菜单栏 -->
    <el-col :span="4">
      <el-menu
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="2">
          <template slot="title">视频资源</template>
          <el-submenu>
            <template slot="title">BBC视频</template>
            <el-submenu>
              <template slot="title">英语电影</template>
            </el-submenu>
            <el-submenu>
              <template slot="title">英语原著英文阅读</template>
            </el-submenu>
            <el-submenu>
              <template slot="title">英语新闻视频</template>
            </el-submenu>
          </el-submenu>
          <el-submenu>
            <template slot="title">英语新闻视频</template>
          </el-submenu>
          <el-submenu>
            <template slot="title">英语新闻视频</template>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <el-col :span="6" v-for="(item, index) in videoList" :key="index">
        <video-card
          :pic="item.pic"
          :videoName="item.videoName"
          :intro="item.intro"
        ></video-card>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import VideoCard from './VideoCard';

export default {
  data() {
    return {
      videoList: [
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          videoName: '视频名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          videoName: '视频名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          videoName: '视频名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          videoName: '视频名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          videoName: '视频名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          videoName: '视频名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          videoName: '视频名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          videoName: '视频名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          videoName: '视频名称',
          intro: '介绍',
        },
      ],
    };
  },

  components: {
    VideoCard,
  },

  methods: {},
};

</script>
<style scoped>
.video-content-container {
  height: 100%;
}
.video-content-container /deep/ .el-menu {
  height: 100%;
}
</style>
