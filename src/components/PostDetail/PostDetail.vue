<template>
  <div class="post-detail-container">
    <!-- 帖子标题 -->
    <p class="post-top-title">{{articles.title}}</p>
    <!-- 帖子楼主的信息 -->
    <el-row type="flex" align="middle">
      <el-col :span="12" class="post-publisher">
        <!-- 头像和名字 -->
        <img :src="publishers.publisherAvatar || defaultAvatar" class="post-publisher-avatar">
        <span class="post-publisher-name">{{publishers.publisherName}}</span>
        <el-tag type="success">楼</el-tag>
      </el-col>
      <el-col :span="12" class="post-publisher-subscribe">
        <!-- 按钮 -->
        <el-button type="success">关注</el-button>
      </el-col>
    </el-row>
    <!-- 帖子的具体内容 -->
    <div class="post-article" v-html="articles.content"></div>
    <!-- 附加消息 -->
    <div class="post-extra-info">
      <p>本文由楼主发布在XX平台，未经楼主许可，禁止转载。</p>
      <el-row type="flex" align="middle">
        <el-col :span="12" class="post-extra-publish-date">
          {{articles.publishDate}}
        </el-col>
        <el-col :span="12" class="post-extra-operate">
          <el-badge :value="commentNumber">
            <i class="el-icon-chat-dot-round"></i>
          </el-badge>
          <el-badge :value="articles.likeNumber">
            <LikeIcon class="like-icon" :postid="id"></LikeIcon>
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
            <el-button type="primary" @click="commentPost">发送</el-button>
          </el-col>
          <!-- 点赞和喜欢 -->
          <el-col :span="10" class="post-comment-operate">
            <i class="el-icon-chat-dot-round"></i>
            <LikeIcon @post="getPostDetail" class="like-icon" :postid="id"></LikeIcon>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from './Components/Comment';
import LikeIcon from './Components/LikeIcon';

export default {
  data() {
    return {
      id: this.$route.params.id,
      currentCommentPage: 1,
      myComment: '',
      defaultAvatar: require('../../assets/avatar.jpg'),
      publishers: {
        publisherAvatar: '', // 楼主的头像
        publisherName: 'Marcus', // 楼主的名字
      },
      articles: {
        content: '这里是内容', // 帖子内容
        publishDate: '2020-2-6', // 帖子发布日期
        commentNumber: '12', // 评论数
        likeNumber: '13', // 点赞数
        title: '这道题很容易错', // 帖子标题
      },
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
      likeStatus: 0,
    };
  },

  components: {
    Comment,
    LikeIcon,
  },

  computed: {
    // 根据发布者的名字动态更改评论框的paceholder
    commentPlaceholder() {
      return `@${this.publishers.publisherName}`;
    },
  },

  created() {
    this.getPostDetail();
    this.getPostComment();
  },

  methods: {
    /**
     * 获取帖子详情
     */
    getPostDetail() {
      this.axios({
        url: '/api/post/getPost',
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            post: this.id,
          },
        },
      }).then((res) => {
        const data = res.data.data;
        this.publishers = {
          author: data.author,
          publisherName: data.author_nickname,
          publisherAvatar: data.author_avatar,
        };
        this.articles = {
          content: data.content, // 帖子内容
          publishDate: data.time, // 帖子发布日期
          likeNumber: data.like, // 点赞数
          title: data.title, // 帖子标题
        };
      });
    },
    /**
     * 获取当前贴子的评论
     */
    getPostComment() {
      this.axios({
        url: '/api/post/getCommentList',
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            post: this.id,
            per_page: 10,
            page: this.currentCommentPage,
          },
        },
      }).then((res) => {
        this.commentList = res.data.data.data;
      });
    },

    /**
     * 发表评论
     */
    commentPost() {
      if (this.myComment.length === 0) {
        this.$message({
          message: '评论不能为空！',
          type: 'info',
        });
        return;
      }
      this.axios({
        url: '/api/post/commentPost',
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            post: this.id,
            content: this.myComment,
          },
        },
      }).then((res) => {
        if (res.data.code === 0) {
          this.$message({
            message: '评论发送成功！',
            type: 'success',
          });
          this.getPostComment();
        } else {
          this.$message({
            message: '评论失败！',
            type: 'info',
          });
        }
      });
    },
  },
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
.like-icon{
  width: 40px;
  height: 40px;
  display: inline-block;
  vertical-align: top;
}
</style>
