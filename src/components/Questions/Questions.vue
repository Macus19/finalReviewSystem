<template>
  <div class="question-container">
    <div class="form">
      <p class="question-title">关于英语阅读自主学习的问卷调查</p>
      <p class="question-tip">
        说明：本调查的目的在于了解您目前英语阅读自主学习的情况，将有助于后面系统为您定制更适合的学习方案，希望能认真作答，感谢！
      </p>
      <div class="form-body">
        <div
          class="question-item"
          v-for="question in showQuestions"
          :key="question.id"
        >
          <p>{{ question.id }}. {{ question.title }}</p>
          <el-radio-group v-model="question.answer">
            <el-radio
              v-for="(item, index) in question.chooseList"
              :key="index"
              :label="item"
            >
              {{ item }}
            </el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="form-buttom">
        <el-pagination
          class="pagination"
          layout="prev, pager, next"
          :current-page="currentPage"
          :total="29"
          @current-change="handleCurrentChange"
          :page-size="pageSize"
        >
        </el-pagination>
        <el-button class="submit-btn" @click="submitQuestion()" type="primary">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前页码
      currentPage: 1,
      // 每页显示数量
      pageSize: 10,
      // 问题列表
      questionList: [
        {
          type: 'radio',
          id: 1,
          title: '您所处的学习阶段是 ',
          chooseList: [
            '小学',
            '初中',
            '高中',
            '大学',
            '本科以上在读学生',
            '就业',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 2,
          title:
            '我能阅读语言简单的英语绘本或小故事，识读其中的常见词并理解其主要内容 ',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 3,
          title: '我能感受英语歌谣中的押韵。 ',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 4,
          title:
            '我能读懂语言简单的有关日常生活的英语短文，并能借助插图理解图文小故事。 ',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 5,
          title: '我能从英语文章的描写中概括人物或事物的主要特征。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 6,
          title: '我能通过关键词或主题句帮助理解英语文章的主要内容。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 7,
          title: '我能理解简短英文书信中作者的观点。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 8,
          title: '我能从社会生活相关的英文简短议论文中分析作者的观点。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 9,
          title:
            '我能利用略读、寻读、跳读等不同的阅读技巧，找出英语阅读文章中的重要信息。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 10,
          title: '我能从英文便条，通知，任务，指令等材料中获取具体信息。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 11,
          title: '我能阅读一般题材的议论文或话题熟悉的评论性英文文章。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 12,
          title: '我能在英文阅读中适时概括已读过的内容。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 13,
          title: '我能读懂语言较复杂的小说和议论文。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 14,
          title: '我能通过英文阅读材料的选词、语言风格等，推测作者态度。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 15,
          title: '我能通过浏览目录，预测英文全书（文）的主要内容。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 16,
          title:
            '我能读懂语言复杂的英文小说及文化类作品，并鉴赏作者的语言特点。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 17,
          title:
            '我能读懂专业领域相关的英语学术论文或英语科技文献并评价其研究方法。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 18,
          title: '能通过研读多篇同类型英语阅读材料，综合评价作品的语言风格。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 19,
          title:
            '我能读懂语言复杂、内容深刻、跨专业的各类英语材料，如英语学术论文、英语文学原著或英语应用文等。 我能从多个角度评价阅读材料的价值。',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 20,
          title: '我认为我能准确地评价自己的英语阅读能力 ',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 21,
          title: '我认为自己的英语阅读水平',
          chooseList: ['非常不足', '比较不足', '一般', '比较高', '非常高'],
          answer: null,
        },
        {
          type: 'radio',
          id: 22,
          title:
            '我会通过记录自己的表现（比如阅读成绩，阅读流利程度等）来跟踪自己学习英语的进度',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 23,
          title:
            '我清楚地了解自己在英语阅读的哪方面（比如词汇储备，语法知识或信息定位能力等）存在不足',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 24,
          title: '我会根据比较其他人的学习成绩来判断自己的学习成效 ',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 25,
          title:
            '我会记录自己一天/周的在英语阅读学习上花费的时间，以调整下一阶段学习的时间 ',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 26,
          title:
            '在做练习中，我会思考我的学习方式是否真的在帮我提高英语阅读水平',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 27,
          title: '会向自己提问问题，以检查我是否学习好英语阅读课程内容 ',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 28,
          title: '我能够按照设定计划很好的完成这一阶段的英文阅读',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
        {
          type: 'radio',
          id: 29,
          title: '我在阅读过程中能够保持平和的心态，不会感到抗拒',
          chooseList: [
            '完全不符合',
            '比较不符合',
            '一般符合',
            '比较符合',
            '完全符合',
          ],
          answer: null,
        },
      ],
    };
  },
  computed: {
    showQuestions() {
      return this.questionList.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize,
      );
    },
  },
  components: {},

  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    getAnswer() {
      const answer = {};
      this.questionList.forEach((item, index) => {
        answer[`q${index + 1}`] = item.answer;
      });
      return answer;
    },
    submitQuestion() {
      // eslint-disable-next-line no-console
      console.log(this.getAnswer());
      this.axios({
        url: '/api/questionnaire/retrieveQuestionnaire',
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            questionnaire: this.getAnswer(),
          },
        },
      }).then((res) => {
        // eslint-disable-next-line no-console
        if (res.data.code === 0) {
          this.$message({
            message: res.data.msg,
            type: 'success',
          });
          this.$router.push({ path: '/' });
        }
      });
    },
  },
};
</script>
<style scoped>
.question-container {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/cyperpunk.jpg");
  background-size: 100% 100%;
  overflow: hidden;
}
.form {
  position: relative;
  width: 80%;
  height: 85vh;
  margin: 4vh auto;
  background-color: #fff;
  padding: 30px;
}
.question-title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.question-tip {
  text-align: center;
}
.form-body {
  display: flex;
  flex-wrap: wrap;
}
.question-item {
  width: 50%;
  box-sizing: border-box;
  padding: 0 20px;
}
.form-buttom{
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.submit-btn{
    width: 150px;
    margin: 10px
}
</style>
