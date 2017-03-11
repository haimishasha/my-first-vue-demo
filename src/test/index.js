//模块化机制编程需要用到Vue和Router
import Vue from 'vue'
import Router from 'vue-router'
//用于测试跳转
import Home from '@/components/Home'
import Content from '@/components/Content'
//用于测试路由(动态路由、嵌套路由)
import User from '@/components/user/User'
import UserPosts from '@/components/user/UserPosts'
import UserProfile from '@/components/user/UserProfile'
//用于测试命名视图
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import Main from '@/components/Main'
import Footer from '@/components/layout/Footer'
//需要调用Router
Vue.use(Router)


// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div><h2>foo</h2></div>' }
const Bar = { template: '<div><h2>bar<h2></div>' }
const NotFoundComponent = {template: '<div>not found 404</div>'}


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/',          name: 'home',        component: Home},
  { path: '/foo',       name: 'foo',         component: Foo },
  { path: '/bar',       name: 'bar',         component: Bar },
  { path: '/content',   name: 'content',     component: Content},
  { path: '/main', component: Main},
  // 动态路径参数 以冒号开头
  { 
    path: '/user/:id',  
    //命名路由，之后使用命名路由必须和此处的name完全一致
    name: 'user',       
    component: User, 
    //嵌套路由
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'profile',
        component: UserProfile
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'posts',
        component: UserPosts
      }
    ]
  },
  
  /*{ path: '*',          name: '404',        component: NotFoundComponent }*/
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。

export default new Router({
  /*mode: 'history',*/
  routes, // （缩写）相当于 routes: routes
  /*// 当hashbang的值为true时，所有的路径都会被格式化已#!开头，
    hashbang: false,
    history: true,
    saveScrollPosition: true,*/
})



/*// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！*/