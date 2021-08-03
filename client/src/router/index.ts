import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/jquery/dist/jquery.js";

// import Home from '../views/Home.vue'
import Home from '../page/Home/home.vue';
import Login from '../page/Login/login.vue';
import SignUp from '../page/SignUp/signup.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      msg:"Welcome to Your Vue.js + TypeScript App", 
      info:"This your first time working with vue js"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
