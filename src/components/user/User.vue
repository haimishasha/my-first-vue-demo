<template>
	<div class="user">
       	<h2>你好，我是动态路由 User {{ $route.params.id }}</h2>
        <router-view></router-view> 
    </div>
</template>


<script>
export default {
  	name: 'user',
  	watch:{
	    '$route' (to, from) {
	      	// 对路由变化作出响应...
	      	//alert('路由变化了'+to.path+"-"+from.path);
	      	const toDepth = to.path.split('/').length
		    const fromDepth = from.path.split('/').length
		    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
	    }
	}
}
</script>