import Vue from 'vue';
import Router from 'vue-router';
import Frame from '@/components/Frame';
import SourceCenter from '@/components/SourceCenter/SourceCenter';
import ConsolidationExercise from '@/components/ConsolidationExercise/ConsolidationExercise';
import RandomExercise from '@/components/RandomExercise/RandomExercise';
import DiscussionWorld from '@/components/DiscussionWorld/DiscussionWorld';
import Index from '@/components/Index/Index';
import PostDetail from '@/components/PostDetail/PostDetail';
import PersonalZone from '@/components/PersonalZone/PersonalZone';
import PersonalInformation from '@/components/PersonalInformation/PersonalInformation';
import VideoContent from '@/components/SourceCenter/components/VideoContent';
import BookContent from '@/components/SourceCenter/components/BookContent';
import Group from '@/components/Group/Group';
import Login from '@/components/Login/Login';
import Questions from '@/components/Questions/Questions';
import EditPost from '@/components/EditPost/EditPost';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frame',
      component: Frame,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index,
        },
        {
          path: '/SourceCenter',
          name: 'SourceCenter',
          component: SourceCenter,
          children: [
            {
              path: '/SourceCenter/BookContent',
              name: 'BookContent',
              component: BookContent,
            },
            {
              path: '/SourceCenter/VideoContent',
              name: 'VideoContent',
              component: VideoContent,
            },
          ],
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
        {
          path: '/PostDetail',
          name: 'PostDetail',
          component: PostDetail,
        },
        {
          path: '/PersonalZone',
          name: 'PersonalZone',
          component: PersonalZone,
        },
        {
          path: '/PersonalInformation',
          name: 'PersonalInformation',
          component: PersonalInformation,
        },
        {
          path: '/Group',
          name: 'Group',
          component: Group,
        },
        {
          path: '/EditPost',
          name: 'EditPost',
          component: EditPost,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Questions',
      name: 'Questions',
      component: Questions,
    },
  ],
});
