<template>
	<div>
		<img v-bind:src="url" width="450">
	</div>
	<h2>
		{{ explain }}
	</h2>
</template>

<script>
export default {
	name: 'ch2_welcome',
	props: {
		ch_title: {
			type: String,
			default: "ch2：第一个Vue.js程序"
		}
	},
	data: function() {
		return {
			url: require("../../assets/img/mis.jpeg"),
			explain: "苹果是蔷薇科苹果亚科苹果属植物，其营养价值很高。"
		};
	},
}
</script>

<style>
</style>