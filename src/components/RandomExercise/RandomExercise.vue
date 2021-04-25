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
        <div v-for="item in exerciseList" :key="item.id" class="exetcise-item">
          <p>{{item.name}}</p>
          <el-button @click="turnToExecise(item.id)" type="primary">开始做题</el-button>
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
      exerciseList: [],
      isShowExecise: false,
      execise: {
        name: '2015年6月CET4（一）',
        reading: [
          {
            passage: 'If you think a high-factor sunscreen (防晒霜) keeps you safe from harmful rays, you may be wrong. Research in this week^ Nature shows that while factor 50 reduces the number of melanomas (黑瘤）and delays their occurrence, it can’t prevent them. Melanomas are the most aggressive skin cancers. You have a higher risk if you have red or blond hair, fair skin, blue or green eyes, or sunburn easily, or if a close relative has had one. Melanomas are more common if you have periodic intense exposure to the sun. Other skin cancers are increasingly likely with long-term exposure.\nThere is continuing debate as to how effective sunscreen is in reducing melanomas—the evidence is weaker than it is for preventing other types of skin cancer. A 2011 Australian study of 1,621 people found that people randomly selected to apply sunscreen daily had half the rate of melanomas of people who used cream as needed. A second study, comparing 1,167 people with melanomas to 1,101 who didn’t have the cancer, found that using sunscreen routinely, alongside other protection such as hats, long sleeves or staying in the shade, did give some protection. This study said other forms of sun protection—not sunscreen—seemed most beneficial. The study relied on people remembering what they had done over each decade of their lives, so it’s not entirely reliable. But it seems reasonable to think sunscreen gives people a false sense of security in the sun.\nMany people also don’t use sunscreen properly—applying insufficient amounts, failing to reapply after a couple of hours and staying in the sun too long. It is sunburn that is most worrying—recent research shows five episodes of sunburn in the teenage years increases the risk of all skin cancers.\nThe good news is that a combination of sunscreen and covering up can reduce melanoma rates, as shown by Australian figures from their slip-slop-slap campaign. So if there is a heat wave this summer,  it would be best for us, too, to slip on a shirt, slop on (补上) sunscreen and slap on a hat.',
            question: [
              {
                question: 'What is peopled common expectation of a high-factor sunscreen?',
                option1: 'A) It will delay the occurrence of skin cancer.',
                option2: 'B) It will protect them from sunburn.',
                option3: 'C) It will keep their skin smooth and fair.',
                option4: 'D) It will work for people of any skin color.',
              },
              {
                question: 'What does the research in Nature say about a high-factor sunscreen?',
                option1: 'A) It is ineffective in preventing melanomas.',
                option2: 'B) It is ineffective in case of intense sunlight',
                option3: 'C) It is ineffective with long-term exposure.',
                option4: 'D) It is ineffective for people with fair skin.',
              },
              {
                question: 'What do we learn from the 2011 Australian study of 1,621 people?',
                option1: 'A)  Sunscreen should be applied alongside other protection measures.',
                option2: 'High-risk people benefit the most from the application of sunscreen.',
                option3: 'A)      Irregular application of sunscreen does women more harm than good.',
                option4: 'A)      Daily application of sunscreen helps reduce the incidence of melanomas.',
              },
              {
                question: 'What does the author say about the second Australian study?',
                option1: 'A)      It misleads people to rely on sunscreen for protection.',
                option2: 'It helps people to select the most effective sunscreen.',
                option3: 'It is not based on direct observation of the subjects.',
                option4: 'A)      It confirms the results of the first Australian study.',
              },
              {
                question: 'What does the author suggest to reduce melanoma rates?',
                option1: 'A)  Using both covering up and sunscreen.',
                option2: 'B ) Staying in the shade whenever possible.',
                option3: 'C) Using covering up instead of sunscreen.',
                option4: 'D) Applying the right amount of sunscreen.',
              },
            ],
          },
          {
            passage: 'Across the rich world, well-educated people increasingly work longer than the less-skilled. Some 65% of American men aged 62 - 74 with a professional degree are in the workforce, compared with 32% of men with only a high-school certificate. This gap is part of a deepening divide between the well-educated well-off and the unskilled poor. Rapid technological advance has raised the incomes of the highly skilled while squeezing those of the unskilled. The consequences, for individuals and society, are profound.\nThe world is facing an astonishing rise in the number of old people, and they will live longer than ever before. Over the next 20 years the global population of those aged 65 or more will almost double,  from 600 million to 1. 1 billion. The experience of the 20th century, when greater longevity(长寿）translated into more years in retirement rather than more years at work, has persuaded many observers that this shift will lead to slower economic growth, while the swelling ranks of pensioners will create government budget problems.\nBut the notion of a sharp division between the working young and the idle old misses a new trend,  the growing gap between the skilled and the unskilled. Employment rates are falling among younger unskilled people, whereas older skilled folk are working longer. The divide is most extreme in America, where well-educated baby-boomers (二战后生育高峰期出生的美国人）are putting off retirement while many less-skilled younger people have dropped out of the workforce.\nPolicy is partly responsible. Many European governments have abandoned policies that used to encourage people to retire early. Rising life expectancy(预期寿命), combined with the replacement of generous defined-benefit pension plans with less generous defined-contribution ones, means that even the better-off must work longer to have a comfortable retirement. But the changing nature of work also plays a big role. Pay has risen sharply for the highly educated, and those people continue to reap rich rewards into old age because these days the educated elderly are more productive than the preceding generation. Technological change may well reinforce that shift: the skills that complement computers, from management knowhow to creativity, do not necessarily decline with age.',
            question: [
              {
                question: 'What is happening in the workforce in rich countries?',
                option1: 'A)      Younger people are replacing the elderly.',
                option2: 'A)      Well-educated people tend to work longer.',
                option3: 'A)      Unemployment rates are rising year after year.',
                option4: 'A)      People with no college degree do not easily find work.',
              },
              {
                question: 'What has helped deepen the divide between the well-off and the poor?',
                option1: 'Longer life expectancies.',
                option2: 'A rapid technological advance.',
                option3: 'A)      C) Profound changes in the workforce.',
                option4: 'D) A growing number of the well-educated.',
              },
              {
                question: 'What do many observers predict in view of the experience of the 20th century?',
                option1: 'A)      Economic growth will slow down.',
                option2: 'A)      Government budgets will increase.',
                option3: 'A)      More people will try to pursue higher education.',
                option4: 'A)      There will be more competition in the job market.',
              },
              {
                question: 'What is the result of policy changes in European countries?',
                option1: 'Unskilled workers may choose to retire early.',
                option2: 'A)      More people have to receive in-service training.',
                option3: 'A)      Even wealthy people must work longer to live comfortably in retirement.',
                option4: 'A)      People may be able to enjoy generous defined-benefits from pension plans.',
              },
              {
                question: 'What is characteristic of work in the 21st century?',
                option1: 'A)      Computers will do more complicated work.',
                option2: 'A)      More will be taken by the educated young.',
                option3: 'A)      Most jobs to be done will be the creative ones.',
                option4: 'A)      Skills are highly valued regardless of age.',
              },
            ],
          },
        ],
        fill_in: {
          passage: 'The U. S. Department of Education is making efforts to ensure that all students have equal access to a quality education. Today it is   36    the launch of the Excellent Educators for All Initiative. The initiative will help states and school districts support great educators for the students who need them most.\n“All children are   37   to a high-quality education regardless of their race, zip code or family income. It is   38   important that we provide teachers and principals the support they need to help students reach their full    39   ” U. S. Secretary of Education Arne Duncan said. “Despite the excellent work and deep   40   of our nation’s teachers and principals, students in high-poverty, high- minority schools are unfairly treated across our country. We have to do better. Local leaders and educators will   41   their own creative solutions, but we must work together to   42   our focus on how to better recruit, support and   43    effective teachers and principals for all students, especially the kids who need them most.”\nToday’s announcement is another important step forward in improving access to a quality education, a   44   of President Obama’s year of action. Later today, Secretary Duncan will lead a roundtable discussion with principals and school teachers from across the country about the   45   of working in high-need schools and how to adopt promising practices for supporting great educators in these schools.',
          selection: "[' announcing',' beneficial',' challenges',' commitment',' component','contests','critically','develop','I) distributing',' enhance',' entitled','potential',' properly',' qualified','retain']",
        },
        single_choice: {
          passage: '[A]  \tFast-food firms have to be a thick-skinned bunch. Health experts regularly criticise them severely for selling food that makes people fat. Critics even complain that McDonald’s, whose logo symbolises calorie excess, should not have been allowed to sponsor the World Cup. These are things fast-food firms have learnt to cope with. But not perhaps for much longer. The burger business faces more pressure from regulators at a time when it is already adapting strategies in response to shifts in the global economy.\n[B] \tFast food was once thought to be recession-proof. When consumers need to cut spending, the logic goes，cheap meals like Big Macs and Whoppers become even more attractive. Such “trading down” proved true for much of the latest recession, when fast-food companies picked up customers who could no longer afford to eat at casual restaurants. Traffic was boosted in America, the home of fast food, with discounts and promotions, such as $ 1 menus and cheap combination meals.\n[C] \tAs a result, fast-food chains have weathered the recession better than their more expensive competitors. In 2009 sales at full-service restaurants in America fell by more than 6% , but total sales remained about the same at fast-food chains. In some markets, such as Japan, France and Britain, total spending on fast food increased. Same-store sales in America at McDonald’s, the world’s largest fast-food company, did not decline throughout the downturn. Panera Bread, an American fast-food chain known for its fresh ingredients, performed well, too, because it offers higher-quality food at lower prices than restaurants.\n[D]\t But not all fast-food companies have been as fortunate. Many, such as Burger King, have seen sales fall. In a severe recession, while some people trade down to fast food, many others eat at home more frequently to save money. David Palmer，an analyst at UBS，a bank，says smaller fast- food chains in America，such as Jack in the Box and Carl’s Jr.，have been hit particularly hard in this downturn because they are competing with the global giant McDonald^, which increased spending on advertising by more than 7% last year as others cut back.\n[E] \tSome fast-food companies also sacrificed their own profits by trying to give customers better value.During the recession companies set prices low, hoping that once they had tempted customers through the door they would be persuaded to order more expensive items. But in many cases that strategy did not work. Last year Burger franchisees(特许经营人)sued（起诉）\tthe company over its double-cheeseburger promotion, claiming it was unfair for them to be repuired to sell these for $1 when they cost $1.10 to make. In May a judge ruled in favour of Burger King. Nevertheless, the company may still be cursing its decision to promote cheap choices over more expensive ones because items on its “value menu” now account for around 20% of all sales, up from 12% last October.\n[F]\t Analysts expect the fast-food industry to grow modestly this year. But the downturn is making companies rethink their strategies. Many are now introducing higher-priced items to entice (引诱） consumers away from $1 specials. RFC, a division of Yum! Brands，which also owns Taco Bell and Pizza Hut, has launched a chicken sandwich that costs around $5. And in May Burger King introduced barbecue(烧烤）pork ribs at $7 for eight.\n[G] \tCompanies are also trying to get customers to buy new and more items, including drinks. McDonald’s started selling better coffee as a challenge to Starbucks. Its “ McCafe ’’ line now accounts for an estimated 6% of sales in America. Starbucks has sold rights to its Seattle’s Best coffee brand to Burger King, which will start selling it later this year.\n[H ]  \tAs fast-food companies shift from “super size” to “more buys”，they need to keep customer traffic high throughout the day. Many see breakfast as a big opportunity, and not just for fatty food. McDonald’s will start selling porridge (粥）in America next year. Breakfast has the potential to be very profitable, says Sara Senatore of Bernstein, a research firm, because the margins can be high. Fast-food companies are also adding midday and late-night snacks, such as blended drinks and wraps. The idea is that by having a greater range of things on the menu, “we can sell to consumers products they want all day,” says Rick Carucci, the chief financial officer of Yum! Brands.\n[I]\t But what about those growing waistlines? So far, fast-food firms have cleverly avoided government regulation. By providing healthy options, like salads and low-calorie sandwiches, they have at least given the impression of doing something about helping to fight obesity (肥胖症）.These offerings are not necessarily loss-leaders, as they broaden the appeal of outlets to groups of diners that include some people who don’t want to eat a burger. But customers cannot be forced to order salads instead of fries.\n[J ] \tIn the future, simply offering a healthy option may not be good enough. “Every packaged-food and restaurant company I know is concerned about regulation right now,” says Mr. Palmer of UBS. America’s health-reform bill, which Congress passed this year, requires restaurant chains with 20 or more outlets to put the calorie-content of items they serve on the menu. A study by the National Bureau of Economic Research, which tracked the effects on Starbucks of a similar calorie-posting law in New York City in 2007, found that the average calorie-count per transaction fell 6% and revenue increased 3% at Starbucks stores where a Dunkin Donuts outlet was nearby—a sign, it is said, that menu-labelling could favour chains that have more healthy offerings.\n[K]\tIn order to avoid other legislation in America and elsewhere, fast-food companies will have to continue innovating (创新). Walt Riker of McDonald’s claims the change it has made in its menu means it offers more healthy items than it did a few years ago. “We probably sell more vegetables, more milk, more salads, more apples than any restaurant business in the world," he says. But the recent proposal by a county in California to ban McDonald’s from including toys in its high-calorie "Happy Meals”, because legislators believe it attracts children to unhealthy food, suggests there is a lot more left to do.',
          questions: [
            {
              question: 'Some people propose laws be made to stop McDonald’s from attaching toys to its food specials for children.',
            },
            {
              question: 'Fast-food firms may not be able to cope with pressures from food regulation in the near future.',
            },
            {
              question: ' Burger King will start to sell Seattle’s Best coffee to increase sales.',
            },
            {
              question: 'Some fast-food firms provide healthy food to give the impression they are helping to tackle the obesity problem',
            },
            {
              question: 'During the recession, many customers turned to fast food to save money.',
            },
            {
              question: 'Many people eat out less often to save money in times of recession.',
            },
            {
              question: 'During the recession, Burger King’s promotional strategy of offering low-priced items often proved ineffective.',
            },
            {
              question: ' Fast-food restaurants can make a lot of money by selling breakfast.',
            },
            {
              question: 'Many fast-food companies now expect to increase their revenue by introducing higher-priced items',
            },
            {
              question: 'A newly-passed law asks big fast-food chains to specify the calorie count of what they serve on the menu',
            },
          ],
        },
        translation: {
          question: '中国是世界上最古老的文明之一。构成现代世界基础的许多元素都起源于中国。中国现在拥有世界上发展最快的经济，并正经历着一次新的工业革命。中国还启动了雄心勃勃的太空探索计划，其中包括到 2020年建成一个太空站。目前,中国是世界最大的出口国之一，并正在吸引大量外国投资。同时,它也在海外投资数十亿美元。2011年，中国超越日本成为世界第二大经济体。',
        },
      },
    };
  },

  components: {
    Execise,
  },

  mounted() {
    this.getExerciseList();
  },
  methods: {
    getExerciseList() {
      this.axios({
        url: `${process.env.API_HOST}/realq/getRealqList`,
        method: 'POST',
        data: {
          token: 'login',
        },
      }).then((res) => {
        console.log(res);
        this.exerciseList = res.data.data;
        // this.content = res.data.data;
      });
    },
    turnToExecise(id) {
      this.axios({
        url: `${process.env.API_HOST}/realq/getRealq`,
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            realq_id: id,
          },
        },
      }).then((res) => {
        console.log(res.data.data);
        this.execise = res.data.data;
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
  min-height: 90vh;
  height: 100%;
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

