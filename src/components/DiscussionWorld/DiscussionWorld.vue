<template>
  <div class="discussion-world-container">
    <!-- 最上面的搜索栏 -->
    <el-row type="flex" justify="space-between" align="middle" :gutter="20">
      <!-- 搜索框 -->
      <el-col :span="18" class="top-search-bar">
        <el-input
          placeholder="搜索题目关键字/课堂单元"
          prefix-icon="el-icon-search"
          v-model="searchKeyWord"
          class="searchBox"
       >
        </el-input>
      </el-col>
      <!-- 发布操作 -->
      <el-col :span="5" class="choose-bar">
        <div class="choose-bar-container">
          <div class="choose-bar-item">
            <i class="el-icon-picture-outline"></i>
            <p class="choose-bar-text">发图文</p>
          </div>
          <div class="choose-bar-item">
            <i class="el-icon-edit-outline"></i>
            <p class="choose-bar-text">发帖子</p>
          </div>
          <div class="choose-bar-item">
            <i class="el-icon-video-camera-solid"></i>
            <p class="choose-bar-text">小视频</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 中间的讨论区广告 -->
    <el-row type="flex" justify="space-around" align="middle" :gutter="20">
      <!-- icon加文字 -->
      <el-col class="talk-area-banner" :span="10">
        <i class="el-icon-headset"></i>
        <span class="talk-area-banner-text">讨论区</span>
      </el-col>
      <!-- 点击加入按钮 -->
      <el-col class="talk-area-button" :span="10">
        <el-button type="primary">+ 加入</el-button>
      </el-col>
    </el-row>
    <!-- 老师介绍的轮播图 -->
    <el-row type="flex" justify="space-around" align="middle" class="carousel">
      <el-col :span="4" class="introduction-text">
        <!-- 介绍文案 -->
        <span>赶快加入学习</span>
      </el-col>
      <el-col :span="16" class="introduction">
        <!-- 轮播图 -->
        <el-carousel height="80px">
        <el-carousel-item v-for="(list,index) in imgList" :key="index">
          <div class="introduction-carousal-img-container">
              <img :src="item.src"
              class="introduction-carousal-img-item"
              v-for="(item,index) in list" :key="index"
              >
          </div>
        </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <!-- 帖子展示列表 -->
    <div class="card-container">
      <!-- 循环渲染,四个一行 -->
      <div v-for="(item,index) in pageInfoList" :key="index"  class="card-item">
        <PageCard :pageInfo="item" @click.native="turnToPageDetailPage">
        </PageCard>
      </div>
    </div>
  </div>
</template>
<script>
import PageCard from './Components/PageCard';

export default {
  data() {
    return {
      searchKeyWold: '', // 搜索关键字
      // 图片列表
      imgList: [
        [
          {
            id: 0,
            src: require('../../assets/avatar.jpg'),
          },
          {
            id: 1,
            src: require('../../assets/avatar.jpg'),
          },
          {
            id: 2,
            src: require('../../assets/avatar.jpg'),
          },
          {
            id: 3,
            src: require('../../assets/avatar.jpg'),
          },
          {
            id: 4,
            src: require('../../assets/avatar.jpg'),
          },
          {
            id: 5,
            src: require('../../assets/avatar.jpg'),
          },
        ],
        [
          {
            id: 0,
            src: require('../../assets/logo.png'),
          },
          {
            id: 1,
            src: require('../../assets/logo.png'),
          },
          {
            id: 2,
            src: require('../../assets/logo.png'),
          },
          {
            id: 3,
            src: require('../../assets/logo.png'),
          },
          {
            id: 4,
            src: require('../../assets/logo.png'),
          },
          {
            id: 5,
            src: require('../../assets/logo.png'),
          },
        ],
      ],
      // 传到卡片里的帖子信息数组
      pageInfoList: [
        {
          // 要显示的图片
          imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          // 头像
          avatar: require('../../assets/avatar.jpg'),
          // 帖子标题
          title: '这是一个帖子',
          // 发布者
          publisher: 'Marcus',
          // 浏览数
          views: 200,
        },
        {
          // 要显示的图片
          imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          // 头像
          avatar: require('../../assets/avatar.jpg'),
          // 帖子标题
          title: '这是一个帖子',
          // 发布者
          publisher: 'Marcus',
          // 浏览数
          views: 200,
        },
        {
          // 要显示的图片
          imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          // 头像
          avatar: require('../../assets/avatar.jpg'),
          // 帖子标题
          title: '这是一个帖子',
          // 发布者
          publisher: 'Marcus',
          // 浏览数
          views: 200,
        },
        {
          // 要显示的图片
          imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          // 头像
          avatar: require('../../assets/avatar.jpg'),
          // 帖子标题
          title: '这是一个帖子',
          // 发布者
          publisher: 'Marcus',
          // 浏览数
          views: 200,
        },
        {
          // 要显示的图片
          imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          // 头像
          avatar: require('../../assets/avatar.jpg'),
          // 帖子标题
          title: '这是一个帖子',
          // 发布者
          publisher: 'Marcus',
          // 浏览数
          views: 200,
        },
        {
          // 要显示的图片
          imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          // 头像
          avatar: require('../../assets/avatar.jpg'),
          // 帖子标题
          title: '这是一个帖子',
          // 发布者
          publisher: 'Marcus',
          // 浏览数
          views: 200,
        },
        {
          // 要显示的图片
          imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          // 头像
          avatar: require('../../assets/avatar.jpg'),
          // 帖子标题
          title: '这是一个帖子',
          // 发布者
          publisher: 'Marcus',
          // 浏览数
          views: 200,
        },
      ],
    };
  },
  components: {
    PageCard,
  },
  methods: {
    turnToPageDetailPage() {
      this.$router.push({ path: '/PostDetail' });
    },
  },
};
</script>
<style scoped>
.discussion-world-container{
  width:75%;
  margin:0 auto;
}
.choose-bar-container{
  display: flex;
  justify-content: space-around;
  width:200px;
  left: 1128px;
  box-shadow: 0px 0px 12px 0px rgba(170, 170, 170, 0.5);
  border-radius:28px;
  margin: 0 auto;
}
.choose-bar-item{
  text-align: center;
  vertical-align: middle;
  line-height: 20px;
  padding: 10px 5px;
  font-size: 13px;
  color:#528FFF;
}
.choose-bar-text{
  margin:5px 0 0 0;
  color:#000;
}
.talk-area-banner{
  text-align: left;
  padding: 20px;
}
.el-icon-headset{
  font-size:100px;
  color:#528FFF;
  vertical-align: middle;
  line-height:100px;
}
.talk-area-banner-text{
  font-size: 40px;
  vertical-align: middle;
  line-height:100px;
}
.talk-area-button{
  text-align: right;
}
.introduction-text{
  font-size: 20px;
  text-align: left;
  color:#528FFF;
}
.introduction-carousal-img-container{
  display: flex;
  justify-content: space-between
}
.introduction-carousal{
  height:80px;
}
.introduction-carousal-img-item{
  width:100px;
  height:80px;
  display: inline-block;
  background-color: #528FFF;
}
.introduction-carousal-img-container{
  overflow: hidden;
}
.el-carousel{
  overflow: hidden;
}
.carousel{
  padding: 20px 0;
}
.card-container{
  display: flex;
  flex-wrap: wrap;
}
.card-item{
  width:25%;
  margin:20px 0;
}
.card-item :hover{
  cursor: pointer;
}
.card-item > div{
  margin: 0 auto;
}
</style>
