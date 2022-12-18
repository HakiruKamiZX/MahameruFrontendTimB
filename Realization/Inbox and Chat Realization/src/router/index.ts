import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import InboxPage from '../views/InboxPage.vue'
import NewChatPage from '../views/NewChatPage.vue'
import ViewChatPage from '../views/ViewChatPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/inbox'
  },
  {
    path: '/inbox',
    name: 'InboxChat',
    component: InboxPage
  },
  {
    path: '/newchat',
    name: 'NewChat',
    component: NewChatPage
  },
  {
    path: '/viewchat',
    name: 'ViewChat',
    component: ViewChatPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
