import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from '@/pages/coaches/CoachDetail.vue';
import CoachesList from '@/pages/coaches/CoachesList.vue';
import CoachRegistration from '@/pages/coaches/CoachRegistration.vue';
import RequestReceived from '@/pages/requests/RequestReceived.vue';
import ContactCoach from '@/pages/requests/ContactCoach.vue';
import NotFoundVue from '@/pages/NotFoundVue.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: CoachesList
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {
          path: 'contact',  // /coaches/c1/contact
          component: ContactCoach
        }
      ]
    },
    {
      path: '/register',
      component: CoachRegistration
    },
    {
      path: '/requests',
      component: RequestReceived
    },
    {
      path: '/:notFound(.*)',
      component: NotFoundVue
    }

  ]


});


export default router;