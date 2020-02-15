<template>
<div class="question-set-card-container">
  <el-card>
      <p class="question-set-card-unit">{{unit}}</p>
      <p class="question-set-card-type">{{questionType}}</p>
      <div v-if="isLearned">
        <el-progress :percentage="percentage" color="#4BAF50"></el-progress>
        <p class="question-set-card-connrect-tip">修改错题{{haveConnrect}}/{{totalQuestionNum}}道</p>
      </div>
      <div v-else>
        <el-button type="success">继续学习</el-button>
      </div>
  </el-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      unit: 'Unit1 A1',
      questionType: '填空题',
      isLearned: true, // 是否已经完成学习
      totalQuestionNum: 8, // 总的错题数
      haveConnrect: 2, // 已经修改的错题数
    };
  },

  components: {},

  computed: {
    // 计算修改错题数的百分比
    percentage() {
      return ((this.haveConnrect / this.totalQuestionNum) * 100);
    },
  },

  prop: {
    questionSet: Object,
  },

  methods: {},
};

</script>
<style scoped>
.question-set-card-container{
    width:210px;
    text-align: center;
}
.question-set-card-unit{
    font-size: 20px;
    color:#54555B;
}
.question-set-card-type{
    color:#54555B;
}
.question-set-card-connrect-tip{
    color:#4BAF50;
    font-size: 12px;
    text-align: left;
    padding: 0 8px;
}
</style>
