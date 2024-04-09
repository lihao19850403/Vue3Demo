<template>
	<h3>监听keyup事件：</h3>
	<p>
		姓名：<input type="text" @keyup="nameWatch" v-model="name"/>
	</p>
	<p>
		密码：<input type="password" @keyup="passwordWatch" v-model="password"/>
	</p>
	<h3>只监听回车键的keyup事件：</h3>
	<p>
		输入内容后按回车键：<input type="text" @keyup.enter="contentWatch" v-model="content"/>
	</p>
	<h3>监听组合键事件（比如shift+k）：</h3>
	<p>
		输入内容后按组合键shift+k：<input type="text" @keyup.shift.k="multikeysWatch" v-model="multikeys"/>
	</p>
	<h3>使用exact精确控制按键（防止误触）：</h3>
	<p>
		仅能通过Ctrl+A确认，混入其他按键（比如Ctrl+Shift+A）则不触发：<input type="text" @keyup.ctrl.a.exact="exactWatch" v-model="exact"/>
	</p>
</template>

<script>
export default {
	name: 'ch8_event_keys',
	props: {
		ch_title: {
			type: String,
			default: "ch8：按键修饰符与系统修饰键"
		}
	},
	data: function() {
		return {
			name: "",
			password: "",
			content: "",
			multikeys: "",
			exact: ""
		};
	},
	methods: {
		nameWatch: function() {
			console.log("现在姓名数据是：" + this.name);
		},
		passwordWatch: function() {
			console.log("现在密码数据是：" + this.password);
		},
		contentWatch: function() {
			console.log("已确认输入内容：" + this.content);
		},
		multikeysWatch: function() {
			console.log("组合键输入内容：" + this.multikeys);
		},
		exactWatch: function() {
			console.log("精确控制按键：" + this.exact);
		}
	}
}
</script>

<style>
</style>