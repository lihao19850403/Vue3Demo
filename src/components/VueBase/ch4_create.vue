<template>
	<!-- 简单的文本插值。 -->
	<h2>{{ message }}</h2>
	<!-- 一次性差值（赋值一次后不会改变）。 -->
	<span v-once>{{ message }}</span>
	<!-- 仅文本。 -->
	<h2>{{ website }}</h2>
	<!-- 渲染出真正的html。 -->
	<span v-html="website"></span>
	<!-- 使用表达式。 -->
	<h2>{{ title.toUpperCase() }}</h2>
	<!-- 进行计算。 -->
	<p>苹果总共{{ price * total }}元。</p>
</template>

<script>
export default {
	name: 'ch4_create',
	props: {
		ch_title: {
			type: String,
			default: "ch4：插值"
		}
	},
	data: function() {
		return {
			message: "萧萧梧叶送寒声，江上秋风动客情。",
			website: "<a href='https://www.baidu.com'>百度一下，你就知道</a>",
			title: "apple",
			price: 5,
			total: 260
		};
	},
}
</script>

<style>
</style>