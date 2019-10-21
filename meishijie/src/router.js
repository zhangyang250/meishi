import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// 引入 尾部.vue
import Weibu from "./views/Weibu.vue"
// 引入晒美食.vue
import Shai from "./views/Shai.vue"
// 引入zhu.vue
import Zhu from "./views/Zhu.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Zhu',component:Zhu},
    {path:'/Shai',component:Shai},
    {path:'/Weibu',component:Weibu},
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
