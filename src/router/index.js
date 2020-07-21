// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
//  声明要使用的插件
Vue.use(VueRouter)

// 创建一个路由数组
const routes = [
  // 默认显示的路由
  {
    path: '/',
    redirect: MSite
  },
  // --
  {
    path: '/msite',
    component: MSite,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  }
]

// 配置实例路由对象
const router = new VueRouter({
  // 数组
  routes
})

export default router
