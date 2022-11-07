import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main.vue'
import product from "./product.js";
import DashBoardRoutes from "./DashBoard.js";
Vue.use(Router)

export default new Router({
  mode: "history",
  base: "",
  routes: [
    {
      path: "/payroll/",
      redirect: "/payroll/dashboard"
    },
    {
      path: '/payroll',
      component: Main,
      redirect: "/payoll/dashboard",
      children:[
        ...DashBoardRoutes,
        ...product
      ]
    }
  ]
})
