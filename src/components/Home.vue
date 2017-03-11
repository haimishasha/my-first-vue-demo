<template>
  <div class="hello">
    <h1>Home-路由</h1>
    <p>
      <!-- 两种方法进行-编程式的导航 -->
      <!-- 1.声明式导航 -->
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <h1>两种方法进行-编程式的导航</h1>
      <h2>1.声明式导航</h2>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/content">Go to content</router-link>
      <router-link to="/user/123">Go to user</router-link>
      <!-- 注意此处的冒号不能省略 -->
      <router-link :to="{ name: 'user', params: { id: 234 }}">user</router-link>

      <br>
      <!-- 2.编程式导航 -->
      <h2>2.编程式导航</h2>
      <button @click='toFoo'>toFoo</button>
      <button @click='toBar'>toBar</button>
      <button @click='toContent'>toContent</button>
      <button @click='toUser'>toUser</button>
      <button @click='toBack'>返回上一步</button>
      
     <!--  <h2>3.命名视图测试</h2>
     <router-link to="/layout">test layout</router-link> -->
     <h2>3.重定向测试</h2>
     <ul>
        <li>
          <router-link to="/a">/a (redirects to /foo)</router-link>
        </li>
        
        <li>
          <router-link to="/b">/b (redirects to /bar)</router-link>
        </li>
        <li>
          <router-link to="/c">/c (redirects to /content)</router-link>
        </li>
        <li>
          <router-link to="/d">/d (alais to /ddd)</router-link>
        </li>
       
      </ul>
    </p>

    <h2>4.组件测试</h2>
    <router-link to="/page">to page</router-link>

    <h2>5.组件之间的通信测试</h2>
    <router-link to="/tongxin">to tongxin</router-link>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'home',
  methods:{


    //编程式导航
    //router.push()这个方法会向 history 栈添加一个新的记录，
    //所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
    toFoo(){
      //1.字符串
      this.$router.push('foo')
    },

    toBar(){
      //2.对象
      this.$router.push({ path: 'bar' })
    },

    toUser(){
      //3.命名的路由
      // 此处的id必须和index.js里面定义的一致
      this.$router.push({ name: 'user', params: { id: 123 }}) 
    },

    toContent(){
      //4.带查询参数，变成 /content?plan=private
      this.$router.push({ path: 'content', query: { plan: 'private' }})
    },

    toBack(){
      //5.意思是在 history 记录中向前或者后退多少步
      this.$router.go(-1)
    }
  }
}
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
/*
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
*/