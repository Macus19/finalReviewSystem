<template>
  <div class="comment-container">
      <el-row type="flex">
          <el-col :span="4" class="commenter-avatar">
            <el-avatar shape="square" :size="80" :src="comment.user_Avatar || defaultAvatar"></el-avatar>
          </el-col>
          <el-col :span="20">
            <p class="commenter-name">{{comment.user_nickname}}</p>
            <p class="comment-content">{{comment.content}}</p>
            <div class="comment-extra-info">
                <span class="comment-time">{{comment.time}}</span>
            </div>
          </el-col>
      </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultAvatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    };
  },
  components: {},
  methods: {},
  props: {
    comment: Object,
  },
};

</script>
<style scoped>
.comment-container{
    padding:5px 0 15px 0;
}
/* .commenter-avatar{
    text-align: center;
} */
.commenter-name,.comment-content{
    font-size:14px;
    color:#333333;
    margin: 10px 0;
}
.commenter-name{
    font-weight: bold;
}
.comment-time{
    font-size: 12px;
    color:#838383;
}
</style>
