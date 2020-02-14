<template>
  <container>
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
    <div class="post-comment-area">
      <div>评论区</div>
    </div>
  </container>
</template>

<script>
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
    };
  },

  components: {},

  methods: {},
};

</script>
<style scoped>
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
.post-comment-area :first-child{
  height:50px;
  border:1px solid #EDF8EE;
  background-color: #EDF8EE;
  font-size: 24px;
  color:#808080;
  line-height: 50px;
  padding:10px;
}
</style>
