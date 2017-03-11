<!-- 子组件模板，孩子给父亲的信息 -->
<template>
	<div>
		<h2>我是二孩子</h2>
		<button v-on:click="increment">v-on监视：{{ counter }}</button>
	    <input v-model="msg">
	    <button v-on:click="notify">Dispatch Event</button>
	    <br>
	    <span> $
	    	<input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)">
		</span>
	</div>
</template>

<script>
	export default{
		name:'little-boy',
		data(){
			return{
				counter: 0,
				value: 0.00,
				msg:"Father, I want an apple"
			}
		},
		props: ['value'],
		methods:{
			notify(){
				if (this.msg.trim()) {
		            this.$emit('child-msg', this.msg);
		            this.msg = ''
		        }
			},
			increment(){
				this.counter += 1
      			this.$emit('increment')
			},
			// 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
		    updateValue: function (value) {
		      var formattedValue = value
		        // 删除两侧的空格符
		        .trim()
		        // 保留 2 小数位
		        .slice(0, value.indexOf('.') + 3)
		      // 如果值不统一，手动覆盖以保持一致
		      if (formattedValue !== value) {
		        this.$refs.input.value = formattedValue
		      }
		      // 通过 input 事件发出数值
		      this.$emit('input', Number(formattedValue))
		    },
		  
		}
	}
</script>

