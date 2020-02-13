<template>
  <el-card :body-style="{ padding: '0px' }" class="page-card">
    <!-- 帖子的标题大图片 -->
    <img :src="imgSrc" class="page-card-image">
    <!-- 介绍帖子的信息部分 -->
    <div class="card-introduction">
      <!-- 标题 -->
      <p class="page-card-title">{{title}}</p>
      <!-- 发布者的信息 -->
      <el-row type="flex" align="middle">
        <el-col :span="12" class="page-card-publisher-info">
          <img :src="avatar" class="page-card-publisher-avatar">
          <span class="page-card-publisher-name">{{publisher}}</span>
        </el-col>
        <el-col :span="12">
          {{views}}浏览
        </el-col>
      </el-row>
      <!-- 更多操作 -->
      <p>
        更多
        <i class="el-icon-arrow-right"></i>
      </p>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      // 要显示的图片
      imgSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
      // 头像
      avatar: require('../../../assets/avatar.jpg'),
      // 帖子标题
      title: '这是一个帖子',
      // 发布者
      publisher: 'Marcus',
      // 浏览数
      views: 200,
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
};

</script>
<style scoped>
.page-card{
  width:220px;
  height:400px;
}
.page-card-publisher-avatar{
  width:30px;
  height:30px;
  border-radius: 50%;
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
</style>
