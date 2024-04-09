<template>
	<p>{{ message + num }}</p>
	<button v-on:click="change()">改变页面内容</button>
</template>

<script>
export default {
	name: 'ch4_lifecycle',
	props: {
		ch_title: {
			type: String,
			default: "ch4：生命周期钩子函数"
		}
	},
	data: function() {
		return {
			message: "白日照绿草，落花散且飞。",
			num: 0
		};
	},
	methods: {
		change: function() {
			this.message = "孤云还空山，众鸟各已归。";
			this.num++;
		}
	},
	/* 以下为内置生命周期函数。 */
	beforeCreate: function() {
		console.log("beforeCreate");
	},
	created: function() {
		console.log("created");
	},
	beforeMount: function() {
		console.log("beforeMount");
	},
	mounted: function() {
		console.log("mounted");
	},
	beforeUpdate: function() {
		console.log("beforeUpdate");
	},
	updated: function() {
		console.log("updated");
	}
}
</script>

<style>
</style>