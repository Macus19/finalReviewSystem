/* eslint-disable no-unreachable */
<template>
  <div class="consolidation-exercise-container">
    <div class="container-top">
      <i class="el-icon-caret-right"></i>
      <span class="top-title">不同题型，逐个攻破！</span>
    </div>
    <el-row type="flex" class="container-main">
      <!-- 左侧菜单栏 -->
      <el-col class="unit-choose" :span="4">
        <p class="container-main-menu-title">
          <i class="el-icon-s-order"></i>
          单元选择
        </p>
        <el-menu
          background-color="#0B8C56"
          text-color="#fff"
          default-active="j1"
          active-text-color="#66EE8E"
          @select="changeTab"
        >
          <el-menu-item :index="item" v-for="item in unitList" :key="item">{{item}}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-tabs stretch v-model="activeTab" @tab-click="getExecise()" type="card">
          <!-- <el-tab-pane label="单项选择">单项选择</el-tab-pane> -->
          <el-tab-pane label="选词填空" name="fill_in">
            <div
              class="fill-in-text"
              v-for="item in execise.fill_in[0].questions"
              :key="item.question"
            >
              {{ item.question }}
            </div>
            <p>选项：</p>
            <div>
              <span
                class="fill-in-selection"
                v-for="(item, index) in execise.fill_in[0].selection"
                :key="index"
                >{{ item }}</span
              >
            </div>
            <p>填下答案：</p>
            <div class="fill-in-answer">
              <div class="fill-in-input" v-for="index in execise.fill_in[0].questions.length" :key="index">
                <span>{{ index }}</span
                ><el-input v-model="fillList[index-1]" class="input-text"></el-input>
              </div>
            </div>
             <div class="btn-container">
            <el-button @click="handleClick" type="primary">提交</el-button>
          </div>
          </el-tab-pane>
          <el-tab-pane label="中英翻译" name="translation">
            <div v-for="item in execise.translation" :key="item.question">
              <div class="reading-choose">
                <p v-for="(option, index) in item" :key="index">{{ option }}</p>
              </div>
            </div>
            <p>请选择答案</p>
            <div>
              <div
                v-for="(item, index) in execise.translation.length"
                :key="item"
              >
                <span>{{ item }}.</span>
                <el-radio-group v-model="translationAnswer[index]">
                  <el-radio label="A">A</el-radio>
                  <el-radio label="B">B</el-radio>
                  <el-radio label="C">C</el-radio>
                  <el-radio label="D">D</el-radio>
                </el-radio-group>
              </div>
              <div class="btn-container">
                <el-button @click="handleClick" type="primary">提交</el-button>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="阅读理解" name="comprehesion">
            <p class="passage">{{ execise.comprehension.passage }}</p>
            <div
              v-for="item in readingAnswer"
              :key="item.question"
            >
              <!-- <div class="reading-choose">
                <p v-for="(option, index) in item" :key="index">{{ option }}</p>
              </div> -->
            </div>
            <p>请选择答案</p>
            <div>
              <div
                v-for="(item, index) in execise.comprehension.questions.length"
                :key="item"
              >
                <span>{{ item }}.</span>
                <el-radio-group v-model="readingAnswer[index]">
                  <el-radio label="A">A</el-radio>
                  <el-radio label="B">B</el-radio>
                  <el-radio label="C">C</el-radio>
                  <el-radio label="D">D</el-radio>
                </el-radio-group>
              </div>
              <div class="btn-container">
                <el-button @click="handleClick" type="primary">提交</el-button>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-dialog title="" :visible.sync="isShowDialog">
      <div>
        <p>答案：</p>
        <span class="ans" v-for="item in correctAns.key" :key="item">{{item}}</span>
      </div>
      <div>
        正确题号：
        <span class="ans" v-for="item in correctAns.right" :key="item">{{item}}</span>
      </div>
      <div>
        错误题号：
        <span class="ans" v-for="item in correctAns.wrong" :key="item">{{item}}</span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'fill_in',
      activeUnit: '',
      unitList: [],
      fillList: [],
      readingAnswer: [],
      translationAnswer: [],
      execise: {
        comprehension: {
          passage:
            "Choosing a travel companion is at least as uncertain as choosing a marriage partner. The chances of success are perhaps even less. The initial stages of both journeys are filled with enthusiasms, indulgences, and fairly consistent closing of the eyes to that which may later became, if not unacceptable, at least unpleasant.\n    No law of causality exists to insist that in choosing a travel companion you will lose a friend. But it’s not likely. The odds depends on the length and the rigorousness of the trip. Some friendships have a strength that will withstand even travel; others, based on happenstance, are by nature short-lived and travel merely hastens their dissolution.\n    Perhaps I should make it clear that in discussing this matter of travel companions I am confining myself to Platonic friendships. Intimate friends may well be the best companions of all, but entirely different rules of travel prevail. Compromises and concessions, demands and entreaties to and from such companions clearly stem from a recognized emotional base that colors every issue. I'll confine myself, then, to companions, male and female, who are sharing a trip solely for company. Why bother at all with a travel companion? Why not travel alone, in single blessedness, unencumbered and shiftily pursuing one's goal? Some of the answers are obvious: a congenial fellow traveler eases the stress and tensions, adds to the delights and rewards and pays half the bills. If the threat of loneliness is frightening, even a grumpy companion will foretell that, and quite often bring you to the point where you devoutly wish you were alone.\n    Finding that suitable companion is something of an art and something of a gamble. But the choice should be determined by one cardinal rule: Both travelers should be going on the trip with the same idea in mind. They should hold in common a theory of travel.\n",
          questions: [
            {
              question:
                '1. The sentence “The initial stages…unpleasant” (in the first paragraph) indicates that ________.',
              option1:
                'A. the journeys, with or without a partner, which may be pleasant at first, will turn out to be unpleasant ',
              option2:
                'B. the journeys to other countries will finally be unpleasant if you are too excited at first',
              option3:
                'C. in the process of choosing a partner, either for marriage or travel, something unpleasant could turn up in the end',
              option4:
                'D. the journeys with your partners will be exciting at first and unpleasant in the end.',
            },
            {
              question: '2. The author of this passage thinks that ________.',
              option1:
                'A. the advantages of traveling with someone are at least as great as the advantages of traveling alone',
              option2: 'B. Platonic friends make poor travel companions',
              option3:
                'C. traveling companions should not make too many concessions',
              option4:
                'D. getting married and taking a trip are equally important',
            },
            {
              question:
                '3. According to the author, finding a good companion is ________.',
              option1: 'A. a risky matter',
              option2: 'B. certain to be done',
              option3: 'C. impossible to be done',
              option4: 'D. an easy job',
            },
            {
              question: '4. Which of the following is true?',
              option1:
                'A. Choosing a travel companion will certainly make you lose a friend.',
              option2:
                'B. It is likely that you will lose a friend in choosing a travel companion.',
              option3:
                'C. In choosing a travel companion, you had better make friends first.',
              option4:
                'D. A travel companion is badly needed if you want to take a trip.',
            },
            {
              question:
                '5. Which of the following statements does the passage best support?',
              option1: 'A. Opposite types of people attract each other.',
              option2: 'B. Single women should never travel alone.',
              option3: 'C. Even best friends have arguments.',
              option4: 'D. Like-minded people should travel together.',
            },
          ],
        },
        translation: [
          {
            question: '1. 直到退休，他对出国旅游一直不感兴趣。',
            option1:
              'A. Foreign travel never really appealed to him until he retire.',
            option2:
              'B. Foreign travel never really appealed to him until he retired.',
            option3:
              'C. Foreign travel was never really appealed to him until he retired.',
            option4:
              'D. Foreign travelling never really appealed to him until he retired.',
          },
          {
            question: '2. 与最灵巧的机器人相比，人仍然聪明得多。',
            option1:
              'A. Man is still far more intelligent than the cleverest robot.',
            option2:
              'B Men are still far more intelligent than the cleverest robot.',
            option3:
              'C Man is still more intelligent than the cleverest robot.',
            option4:
              'D Man is still far more intelligent than a cleverest robot.',
          },
          {
            question: '3. 孩子们用苹果喂马。',
            option1: 'A. The children fed apples with the horse.',
            option2: 'B. The children fed the horse apples.',
            option3: 'C. The horses were fed with apples by the children.',
            option4: 'D. The children fed apples to the horse.',
          },
          {
            question: '4. 这国家的气候很适合种植葡萄。 ',
            option1: "A. The country's weather is ideal for growing grapes.",
            option2: "B. The country's climate is ideal for grapes.",
            option3: "C. The country's climat is ideal for growing grapes.",
            option4: "D. The country's climate is ideal for growing grapes.",
          },
          {
            question: '5. 她给老板点了一根香烟。',
            option1: 'A. She lit the a cigarette for her boss.',
            option2: 'B. She lit a cigarette for her boss.',
            option3: 'C. She light up a cigarette for her boss.',
            option4: 'D. She lit a cigarette for boss.',
          },
          {
            question: '6. 他每天骑摩托车上班。',
            option1: 'A. He rides his motorcycle to work every day.',
            option2: 'B. He rode his motorcycle to work every day.',
            option3: 'C. He rides his motorbike to work every day.',
            option4: 'D. He rides his motorcycle to go to work every day.',
          },
          {
            question: '7. 这商店给顾客提供一流的服务。',
            option1:
              'A. The shop provides its customers with excellent service.',
            option2: 'B. The store provides people with excellent service.',
            option3:
              'C. The store provides its customers with excellent service.',
            option4: 'D. The store provides its customers with good service.',
          },
          {
            question: '8. 这家旅馆有各种现代化的舒适设施。',
            option1: 'A. The hotel has every modern comforts.',
            option2: 'B. The hotel has all the modern comforts.',
            option3: 'C. The hotel has every modern comfort.',
            option4: 'D. The hotel has all modern comfort.',
          },
          {
            question: '9. 她的故事听起来不真实。',
            option1: 'A. Her story sounds false.',
            option2: 'B. Her story sounds unrealistic.',
            option3: 'C. Her story sound false.',
            option4: 'D. Her story sounds fail.',
          },
          {
            question: '10. 我提议大家玩游戏，但他们宁愿看电视。',
            option1:
              'A. I suggested that we play a game, but they preferred to watch TV.',
            option2:
              'B. I suggested to play a game, but they preferred to watch TV.',
            option3:
              'C. I suggested them playing a game, but they preferred to watch TV.',
            option4:
              'D. I suggested that we play a game, but they preferred watching TV.',
          },
          {
            question: '11. 她希望最终能就读医科学校并成为医生。',
            option1:
              'A. She hope eventually to go to medical school and become a doctor.',
            option2:
              'B. She hope eventually to attend medicine school and become a doctor.',
            option3:
              'C. She hope to attend medical school and become a doctor.',
            option4:
              'D. She hope eventually to attend medical school and become a doctor.',
          },
        ],
        fill_in: [
          {
            selection: '[‘a’, ‘an’, ‘the’, ‘/’]',
            questions: [
              {
                question: '1. The two cars are of ______ same size.     ',
              },
              {
                question: '2. The two radios are of ______similar size.',
              },
              {
                question:
                  '3. The Browns go to _____ church every Sunday morning,',
              },
              {
                question:
                  '4. I am not sure whether this is _______ bus to Beijing University.',
              },
              {
                question: '5. What______ fine weather!                  ',
              },
              {
                question: '6. More should be done for ______   poor in Africa.',
              },
              {
                question:
                  '7. Be sure to close ______ windows before you leave the room.',
              },
              {
                question: '8. Did you have ____wonderful time last night?',
              },
              {
                question: '9. The car is running 60 kilometres ______ hour.',
              },
              {
                question: '10. The servants are paid by ____ hour.',
              },
              {
                question: '11. Children are curious by______ nature.',
              },
              {
                question:
                  '12. This kind of skirt was quite in fashion in____ fifties.',
              },
              {
                question: "13. She is shopping at _____  butcher's.",
              },
              {
                question: '14. He stands up for _____   oppressed.',
              },
              {
                question:
                  '15. She told me that she wanted to be ______ architect.',
              },
              {
                question: '16. Is he good at playing ______ violin?',
              },
              {
                question: '17. Physics is ______ science.',
              },
              {
                question:
                  "18. If you go on doing that, you'11 be put into ______ prison.",
              },
              {
                question:
                  '19. The foreign guests went to visit the school in ____ car.',
              },
              {
                question:
                  '20. Will you go to ______town with me this afternoon?',
              },
              {
                question:
                  "21. He hasn't come back yet; he is still in _____ hospital.",
              },
              {
                question:
                  '22. The students were asked to keep all these new words in_____ mind.',
              },
              {
                question: '23. Please send me ______word of your safe arrival.',
              },
              {
                question: '24. Japan lies to ______ east of China.',
              },
              {
                question:
                  '25. He is in ______   habit of drinking some tea after dinner.',
              },
              {
                question: "26. As ______ rule, we get up about six o'clock.",
              },
              {
                question:
                  '27. We managed to wipe out all his troops on       spot.',
              },
              {
                question:
                  '28. Gun in _____ hand, the hunter was approaching the beast very quietly.',
              },
              {
                question:
                  '29. He was very upset because his experiment failed in ______ end.',
              },
              {
                question:
                  '30. As______ mayor of this city, it is my privilege to welcome you.',
              },
              {
                question: '31. He is always ready to help     poor.',
              },
              {
                question: '32. Do you go to      church on Sunday mornings?',
              },
              {
                question:
                  '33. The foreign teacher asked me to act ___ interpreter.',
              },
              {
                question: '34. She patted the dog on     head. ',
              },
              {
                question: '35. This song was very popular in    thirties.',
              },
            ],
          },
          {
            selection:
              '[‘holidaymaker’, ‘sightseeing’, ‘tour’, ‘guide’, ‘travelling’, ‘explore’, ‘sights’, ‘excursion(s)’, ‘trip’, ‘journey’]',
            questions: [
              {
                question:
                  "1. Optional      include a t   of the ancient city and a day's horse-riding.",
              },
              {
                question:
                  '2. The hotel has a lounge and bar where you can relax after      . ',
              },
              {
                question: "3. A day isn't really long enough to      the town.",
              },
              {
                question: '4. We enjoyed seeing the     of San Francisco.',
              },
              {
                question:
                  '5. We decided to make an all-day      to the island.',
              },
              {
                question:
                  '6. Please submit your        expenses by the end of the month.',
              },
              {
                question: "7. She's just come back from a        to New York. ",
              },
              {
                question:
                  '8. You can join an organized       or you can visit independently.',
              },
              {
                question:
                  '9. Her search took her on an incredible     across the world. ',
              },
              {
                question: "10. It's a five minute       by taxi. ",
              },
              {
                question:
                  '11. This summer we went on a walking      around Provence. ',
              },
              {
                question:
                  '12. She was joined in London by her      companions.',
              },
              {
                question:
                  '13. There are regular weekend e     throughout the summer.',
              },
              {
                question:
                  '14. The island is a superb choice for the discerning      .',
              },
              {
                question: '15. He works as a       in Bangkok.',
              },
              {
                question: '16. There were no seats available in b     .',
              },
              {
                question:
                  '17. Passengers were standing on the dock, waiting to    .',
              },
              {
                question:
                  '18. If you have any queries, please contact the      .',
              },
              {
                question: '19. When are you      on your travels? ',
              },
              {
                question:
                  '20. Remember you must     at least 1 hour 30 minutes before take off for most flights.',
              },
              {
                question:
                  '21. The      suggested some changes to my itinerary.',
              },
              {
                question: '22. We had finally retrieved all his e     .',
              },
              {
                question:
                  '23. When I got to the airport, my flight was already    .',
              },
              {
                question: '24. She sat in e     on the flight to Bucharest.',
              },
              {
                question: '25. We experienced severe    during the flight.',
              },
              {
                question: '26. The plane    along the runway.',
              },
              {
                question: '27. I began to feel    as soon as we left port.',
              },
              {
                question: '28. They were     a holiday abroad that year.',
              },
              {
                question: '29. Passengers will be charged for     .',
              },
              {
                question:
                  '30. Passengers complain about lack of information when travel    occur.',
              },
              {
                question:
                  '31. The airline operates flights to most international   .',
              },
            ],
          },
        ],
      },
      correctAns: {},
    };
  },

  components: {},

  mounted() {
    this.getExeciseList();
    // this.getExecise('comprehension');
    // this.getExecise('translation');
    // this.getExecise('single_choice');
    // this.getExecise('fill_in');
  },
  computed: {
  },
  methods: {
    getExeciseList() {
      this.axios({
        url: `${process.env.API_HOST}/exercise/getExerciseList`,
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            type: this.activeTab,
          },
        },
      }).then((res) => {
        if (res.data.code === 0) {
          this.unitList = res.data.data.map(item => item.unit);
        }
      });
    },
    changeTab(key) {
      this.activeUnit = key;
      this.getExecise();
    },
    getExecise() {
      this.axios({
        url: `${process.env.API_HOST}/exercise/getExercise`,
        method: 'POST',
        data: {
          token: 'login',
          data: {
            type: this.activeTab,
            unit: this.activeUnit,
          },
        },
      }).then((res) => {
        this.execise[this.activeTab] = res.data.data;
        console.log(this.execise[this.activeTab]);
      });
    },
    handleClick() {
      let data = null;
      switch (this.activeTab) {
        case 'comprehesion':
          data = Array(this.execise.comprehension.questions.length).fill('');
          data = data.map((item, index) => (this.readingAnswer[index] ? this.readingAnswer[index] : item));
          break;
        case 'translation':
          data = Array(this.execise.translation.length).fill('');
          data = data.map((item, index) => (this.translationAnswer[index] ? this.translationAnswer[index] : item));
          break;
        case 'fill_in':
          data = Array(this.execise.fill_in[0].questions.length).fill('');
          data = data.map((item, index) => (this.fillList[index] ? this.fillList[index] : item));
          break;
        default:
          break;
      }
      console.log(data);
      this.axios({
        url: `${process.env.API_HOST}/exercise/submitExercise`,
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            type: this.activeTab,
            unit: this.activeUnit,
            answer: data,
          },
        },
      }).then((res) => {
        if (res.data.code === 0) {
          this.isShowDialog = true;
          this.correctAns = res.data.data;
        }
      });
    },
  },
};
</script>
<style scoped>
.container-top {
  padding: 0 50px;
  height: 80px;
  line-height: 80px;
  vertical-align: middle;
}
.top-title {
  height: 80px;
  font-size: 20px;
  line-height: 80px;
  text-align: center;
  position: relative;
}
.el-icon-caret-right {
  display: inline-block;
  height: 80px;
  font-size: 40px;
  line-height: 75px;
  vertical-align: middle;
}
.top-title::after {
  position: absolute;
  width: 800px;
  height: 1px;
  background: #000;
  content: "";
  top: 13px;
}
.title::after {
  left: 0;
}
.container-main-menu-title {
  padding: 20px 10px;
  margin: 0;
  font-size: 20px;
  color: #fff;
  text-align: center;
  background-color: #0b8c56;
}
.container-main /deep/ .el-menu {
  border-right: 0;
}
.el-tab-pane {
  padding: 0 30px;
  height: 85vh;
  overflow-y: scroll;
}
.passage {
  text-indent: 40px;
  white-space: pre-wrap;
  line-height: 30px;
}
.reading-choose p:first-child {
  font-size: 20px;
  color: #808080;
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
.unit-choose{
  /* height: 85vh; */
  overflow-y: scroll;
}
.fill-in-text{
  margin: 10px 0;
}
.ans{
  margin: 10px;
}
</style>
