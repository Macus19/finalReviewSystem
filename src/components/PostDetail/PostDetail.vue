<template>
  <div class="post-detail-container">
    <!-- 帖子标题 -->
    <p class="post-top-title">{{title}}</p>
    <!-- 帖子楼主的信息 -->
    <el-row type="flex" align="middle">
      <el-col :span="12" class="post-publisher">
        <!-- 头像和名字 -->
        <img :src="publisherAvatar" class="post-publisher-avatar">
        <span class="post-publisher-name">{{publisherName}}</span>
        <el-tag type="success">楼</el-tag>
      </el-col>
      <el-col :span="12" class="post-publisher-subscribe">
        <!-- 按钮 -->
        <el-button type="success">关注</el-button>
      </el-col>
    </el-row>
    <!-- 帖子的具体内容 -->
    <div class="post-article">{{article}}</div>
    <!-- 附加消息 -->
    <div class="post-extra-info">
      <p>本文由楼主发布在XX平台，未经楼主许可，禁止转载。</p>
      <el-row type="flex" align="middle">
        <el-col :span="12" class="post-extra-publish-date">
          {{publishDate}}
        </el-col>
        <el-col :span="12" class="post-extra-operate">
          <el-badge :value="commentNumber">
            <i class="el-icon-chat-dot-round"></i>
          </el-badge>
          <el-badge :value="likeNumber">
            <i class="el-icon-star-off"></i>
          </el-badge>
        </el-col>
      </el-row>
    </div>
    <!-- 评论区 -->
    <div class="post-comment-area">
      <div class="post-comment-title">评论区</div>
      <!-- 切换的选项卡 -->
      <el-tabs v-model="activeName">
        <el-tab-pane label="全部" name="all"></el-tab-pane>
        <el-tab-pane label="精华" name="essence"></el-tab-pane>
        <el-tab-pane label="最新" name="latest"></el-tab-pane>
      </el-tabs>
      <!-- 评论列表 -->
      <div class="post-comment-list">
        <div v-for="(item,index) in commentList" :key="index" >
          <Comment :comment="item"></Comment>
        </div>
      </div>
      <!-- 发布评论区 -->
      <div class="post-edit-commit">
        <el-row type="flex" :gutter="10">
          <!-- 评论框 -->
          <el-col :span="12">
            <el-input
              :placeholder = "commentPlaceholder"
              v-model="myComment"
            >
            </el-input>
          </el-col>
          <!-- 发送按钮 -->
          <el-col :span="2">
            <el-button type="primary">发送</el-button>
          </el-col>
          <!-- 点赞和喜欢 -->
          <el-col :span="10" class="post-comment-operate">
            <i class="el-icon-chat-dot-round"></i>
            <i class="el-icon-star-off"></i>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from './Components/Comment';

export default {
  data() {
    return {
      title: '这道题很容易错', // 帖子标题
      publisherAvatar: require('../../assets/avatar.jpg'), // 楼主的头像
      publisherName: 'Marcus', // 楼主的名字
      article: '这里是内容', // 帖子内容
      publishDate: '2020-2-6', // 帖子发布日期
      commentNumber: '12', // 评论数
      likeNumber: '13', // 点赞数
      activeName: 'all', // tabbar中当前激活的选项
      // 评论内容列表
      commentList: [
        {
          commenterAvatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', // 评论者的头像
          commenterName: 'Marcus', // 评论者的用户名
          commentContent: '123', // 评论的具体内容
          commentTime: '2020-2-14 21:17:00', // 评论的时间
        },
        {
          commenterAvatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', // 评论者的头像
          commenterName: 'Marcus', // 评论者的用户名
          commentContent: '123', // 评论的具体内容
          commentTime: '2020-2-14 21:17:00', // 评论的时间
        },
        {
          commenterAvatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', // 评论者的头像
          commenterName: 'Marcus', // 评论者的用户名
          commentContent: '123', // 评论的具体内容
          commentTime: '2020-2-14 21:17:00', // 评论的时间
        },
        {
          commenterAvatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', // 评论者的头像
          commenterName: 'Marcus', // 评论者的用户名
          commentContent: '123', // 评论的具体内容
          commentTime: '2020-2-14 21:17:00', // 评论的时间
        },
      ],
    };
  },

  components: {
    Comment,
  },

  computed: {
    // 根据发布者的名字动态更改评论框的paceholder
    commentPlaceholder() {
      return `@${this.publisherName}`;
    },
  },

  methods: {},
};

</script>
<style scoped>
.post-detail-container{
  width:75%;
  margin:0 auto;
}
.post-top-title{
  font-size: 30px;
  font-weight: bold;
}
.post-publisher-avatar{
  width:80px;
  height:80px;
  border-radius: 50%;
  vertical-align: middle
}
.post-publisher{
  line-height: 100px;
}
.post-publisher-name{
  font-size:32px;
  vertical-align: middle
}
.post-publisher-subscribe{
  text-align: right
}
.post-article{
  width:100%;
  min-height: 200px;
  margin: 40px 0;
}
.post-extra-info >p,.post-extra-publish-date{
  font-size: 14px;
  color:#808080;
}
.post-extra-operate{
  font-size: 30px;
  text-align: right;
  margin-right:25px;
}
.post-comment-title{
  height:50px;
  border:1px solid #EDF8EE;
  background-color: #EDF8EE;
  font-size: 24px;
  color:#808080;
  line-height: 50px;
  padding:10px;
}
.post-edit-commit{
  padding:20px 0;
}
.post-comment-operate{
  font-size: 30px;
  text-align: right;
}
</style>
<style>
.post-comment-area /deep/ .el-tabs__item.is-active{
  color:#67C23A;
}
.post-comment-area /deep/ .el-tabs__active-bar{
  background-color: #67C23A !important;
  text-align: right
}
</style>
