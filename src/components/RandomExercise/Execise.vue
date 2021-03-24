<template>
  <div class="execise-container">
    <el-tabs stretch v-model="activeTab" type="card">
      <el-tab-pane label="原文挖空">
        <div>
          <p class="passage">{{ fill_in.passage }}</p>
          <p>选项：</p>
          <div>
            <span
              class="fill-in-selection"
              v-for="(item, index) in fill_in.selection"
              :key="index"
              >{{ item }}</span
            >
          </div>
          <p>填下答案：</p>
          <div class="fill-in-answer">
            <div
              class="fill-in-input"
              v-for="index in fill_in.selection.length"
              :key="index"
            >
              <span>{{ index }}</span
              ><el-input v-model="fillList[index]" class="input-text"></el-input>
            </div>
          </div>
          <div class="btn-container">
            <el-button @click="handleClick" type="primary">提交</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="单项选择">
        <div>
          <p class="passage">{{ single_choice.passage }}</p>
          <div
            v-for="(item, index) in single_choice.questions"
            :key="index"
            class="single-choice-answer"
          >
            <p>{{ index + 1 }}. {{ item.question }}</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="中英翻译">
        <p class="passage">{{ translation.question }}</p>
        <p>请输入答案</p>
        <el-input v-model="translations" :col="30" type="textarea"></el-input>
        <div class="btn-container">
          <el-button @click="handleClick" type="primary">提交</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="阅读理解">
        <div>
          <p class="passage">{{ reading.passage }}</p>
          <div v-for="item in reading.questions" :key="item.question">
            <div class="reading-choose">
              <p v-for="(option, index) in item" :key="index">{{ option }}</p>
            </div>
          </div>
          <p>请选择答案</p>
          <div>
            <div v-for="(item, index) in reading.questions.length" :key="item">
              <span>{{ item }}.</span>
              <el-radio-group v-model="readingAnswer[index]">
                <el-radio label="A">A</el-radio>
                <el-radio label="B">B</el-radio>
                <el-radio label="C">C</el-radio>
                <el-radio label="D">D</el-radio>
              </el-radio-group>
            </div>
          </div>
          <div class="btn-container">
            <el-button  @click="handleClick" type="primary">提交</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fillList: [],
      translations: '',
      readingAnswer: ['A'],
    };
  },

  props: {
    content: {
      type: Object,
      default: null,
    },
  },
  components: {},
  computed: {
    fill_in() {
      return {
        passage: this.content.fill_in.passage.replace(/[3-4]\d/g, '_____'),
        selection: JSON.parse(
          this.content.fill_in.selection.replace(/'/g, '"'),
        ),
      };
    },
    reading() {
      return this.content.reading;
    },
    single_choice() {
      return this.content.single_choice;
    },
    translation() {
      return this.content.translation;
    },
  },
  mounted() {
    console.log(this.content);
  },
  methods: {
    handleClick() {
      this.$message({
        message: '提交成功！',
        type: 'success',
      });
    },
  },
};
</script>
<style scoped>
.el-tab-pane {
  height: 78vh;
  padding: 10px 30px;
  line-height: 24px;
  overflow-y: scroll;
}
.reading-choose p:first-child {
  font-size: 20px;
  color: #808080;
}
.fill-in-selection {
  width: 100px;
  text-align: center;
  display: inline-block;
  background-color: #808080;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  margin: 10px 15px;
}
.passage {
  text-indent: 40px;
  white-space: pre-wrap;
  line-height: 30px;
}
.input-text {
  width: 120px;
  margin: 10px 20px;
}
.fill-in-answer {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
}
.fill-in-input span {
  display: inline-block;
  width: 25px;
}
.btn-container {
  text-align: center;
  margin: 20px 0;
}
</style>
