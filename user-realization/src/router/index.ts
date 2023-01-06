import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = 
  {
    
    {
      path: '/RegisterUser',
      component: ()=> import('@/views/RegisterUser.vue')
      },
    {
      path: '/UserProfile:id',
      component: ()=> import('@/views/UserProfile.vue')
      },
    {
      path: '/Home',
      component: () => import('@/views/HomePage.vue'),
      },
  }


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
