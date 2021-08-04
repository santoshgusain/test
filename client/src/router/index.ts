import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/jquery/dist/jquery.js";

// import Home from '../views/Home.vue'
import Home from '../page/Home/home.vue';
import Login from '../page/Login/login.vue';
import SignUp from '../page/SignUp/signup.vue';
import Dashboard from '../page/Dashboard/dashboard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      msg:"Assignment Vue.js", 
      info:"Create a login and signup functionality"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
