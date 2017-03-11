<!-- 父亲给孩子的信息 -->
<template>
	<div>
		<h2>我是大孩子</h2>
		<span>父亲给我传过来的值是:{{ messageFromFather }}</span>
	</div>
</template>

<script>
	export default{
		name:'big-boy',
		
		//props: ['messageFromFather'],  //prop是一个字符串数组
		props:{
			messageFromFather:String,	//prop是一个对象
		}
	}
</script>