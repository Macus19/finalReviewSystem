<template>
  <div class="personal-zone-container">
      <!-- 头部，用户信息显示 -->
      <div class="zone-top-banner">
          <el-avatar type="circle" class="zone-banner-avatar" :size="135" :src="userAvatar">
          </el-avatar>
          <span class="zone-banner-username">{{username}}，{{greetings}}</span>
      </div>
      <!-- tabbar和搜索框 -->
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
      <!-- 题目集选项卡 -->
      <el-row
      type="flex"
      justify="space-around"
      align="middle"
      class="personal-zone-questinonset-tab"
      >
        <el-col :span="12" class="personal-zone-questinonset-tab-sort">
          <span>按完成时间排序</span>
        </el-col>
      <el-col :span="3" class="personal-zone-questinonset-tab-bar">
        <el-tabs>
          <el-tab-pane label="全部"></el-tab-pane>
          <el-tab-pane label="标记"></el-tab-pane>
          <el-tab-pane label="未标记"></el-tab-pane>
        </el-tabs>
      </el-col>
      </el-row>
      <!-- 题目集卡片展示 -->
      <div class="personal-zone-question-set-container">
        <div v-for="(item,index) in questionSetInfoList" :key="index"
        class="personal-zone-question-set-item">
          <QuestionSetCard :questionSet="item"></QuestionSetCard>
        </div>
      </div>
  </div>
</template>

<script>
import QuestionSetCard from './Components/QuantioSetCard';

export default {
  data() {
    return {
      userAvatar: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png', // 用户头像
      username: 'Marcus', // 用户名
      greetings: '中午好', // 问候语
      // 题目集信息列表
      questionSetInfoList: [
        {
          unit: 'Unit1 A1',
          questionType: '填空题',
          isLearned: true, // 是否已经完成学习
          totalQuestionNum: 8, // 总的错题数
          haveConnrect: 2, // 已经修改的错题数
        },
        {
          unit: 'Unit1 A1',
          questionType: '填空题',
          isLearned: true, // 是否已经完成学习
          totalQuestionNum: 8, // 总的错题数
          haveConnrect: 2, // 已经修改的错题数
        },
        {
          unit: 'Unit1 A1',
          questionType: '填空题',
          isLearned: true, // 是否已经完成学习
          totalQuestionNum: 8, // 总的错题数
          haveConnrect: 2, // 已经修改的错题数
        },
        {
          unit: 'Unit1 A1',
          questionType: '填空题',
          isLearned: true, // 是否已经完成学习
          totalQuestionNum: 8, // 总的错题数
          haveConnrect: 2, // 已经修改的错题数
        },
        {
          unit: 'Unit1 A1',
          questionType: '填空题',
          isLearned: true, // 是否已经完成学习
          totalQuestionNum: 8, // 总的错题数
          haveConnrect: 2, // 已经修改的错题数
        },
        {
          unit: 'Unit1 A1',
          questionType: '填空题',
          isLearned: true, // 是否已经完成学习
          totalQuestionNum: 8, // 总的错题数
          haveConnrect: 2, // 已经修改的错题数
        },
      ],
    };
  },

  components: {
    QuestionSetCard,
  },

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
.personal-zone-questinonset-tab-bar{
  text-align: right;
}
.personal-zone-question-set-container{
  width:65%;
  margin:40px auto;
  display: flex;
  flex-wrap: wrap
}
.personal-zone-question-set-item{
  width:25%;
  margin-top:30px;
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
.personal-zone-questinonset-tab /deep/ .el-tabs__nav-wrap::after{
  display: none
}
.personal-zone-questinonset-tab /deep/ .el-tabs__item.is-active{
  color:#67C23A;
}
.personal-zone-questinonset-tab /deep/ .el-tabs__active-bar{
  background-color: #67C23A;
  text-align: right
}
</style>
