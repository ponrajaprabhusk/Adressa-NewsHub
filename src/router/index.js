import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopHeadlineView from '@/views/TopHeadlineView.vue';
import AllNewsView from '@/views/AllNewsView.vue';
import SportsView from '@/views/SportsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/headlines',
      name: 'headlines',
      component: TopHeadlineView
    },
    {
      path: '/AllNews',
      name: 'all-news',
      component: AllNewsView
    },
    {
      path: '/sports',
      name: 'sports',
      component: SportsView
    },
    // {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    // }
  ]
});

export default router
