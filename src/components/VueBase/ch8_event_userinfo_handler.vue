<template>
	<p>{{msg}}</p>
	<button v-on:click="handleClick()">单击按钮</button>
	&nbsp;&nbsp;&nbsp;&nbsp;
	<button @click="handleClick()">单击按钮</button>
	<h3>选择感兴趣的技术</h3>
	<select v-on:change="handleChange()">
		<option value="red">网站前端技术</option>
		<option value="green">Python编程技术</option>
		<option value="pink">Java编程技术</option>
	</select>
	<h3>表单提交</h3>
	<form v-on:submit.prevent="handleSubmit()">
		<input type="checkbox" v-on:click="handleDisabled()"/>
		<span>同意本站协议</span>
		<br />
		<br />
		<button :disabled="isDisabled">注册</button>
	</form>
</template>

<script>
export default {
	name: 'ch8_event_userinfo_handler',
	props: {
		ch_title: {
			type: String,
			default: "ch8：综合案例--处理用户注册信息"
		}
	},
	data: function() {
		return {
			msg: "注册账户",
			isDisabled: true
		};
	},
	methods: {
		handleClick: function() {
			console.log("按钮被单击！");
		},
		handleChange: function() {
			console.log("选择了某个选项：" + event.target.value);
		},
		handleSubmit: function() {
			console.log("触发了表单提交事件！");
		},
		handleDisabled: function() {
			console.log("更改了可用性！现在是：" + event.target.checked);
			if (event.target.checked == true) {
				this.isDisabled = false;
			} else {
				this.isDisabled = true;
			}
		}
	}
}
</script>

<style>
</style>