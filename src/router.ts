import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "logins" */ '@/views/logins.vue'),
    },
    {
      path: '/appconfig',
      component: () => import('@/views/common.vue'),
      redirect: '/appconfig/project',
      name: 'appconfig',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: 'project',
          name: 'project',
          component: () => import('@/views/project.vue'),
        },
        {
          path: 'config',
          name: 'config',
          component: () => import('@/views/proConfig.vue'),
        },
      ],
      beforeEnter: (to, from, next) => {
        console.log(to);
        next();
      },
    },
  ],
});
