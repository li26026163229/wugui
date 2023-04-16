import Vue from 'vue'
import App from './App.vue'
//引入路由表文件
import router from './router'

//配置 flexible
import "lib-flexible";
//添加小图标
import "./assets/font/iconfont.css";

Vue.config.productionTip = false

new Vue({
  router,//挂载到根节点
  render: h => h(App)
}).$mount('#app')
