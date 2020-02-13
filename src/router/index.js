import Vue from 'vue';
import Router from 'vue-router';
import Frame from '@/components/Frame';
import SourceCenter from '@/components/SourceCenter/SourceCenter';
import ConsolidationExercise from '@/components/ConsolidationExercise/ConsolidationExercise';
import RandomExercise from '@/components/RandomExercise/RandomExercise';
import DiscussionWorld from '@/components/DiscussionWorld/DiscussionWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frame',
      component: Frame,
      children: [
        {
          path: '/SourceCenter',
          name: 'SourceCenter',
          component: SourceCenter,
        },
        {
          path: '/ConsolidationExercise',
          name: 'ConsolidationExercise',
          component: ConsolidationExercise,
        },
        {
          path: '/RandomExercise',
          name: 'RandomExercise',
          component: RandomExercise,
        },
        {
          path: '/DiscussionWorld',
          name: 'DiscussionWorld',
          component: DiscussionWorld,
        },
      ],
    },
  ],
});
