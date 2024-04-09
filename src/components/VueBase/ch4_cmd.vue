<template>
	<p>
		<a v-bind:[attr]="url">百度一下，你就知道</a>
	</p>
	<p>
		<button v-on:[things]="doSomething()">单击事件</button>
	</p>
</template>

<script>
export default {
	name: 'ch4_cmd',
	props: {
		ch_title: {
			type: String,
			default: "ch4：指令"
		}
	},
	data: function() {
		return {
			attr: "href",
			things: "click",
			url: "https://www.baidu.com"
		};
	},
	methods: {
		doSomething: function() {
			alert("触发了单击事件！");
		}
	}
}
</script>

<style>
</style>