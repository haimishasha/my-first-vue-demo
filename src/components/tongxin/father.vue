<template>
	<div>
		<h2>我是父亲组件</h2>
		<span>我要传给大儿子的信息是(动态prop)：</span>
		<input v-model="messageToSon">
		<br>
		<!-- v-bind动态 -->
		<v-son1 :message-from-father='messageToSon'></v-son1>

		
		<h2>我是父亲组件</h2>
		<div id="counter-event-example">
		  <p>total:{{ total }}</p>
		  <!-- 父亲监视孩子的方法 -->
		  <v-son2 v-on:increment="incrementTotal"  v-model='price' v-on:child-msg="handleIt"></v-son2>
		  <v-son2 v-on:increment="incrementTotal"  v-model='price' v-on:child-msg="handleIt"></v-son2>
		</div>
			
		<br>
		<span>二儿子传给我的的信息是：</span>
		<p>{{ messageFromSon | json }}</p>
	</div>
</template>


<script>
	import vSon1 from './son1.vue';
	import vSon2 from './son2.vue';
	export default{
		name:'father',
		data(){
			return{
				messageToSon:'message to my big son',
				total:0,
				price:0.09,
				messageFromSon:[],
			}
		},
		components:{
			vSon1, vSon2, 
		},
		methods:{
			incrementTotal(){
				this.total += 1
			},
			//使用 v-on 绑定时，父组件不需要定义到 events 中，而是 methods。
			handleIt: function(msg){
	          this.messageFromSon.push(msg)
			},
		},
		
	}
</script>