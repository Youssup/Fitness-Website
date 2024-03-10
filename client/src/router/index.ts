import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import Admin from '../pages/Admin.vue'
import Activities from '../pages/Activities.vue'
import Friends from '../pages/Friends.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
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

export default router
