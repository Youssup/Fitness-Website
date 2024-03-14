import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import Admin from '../pages/Admin.vue'
import Activities from '../pages/Activities.vue'
import Friends from '../pages/Friends.vue'
import { getSession } from '@/viewModel/session'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/Activities',
      name: 'activities',
      component: Activities
    },
    {
      path: '/Friends',
      name: 'friends',
      component: Friends
    }
  ]
})

router.beforeEach((to, from, next) => {
  const session = getSession();
  if(['/login'].includes(to.path) && !session.user){
  console.log('beforeEach', to, from);
  next('/login');
  }
  else{
    next();
  }
})

export default router
