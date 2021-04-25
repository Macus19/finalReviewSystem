<template>
  <el-card @click.native="turnToPageDetailPage"  :body-style="{ padding: '0px' }" class="page-card">
    <!-- 帖子的标题大图片 -->
    <img :src="currentInfo.imgSrc || defaultImgSrc" class="page-card-image">
    <!-- 介绍帖子的信息部分 -->
    <div class="card-introduction">
      <!-- 标题 -->
      <p class="page-card-title">{{currentInfo.title}}</p>
      <!-- 发布者的信息 -->
      <el-row type="flex" align="middle">
        <el-col :span="12" class="page-card-publisher-info">
          <img :src="currentInfo.avatar ||  defaultAvatar" class="page-card-publisher-avatar">
          <span class="page-card-publisher-name">{{currentInfo.author_nickname}}</span>
        </el-col>
        <el-col :span="12" class="page-card-views">
          {{currentInfo.view}}浏览
        </el-col>
      </el-row>
      <!-- 更多操作 -->
      <p class="page-card-more">
        更多
        <i class="el-icon-arrow-right"></i>
      </p>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    pageInfo: Object,
  },
  data() {
    return {
      // 默认显示图片
      defaultImgSrc: require('../../../assets/book.jpg'),
      // 默认头像
      defaultAvatar: require('../../../assets/avatar.jpg'),
    };
  },

  computed: {
    currentInfo() {
      return this.pageInfo;
    },
  },
  components: {
  },

  methods: {
    /**
     * 跳转至帖子详情页面
     */
    turnToPageDetailPage() {
      console.log(this.currentInfo.id);
      this.$router.push({
        path: `/PostDetail/${this.currentInfo.id}`,
      });
    },
  },
};

</script>
<style scoped>
.page-card{
  width:220px;
  height:380px;
}
.page-card-publisher-avatar{
  width:30px;
  height:30px;
  border-radius: 50%;
}
.page-card-image{
  height: 250px;
}
.page-card-publisher-info{
  line-height: 20px;
}
.page-card-publisher-name,.page-card-publisher-avatar{
  vertical-align: middle;
  line-height: 20px;
}
.page-card-title{
  margin-bottom:10px;
  color:#101010;
  font-weight: bold
}
.card-introduction{
  padding: 10px;
}
.page-card-publisher-info,.page-card-views{
  font-size: 13px;
}
.page-card-publisher-name{
  color:#528FFF;
}
.page-card-views{
  text-align: center
}
.page-card-more{
  font-size: 13px;
  text-align: right
}
</style>
