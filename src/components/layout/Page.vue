<template>
	<div id='page'>
		<h1>page-测试组件-全局</h1>
		<!-- 测试成功 -->
		<my-component></my-component>
		<my-component2></my-component2>
		<my-main></my-main>
		<my-header></my-header>
		<my-sidebar></my-sidebar>
		<my-footer></my-footer>
		
		<h1>page-测试组件2-局部</h1>
		<v-head></v-head>
        <v-sidebar></v-sidebar>
		<!-- 没有测试成功 -->
		<!-- <router-view class="view one"></router-view>
		<router-view class="view two" name="header"></router-view>
		<router-view class="view three" name="sidebar"></router-view>
		<router-view class="view four" name="footer"></router-view> -->

		<!-- 动态组件 -->
		<h1>page-测试动态组件</h1>
		<div id="dynamic">
		    <button  @click="changeView('v-head')">header</button>
		    <button  @click="changeView('v-main')">main</button>
		    <button  @click="changeView('v-footer')">footer</button>
		    <button  @click="changeView('v-sidebar')">sidebar</button>
		    <br>
		    <component :is="currentView"></component>
		</div>
	</div>
</template>


<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
	import vMain from './Main.vue'
	import vFooter from './Footer.vue'
    export default {
    	data(){
			return {
				currentView:"v-head"
			}
		},
        components:{
            vHead, vSidebar, vMain, vFooter
        },
        methods:{

			changeView(message){

				this.currentView =  message
			}
		}
    }
</script>

