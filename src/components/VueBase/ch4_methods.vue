<template>
	输入内容：<input type="text" v-model="message"><br />
	反转内容：{{ reversedMessage() }}<br />
	<h2>{{ num }}</h2>
	<p>
		<button v-on:click="add(2)">增加</button>
	</p>
</template>

<script>
export default {
	name: 'ch4_methods',
	props: {
		ch_title: {
			type: String,
			default: "ch4：方法选项"
		}
	},
	data: function() {
		return {
			message: "",
			num: 1
		};
	},
	methods: {
		reversedMessage: function() {
			return this.message.split('').reverse().join('');
		},
		innerMethod: function(step=1) {
			this.num += step;
		},
		add: function(step=1) {
			this.innerMethod(step);
		}
	}
}
</script>

<style>
</style>