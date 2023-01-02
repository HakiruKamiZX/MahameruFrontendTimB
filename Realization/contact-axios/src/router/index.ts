import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/FriendsList'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/FriendsList'
      },
      {
        path: 'FriendsList',
        component: () => import('@/views/FriendsList.vue')
      },
      {
        path: 'EditContact',
        component: () => import('@/views/EditContact.vue')
      },
      {
        path: 'NewContact',
        component: () => import('@/views/NewContact.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
