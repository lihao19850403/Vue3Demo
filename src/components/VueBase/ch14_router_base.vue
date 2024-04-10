<template>
	<!-- 通过router-link标签来生成导航链接。 -->
	<router-link to="/home">首页</router-link>&nbsp;
	<router-link to="/list">古诗欣赏</router-link>&nbsp;
	<router-link to="/about">关于我们</router-link>
	<div class="container">
		<!-- 将选中的路由渲染到router-view下。 -->
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'ch14_router_base',
	props: {
		ch_title: {
			type: String,
			default: "ch14：Vue Router的使用"
		}
	},
	data: function() {
		return {
			
		};
	},
}
</script>

<style scoped>
#app {
	text-align: center;
}
.container {
	background-color: #73FFD6;
	margin-top: 20px;
	height: 100px;
}
</style>