<template>
  <div class="index-container">
    <div class="banner">
      <div class="banner-intro">
        <p>资源中心：课本知识点一网打尽</p>
        <p>巩固训练：多种题型全掌握</p>
        <p>随机练习：随机模拟，科学评分</p>
        <p>讨论天地：同伴互评，小组模式</p>
        <p>定制适合你的阅读方式</p>
        <p>科学反馈：你希望获得的多方面反馈</p>
        <p>针对不同特点，不同学习方案</p>
      </div>
    </div>
    <el-row type="flex" class="middle-content">
      <el-col :span="12" class="middle-content-left">
        <div class="intro-content-box" id="orange-box">构建自我学习能力</div>
        <div class="intro-content-box" id="red-box">科学反馈，自我修正</div>
        <div class="intro-content-box" id="blue-box">模拟练习，成绩分析</div>
        <div class="intro-content-box" id="purple-box">小组互助，同伴互评</div>
        <div class="intro-content-box" id="green-box">攻克单词，知识点</div>
      </el-col>
      <el-col :span="12" class="content-right">
        <div>
          <p class="content-title">系统化学习路径</p>
          <p class="content-subtitle">一步步完成，一步步进步,让学习有章有序！</p>
          <p class="content-more">
            <span>更多</span>
            <span><i class="el-icon-caret-right"></i></span>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="middle-canlendar">
      <el-col :span="12" class="content-right">
        <div>
          <p class="content-title">今天你打卡了吗？</p>
          <p class="content-subtitle">每天坚持打卡，不断升级</p>
          <p class="content-subtitle">和朋友们一起来分享吧！</p>
        </div>
      </el-col>
      <el-col :span="12">
        <el-calendar v-model="value"></el-calendar>
      </el-col>
    </el-row>
    <el-row class="middle-days">
      <el-col class="content-right" :span="12">
        <div class="days-container">
          <p class="days-title">距离专四考试还有</p>
          <p class="days-day">{{date}}天</p>
        </div>
      </el-col>
      <el-col class="content-right" :span="12">
        <div>
          <p class="content-title">倒计时</p>
          <p class="content-subtitle">用倒计时鞭策自己！</p>
          <p class="content-subtitle">制定每天的计划！</p>
        </div>
      </el-col>
    </el-row>
    <div class="middle-command">
      <div class="book-command">
        <p>课外阅读推荐</p>
        <el-row>
          <el-col :span="6" v-for="(item, index) in bookList" :key="index">
            <book-card
              :pic="item.pic"
              :bookName="item.bookName"
              :intro="item.intro"
            ></book-card>
         </el-col>
        </el-row>
      </div>
      <div class="source-command">
        <p>学习资源推荐</p>
        <el-row>
          <el-col :span="6" v-for="(item, index) in bookList" :key="index">
            <book-card
              :pic="item.pic"
              :bookName="item.bookName"
              :intro="item.intro"
            ></book-card>
         </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import BookCard from '../SourceCenter/components/BookCard';

export default {
  data() {
    return {
      date: 20,
      bookList: [
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
      ],
    };
  },

  components: {
    BookCard,
  },

  methods: {},
};
</script>
<style scoped>
.banner{
  padding: 50px 100px;
  overflow: hidden;
  background-image: url("../../assets/cyperpunk.jpg");
  background-size: 100%;
}
.banner-intro{
  float: right;
  width: 300px;
  padding: 10px;
  background-color: rgba(91, 91, 91, 100);
  color: rgba(255, 255, 255, 100);
  opacity: 0.75;
  border: 1px solid rgba(91, 91, 91, 100);
}
.banner-intro p:hover{
  cursor: pointer;
  color: rgba(63, 217, 135, 100);
}
.banner-intro p:hover::before{
  content: '◂'
}
.intro-content-box{
  width:110px;
  height:60px;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
}
.middle-content-left{
  position: relative;
}
.middle-content{
  height: 480px;
  margin: 20px;
}
#orange-box{
  position: absolute;
  left: 80%;
  background-color: orange;
}
#red-box{
  position: absolute;
  left: 70%;
  top: 80px;
  background-color: red;
}
#blue-box{
  position: absolute;
  left: 60%;
  top: 160px;
  background-color: blue;
}
#purple-box{
  position: absolute;
  left: 50%;
  top: 240px;
  background-color: purple;
}
#green-box{
  position: absolute;
  left: 40%;
  top: 320px;
  background-color:green;
}
.content-title{
  text-align: center;
  font-weight: bold;
  font-size: 36px;
}
.content-subtitle{
  text-align: center;
  color: #8F8E94;
}
.content-more{
  color: #8F8E94;
  text-align: center;
}
.content-right{
  display: flex;
  justify-content: center;
  align-items: center;
}
.middle-canlendar{
  padding: 10px 100px ;
}
.days-container{
  width:300px;
  min-height: 200px;
  padding: 10px;
  background-color: #A8E6AF;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
}
.days-title {
  text-align: center;
}
.days-day{
  text-align: center;
  font-weight: bold;
  font-size: 40px;
}
.middle-days{
  margin: 25px 0;
}
.book-command,.source-command{
  width: 70%;
  margin: 0 auto;
}
</style>
