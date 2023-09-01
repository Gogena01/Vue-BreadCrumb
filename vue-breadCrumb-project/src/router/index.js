import { createRouter, createWebHistory } from 'vue-router';
import wildCard from './routes/wildcard';
import routes from './routes.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    ...wildCard
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
