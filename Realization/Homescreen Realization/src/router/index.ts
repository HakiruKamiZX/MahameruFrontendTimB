import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import HomePage from '../views/HomePage.vue';
import UsersPage from '../views/UsersPage.vue';
import ChannelPage from '../views/ChannelPage.vue';
import EditProfile from '../views/EditProfile.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        name: 'Home',
        component: HomePage
      },
      {
        path: 'users',
        name: 'Users',
        component: UsersPage
      },
      {
        path: 'channel',
        name: 'Channel',
        component: ChannelPage
      },
    ]
  },
  {
    path : '/editprofile',
    name: 'EditProfile',
    component: EditProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
