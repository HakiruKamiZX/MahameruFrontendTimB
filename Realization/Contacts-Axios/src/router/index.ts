import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import FriendsList from '../views/FriendsList.vue'
import EditContact from '../views/EditContact.vue'
import NewContact from '../views/NewContact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/FriendsList'
  },
  {
    path: '/FriendsList',
    name: 'FriendsList',
    component: FriendsList
  },
  {
    path: '/EditContact',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/NewContact',
    name: 'NewContact',
    component: NewContact
  },
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
