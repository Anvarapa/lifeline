import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";
import customer from '../pages/customer';
import ResetPassword from '../pages/Life-resetPassword'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title:'Home'
    }
  },
  {
    path: "/customer",
    name: "customer",
    component: customer,
    meta:{
      title:'customer'
    }
  },
  {
    path: "/login",
    name:"Login",
    component: Login,
    meta: {
      title: "Login"
    }
  },
  {
    path: "/register",
    name:"Register",
    component: Register,
    meta: {
      title: "Register"
    }
  },
  {
    path: "/forgot-password",
    name:"ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "ForgotPassword"
    }
  },
  {
    path: "/reset-password",
    name:"ResetPassword",
    component: ResetPassword,
    meta: {
      title: "ResetPassword"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
document.title = `${to.meta.title}| LIFELINE`;
next();
})

export default router;
