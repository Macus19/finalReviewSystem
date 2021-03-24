<template>
  <div class="personal-zone-container">
    <!-- <div id="radar"></div> -->
    <!-- 头部，用户信息显示 -->
    <div class="zone-top-banner">
      <el-avatar
        type="circle"
        class="zone-banner-avatar"
        :size="135"
        :src="userAvatar"
      >
      </el-avatar>
      <span class="zone-banner-username">{{ username }}，{{ greetings }}</span>
    </div>
    <!-- tabbar和搜索框 -->
    <el-row
      type="flex"
      justify="space-between"
      :gutter="10"
      class="personal-zone-middle-tab"
    >
      <el-col :span="24" class="perzonal-zone-tabbar">
        <el-tabs v-model="activeName">
          <el-tab-pane label="错题集" name="first">
            <div class="question-card-list">
              <div class="question-card">
                <p>基阅Unit 1</p>
                <p>题目类型：选词填空</p>
                <p>相关知识点：词汇等</p>
                <p>详情 ></p>
              </div>
              <div class="question-card">
                <p>基阅Unit 1</p>
                <p>题目类型：单项选择</p>
                <p>相关知识点：表达法</p>
                <p>详情 ></p>
              </div>
              <div class="question-card">
                <p>2010年 四级真题卷一</p>
                <p>题目类型：选词填空</p>
                <p>相关知识点：词汇等</p>
                <p>详情 ></p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="反馈信息" name="second">
            <el-row>
              <el-col :span="16">
                <div id="radar"></div>
              </el-col>
              <el-col :span="8">
                <p class="radar-title">详细情况：</p>
                <div class="radar-advice">
                  <p>1.时间把握能力较好，可以很好地掌握不同题型的</p>
                  <p>2.语法知识掌握不足，其中包括宾语的用法......等</p>
                  <p>词汇量不足，再关于“”海洋“”“生态环境”等类型的文章中词汇选择的题型错误较多，需要扩充相关词汇的学习</p>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="笔记">暂无</el-tab-pane>
        </el-tabs>
      </el-col>
      <!-- <el-col :span="8">
            <el-input
            placeholder="搜索我做过的练习类型"
            suffix-icon="el-icon-search"
            >
            </el-input>
        </el-col> -->
    </el-row>
    <!-- 题目集选项卡 -->
    <!-- <el-row
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
      </el-row> -->
    <!-- 题目集卡片展示 -->
  </div>
</template>

<script>
import * as echarts from 'echarts';
import QuestionSetCard from './Components/QuantioSetCard';

export default {
  data() {
    return {
      activeName: 'second',
      orgOptions: {},
      userAvatar:
        'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png', // 用户头像
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

  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('radar'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: '个人情况——各题型准确率雷达图',
      },
      tooltip: {},
      legend: {
        data: ['能力值'],
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5],
          },
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(250,250,250,0.2)'],
          },
        },
        indicator: [
          { name: '单项选择', max: 100 },
          { name: '中英翻译', max: 100 },
          { name: '时间把握', max: 100 },
          { name: '阅读理解', max: 100 },
          { name: '选词填空', max: 100 },
        ],
      },
      series: [{
        // name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [70, 60, 80, 70, 90],
            name: '能力值',
          },
          // {
          //   value: [5000, 14000, 28000, 31000, 42000, 21000],
          //   name: '实际开销（Actual Spending）',
          // },
        ],
      }],
    });
  },

  methods: {},
};
</script>
<style scoped>
.zone-top-banner {
  min-height: 180px;
  background-color: #5fcda6;
  padding: 20px 80px;
  line-height: 150px;
}
.zone-banner-avatar {
  margin: 0 20px;
  line-height: 135px;
  vertical-align: middle;
  border: 4px solid #fff;
  vertical-align: middle;
}
.zone-banner-username {
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  vertical-align: middle;
}
.personal-zone-middle-tab {
  padding: 20px 80px;
}
.personal-zone-questinonset-tab-bar {
  text-align: right;
}
.personal-zone-question-set-container {
  width: 65%;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
}
.personal-zone-question-set-item {
  width: 25%;
  margin-top: 30px;
}
</style>
<style>
.perzonal-zone-tabbar /deep/ .el-tabs__item.is-active {
  color: #67c23a;
}
.perzonal-zone-tabbar /deep/ .el-tabs__active-bar {
  background-color: #67c23a;
  text-align: right;
}
.personal-zone-questinonset-tab /deep/ .el-tabs__nav-wrap::after {
  display: none;
}
.personal-zone-questinonset-tab /deep/ .el-tabs__item.is-active {
  color: #67c23a;
}
.personal-zone-questinonset-tab /deep/ .el-tabs__active-bar {
  background-color: #67c23a;
  text-align: right;
}
.question-card {
  width: 150px;
  padding: 20px;
  border: 1px solid #808080;
  height: 150px;
  font-size: 14px;
  border-radius: 20px;
  margin: 20px 30px;
}
.question-card p {
  margin: 10px 0;
}
.question-card p:first-child {
  font-size: 20px;
}
.question-card p:last-child {
  text-align: right;
  color: #233333;
}
.question-card-list {
  display: flex;
}
#radar {
  height: 700px;
}
.radar-title{
  font-size: 24px;
  font-weight: bold;
}
</style>
