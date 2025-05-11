import { routerList } from '@/core/constants/routers';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: routerList.home.path,
    name: routerList.home.name,
    component: () => import('@/modules/home/views/HomeView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: routerList.about.path,
    name: routerList.about.name,
    component: () => import('@/modules/about/views/AboutView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: routerList.example.path,
    name: routerList.example.name,
    component: () => import('@/modules/example/views/ExampleView.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: routerList.home.name },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
