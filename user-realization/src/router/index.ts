import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
//   {
//     // path: '/tabs/',
//     path: '/',
//     // component: TabsPage,
//     component: RegisterUserVue,
//     // children: [
//     //   // {
//     //   //   path: '/',
//     //   //   redirect: '/tabs/NewFriend'
//     //   // },
//     //   // {
//     //   //   path: 'NewFriend',
//     //   //   component: () => import('@/views/NewFriend.vue')
//     //   // },
//     //   // {
//     //   //   path: 'EditContact',
//     //   //   component: () => import('@/views/EditContact.vue')
//     //   // },
//     //   // {
//     //   //   path: 'NewContact',
//     //   //   component: () => import('@/views/NewContact.vue')
//     //   // },
//     //   // {
//     //   //   path: 'ChatRoom',
//     //   //   component: ()=> import('@/views/ChatRoom.vue')
//     //   // },
//     //   {
//     //     path: 'RegisterUser',
//     //     component: ()=> import('@/views/RegisterUser.vue')
//     //   },
//     //   {
//     //     path: 'UserProfile/:id',
//     //     component: ()=> import('@/views/UserProfile.vue')
//     //   },
//     //   {
//     //     path: 'Home',
//     //     component: () => import('@/views/HomePage.vue'),
//     //   },
//     // ]
//   },
	{
		path: '/',
		redirect: '/register'
	},
	{
        path: '/register',
        component: ()=> import('@/views/RegisterUser.vue')
    },
    {
        path: '/userprofile/:id',
        component: ()=> import('@/views/UserProfile.vue')
    },
    {
      path: '/home',
      component: () => import('@/views/HomePage.vue'),
	},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
