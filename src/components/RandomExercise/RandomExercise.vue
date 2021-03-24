<template>
  <el-row type="flex" class="random-exercise-container">
    <el-col :span="4">
      <el-menu
        class="menu"
        background-color="#545c64"
        text-color="#fff"
        default-active="1"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">四级阅读</el-menu-item>
        <el-menu-item index="2">六级阅读</el-menu-item>
        <el-menu-item index="3">专八阅读</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <div v-show="!isShowExecise" class="execise-list-container">
        <p><i class="el-icon-edit-outline"></i>试卷列表</p>
        <div class="exetcise-item">
          <p>1、2015年6月CET4（二）</p>
          <el-button @click="turnToExecise" type="primary">开始做题</el-button>
        </div>
      </div>
      <Execise v-show="isShowExecise" :content="execise"></Execise>
    </el-col>
  </el-row>
</template>

<script>
import Execise from './Execise';

export default {
  data() {
    return {
      isShowExecise: false,
      execise: {
        name: '2015年6月CET4（二）',
        reading: {
          passage:
            "The endless debate about “work-life balance ’’ often contains a hopeful footnote about stay-at- home dads. If American society and business won5t make it easier on future female leaders who choose to have children, there is still the ray of hope that increasing numbers of full-time fathers will. But based on today’s socioeconomic trends, this hope is, unfortunately, misguided. It’s true that the number of men who have left work to do their thing as full-time parents has doubled in a decade, but ifs still very small： only 0. 8% of married couples where the stay-at-home father was out of the labor force for a year. Even that percentage is likely inflated by men thrust into their caretaker role by a downsizing. This is simply not a large enough group to reduce the social stigma(污名)and force other adjustments necessary to supporting men in this decision, even if only for a relatively short time. Even shorter times away from work for working fathers are already difficult. A study found that 85% of new fathers take some time off after the birth of a child—but for all but a few, it’s a week or two at most. Meanwhile, the average for women who take leave is more than 10 weeks. Such choices impact who moves up in the organization. While you’re away, someone else is doing your work, making your sales, taking care of your customers. That can’t help you at work. It can only hurt you. Women, of course, face the same issues of returning after a long absence. But with many more women than men choosing to leave the workforce entirely to raise families, returning from an extended parental leave doesn’t raise as many eyebrows as it does for men. Women would make more if they didn't break their earning trajectory (轨迹）by leaving the workforce, or if higher-paying professions were more family-friendly. In the foreseeable future, stay- at-home fathers may make all the difference for individual families, but their presence won’t reduce the numbers of high-potential women who are forced to choose between family and career",
          questions: [
            {
              question:
                'What gives women a ray of hope to achieve work-life balance?',
              option1: 'A. More men taking an extended parental leave.',
              option2: 'B. Peopled changing attitudes towards family.',
              option3: 'C. More women entering business management.',
              option4: 'D. The improvement of their socioeconomic status.',
            },
            {
              question:
                'Why does the author say the hope for more full-time fathers is misguided?',
              option1: 'A. Women are better at taking care of children.',
              option2: 'B. Many men value work more than their family.',
              option3: 'C. Their number is too small to make a difference.',
              option4: 'D. Not many men have the chance to stay at home.',
            },
            {
              question: 'Why do few men take a long parental leave?',
              option1:
                'A. A long leave will have a negative impact on their career.',
              option2:
                'B. They just have too many responsibilities to fulfill at work.',
              option3:
                'C. The economic loss will be too much for their family to bear.',
              option4:
                'D. They are likely to get fired if absent from work for too long.',
            },
            {
              question:
                'What is the most likely reaction to men returning from an extended parental leave?',
              option1: 'A) Jealousy.',
              option2: 'B) Surprise.',
              option3: 'C) Admiration.',
              option4: 'D) Sympathy.',
            },
            {
              question:
                'What does the author say about high-potential women in the not-too-distant future?',
              option1:
                'A. They will benefit from the trend of more fathers staying at home.',
              option2:
                'B. They will find high-paying professions a bit more family-friendly.',
              option3:
                'C. They are unlikely to break their career trajectory to raise a family.',
              option4:
                'D. They will still face the difficult choice between career and children.',
            },
          ],
        },
        fill_in: {
          passage:
            'Ifs our guilty pleasure： Watching TV is the most common everyday activity, after work and sleep, in many parts of the world. Americans view five hours of TV each day, and while we know that spending so much time sitting 36 can lead to obesity/(肥胖症）and other diseases, researchers have now quantified just how 37 being a couch potato can be. 4 In an analysis of data from eight large 38 .published studies, a Harvard-led group reported in the that for every two hours per day spent channel 39 , the risk of developing Type 2 diabetes Journal of the American Medical Asociation (糖尿病）rose 20% over 8. 5 years, the risk of heart disease increased 15% over a 40 , and the odds of dying prematurely 41 13% during a seven-year follow-up. All of these 42 are linked to a lack of physical exercise. But compared with other sedentary (久坐 的）activities, like knitting, viewing TV may be especially 43 at promoting unhealthy habits. For one, the sheer number of hours we pass watching TV dwarfs the time we spend on anything else. And other studies have found that watching ads for beer and popcorn may make you more likely to 44 them. Even so, the authors admit that they didn’t compare different sedentary activities to 45 whether TV watching was linked to a greater risk of diabetes, heart disease or early death compared with, say, reading.',
          selection:
            "['climbed','consume','decade ','determine ','effective ','harmful ','outcomes','passively','previously','resume',' suffered','surfing','term','terminals','twisting']",
        },
        single_choice: {
          passage:
            'A. Imagine taking a college exam, and, instead of handing in a blue book and getting a grade from a professor a few weeks later, clicking the “send” button when you are done and receiving a grade back instantly, your essay scored by a software program. And then, instead of being done with that exam, imagine that the system would immediately let you rewrite the test to try to improve your grade. B. EdX, the nonprofit enterprise founded by Harvard and the Massachusetts Institute of Technology (MIT) to offer courses on the Internet, has just introduced such a system and will make its automated(自动的）software available free on the Web to any institution that wants to use it. The software uses artificial intelligence to grade student essays and short written answers, freeing professors for other tasks. C. The new service will bring the educational consortium(联盟)into a growing conflict over the role of automation in education. Although automated grading systems for multiple-choice and true-false tests are now widespread, the use of artificial intelligence technology to grade essay answers has not yet received widespread acceptance by educators and has many critics. D. Anant Agarwal, an electrical engineer who is president of EdX, predicted that the instant-grading software would be a useful teaching tool, enabling students to take tests and write essays over and over and improve the quality of their answers. He said the technology would offer distinct advantages over the traditional classroom system, where students often wait days or weeks for grades. “There is a huge value in learning with instant feedback,” Dr. Agarwal said. “Students are telling us they learn much better with instant feedback.” 5 E. But skeptics (怀疑者) the automated system is no match for live teachers. One longtime critic , Les Perelman, has drawn national attention several times for putting together nonsense essays that have fooled software grading programs into giving high marks. He has also been highly critical of studies claiming that the software compares well to human graders. F. He is among a group of educators who last month began circulating a petition (呼吁) opposing automated assessment software. The group, which calls itself Professionals Against Machine Scoring of Student Essays in High-Stakes Assessment, has collected nearly 2,000 signatures, including some from famous people like Noam Chomsky. G. “Let’s face the realities of automatic essay scoring,” the group’s statement reads in part. “Computers cannot ‘read’. They cannot measure the essentials of effective written communication: accuracy, reasoning, adequacy of evidence, good sense, ethical ( 伦理的) position, convincing argument, meaningful organization, and clarity, among others. H. But EdX expects its software to be adopted widely by schools and universities. It offers free online classes from Harvard, MIT and the University of California-Berkeley; this fall, it will add classes from Wellesley, Georgetown and the University of Texas. In all, 12 universities participate in EdX, which offers certificates for course completion and has said that it plans to continue to expand next year, including adding international schools. I. The EdX assessment tool requires human teachers, or graders, to first grade 100 essays or essay questions. The system then uses a variety of machine-learning techniques to train itself to be able to grade any number of essays or answers automatically and almost instantly. The software will assign a grade depending on the scoring system created by the teacher, whether it is a letter grade or numerical（数字的）rank. J. EdX is not the first to use the automated assessment technology, which dates to early computers in the 1960s. There is now a range of companies offering commercial programs to grade written test answers, and four states—Louisiana, North Dakota, Utah and West Virginia—are using some form of the technology in secondary schools. A fifth, Indiana, has experimented with it. In some cases the software is used as a “second reader,” to check the reliability of the human graders. K. But the growing influence of the EdX consortium to set standards is likely to give the technology a boost. On Tuesday, Stanford announced that it would work with EdX to develop a joint educational system that will make use of the automated assessment technology. L. Two start-ups, Coursera and Udacity, recently founded by Stanford faculty members to create “massive open online courses,” or MOOCs, are also committed to automated assessment systems because of the value of instant feedback. “It allows students to get immediate feedback on their work, so that lean turns into a game, with students naturally(吸引) toward resubmitting the work until they get it right,” said Daphne Roller, a computer scientist and a founder of Coursera. M. Last year the Hewlett Foundation, a grant-making organization set up by one of the Hewlett- Packard founders and his wife, sponsored two $100,000 prizes aimed at improving software that grades essays and short answers. More than 150 teams entered each category. A winner of one of the Hewlett contests, Vik Paruchuri, was hired by EdX to help design its assessment software. N. “One of our focuses is to help kids learn how to think critically,” said Victor Vuchic, a program officer at the Hewlett Foundation. “ It’s probably impossible to do that with multiple-choice tests. The challenge is that this requires human graders, and so they cost a lot more and they take a lot more time. ” O. Mark D. Shermis, a professor at the University of Akron in Ohio, supervised the Hewlett Foundation’s contest on automated essay scoring and wrote a paper about the experiment. In his view, the technology—though imperfect—has a place in educational settings. P. With increasingly large classes, it is impossible for most teachers to give students meaningful feedback on writing assignments, he said. Plus, he noted, critics of the technology have tended to come from the nation’s best universities, where the level of teaching is much better than at most schools. 6 Q. Often they come from very famous institutions where, in fact, they do a much better job of providing feedback than a machine ever could,” Dr. Shermis said. “ There seems to be a lack of appreciation of what is actually going on in the real world.”',
          questions: [
            {
              question:
                'Some professionals in education are collecting signatures to voice their opposition to automated essay grading.',
            },
            {
              question:
                'Using software to grade students’ essays saves teachers time for other work.',
            },
            {
              question:
                'The Hewlett contests aim at improving essay grading software.',
            },
            {
              question:
                'Though the automated grading system is widely used in multiple-choice tests, automated essay grading is still criticized by many educators.',
            },
            {
              question:
                'Some people don’t believe the software grading system can do as good a job as human graders.',
            },
            {
              question:
                'Critics of automated essay scoring do not seem to know the true realities in less famous universities.',
            },
            {
              question:
                'Critics argue many important aspects of effective writing cannot be measured by computer rating programs.',
            },
            {
              question:
                'As class size grows, most teachers are unable to give students valuable comments as to how to improve their writing.',
            },
            {
              question:
                'The automated assessment technology is sometimes used to double check the work of human graders.',
            },
            {
              question:
                'Students find instant feedback helps improve their learning considerably.',
            },
          ],
        },
        translation: {
          question:
            '据报道，今年中国快递服务（courier services)将递送大约 120 亿件包裹。这将使中国有可能超越美国成为世界上最大 的快递市场。大多数包裹里装着网上订购的物品。中国给数百万在线零售商以极具竞 争力的价格销售商品的机会。 仅在11月11日，中国消费者就从国内最大的购物平台购买了价值90亿美元的商品。中国有不少这样的特殊购物日。 因此,快递业在中国扩展就不足为奇了。',
        },
      },
    };
  },

  components: {
    Execise,
  },

  mounted() {},
  methods: {
    turnToExecise() {
      this.axios({
        url: '/api/realq/getRealq',
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            realq_id: 2,
          },
        },
      }).then((res) => {
        console.log(res);
        this.content = res.data.data;
      });
      this.isShowExecise = true;
    },
  },
};
</script>
<style scoped>
.random-exercise-container {
  height: 100%;
}
.menu {
  height: 90vh;
}
.exetcise-list i {
  font-size: 24px;
}
.exetcise-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  border-bottom: 2px solid #eee;
}
</style>

