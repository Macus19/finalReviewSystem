<template>
  <div class="personal-zone-container">
      <!-- 头部，用户信息显示 -->
      <div class="zone-top-banner">
          <el-avatar type="circle" class="zone-banner-avatar" :size="135" :src="userAvatar">
          </el-avatar>
          <span class="zone-banner-username">{{username}}，{{greetings}}</span>
      </div>
      <el-row type="flex" justify="space-between" :gutter="10" class="personal-zone-middle-tab">
        <el-col :span="12" class="perzonal-zone-tabbar">
            <el-tabs>
                <el-tab-pane label="题型"></el-tab-pane>
                <el-tab-pane label="错题集"></el-tab-pane>
                <el-tab-pane label="评论"></el-tab-pane>
            </el-tabs>
        </el-col>
        <el-col :span="8">
            <el-input
            placeholder="搜索我做过的练习类型"
            suffix-icon="el-icon-search"
            >
            </el-input>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAvatar: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
      username: 'Marcus',
      greetings: '中午好',
    };
  },

  components: {},

  methods: {},
};

</script>
<style scoped>
.zone-top-banner{
    min-height:180px;
    background-color: #5FCDA6;
    padding:20px 80px;
    line-height: 150px;
}
.zone-banner-avatar{
    margin:0 20px;
    line-height: 135px;
    vertical-align: middle;
    border:4px solid #fff;
    vertical-align: middle
}
.zone-banner-username{
    font-size: 36px;
    font-weight: bold;
    color: #fff;
    vertical-align: middle
}
.personal-zone-middle-tab{
    padding: 20px 80px;
}
</style>
<style>
.perzonal-zone-tabbar /deep/ .el-tabs__item.is-active{
  color:#67C23A;
}
.perzonal-zone-tabbar /deep/ .el-tabs__active-bar{
  background-color: #67C23A;
  text-align: right
}
</style>
