import Vue from 'vue'
//引入 路由 的文件
import VueRouter from 'vue-router'
import Movie from '../views/home/Movie.vue'

//使用插件
Vue.use(VueRouter)

//定义路由表
const routes = [
  {
    path: '/',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/video',
    name: 'Video',
    //路由懒加载 当触发点击跳转到这一页时，才加载这一页的组件 
    component: () => import(/* webpackChunkName: "video" */ '../views/Video.vue')
  },
  {
    path: '/minivideo',
    name: 'MiniVideo',
    component: () => import(/* webpackChunkName: "minivideo" */ '../views/MiniVideo.vue')
  },
  {
    path: '/show',
    name: 'Show',
    component: () => import(/* webpackChunkName: "show" */ '../views/Show.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue')
  },

]

//创建 路由对象
const router = new VueRouter({
  routes
})

//将路由对象输出
export default router
