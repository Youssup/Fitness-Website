import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import Admin from '../pages/Admin.vue'
import Activities from '../pages/Activities.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities
    }
  ]
})

export default router
