// router.js
import { createRouter, createWebHistory } from 'vue-router';
import DashBoard from '../components/DashBoard.vue';
import FormLogin from '../components/FormLogin.vue';
import FormRegister from '../components/FormRegister.vue';
import SideBar from '../components/SideBar.vue'
import UserDetail from '../components/UserDetail.vue'
import Counter from '../components/Counter.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: FormLogin
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: FormRegister
  },
  {
    path: '/sidebar',
    name: 'sidebar',
    component: SideBar
  },
  {
    path: '/user/:id',
    name: 'userDetail',
    component: UserDetail
  },
  {
    path: '/counter',
    name: 'counter',
    component: Counter
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from) => {
  if (to.name !== 'login' && !localStorage.getItem('accessToken')) {
      router.push({ name: 'login' });
  }
  if(to.name === 'login' && localStorage.getItem('accessToken')){
    router.push({ name: 'dashboard' });
  }
})

export default router;
