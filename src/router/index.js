import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import ForgotPassword from "../views/ForgotPassword";
import Register from "../views/Register";
import customer from '../views/customer'

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
