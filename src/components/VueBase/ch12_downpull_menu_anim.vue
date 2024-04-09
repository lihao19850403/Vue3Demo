<template>
	<button @click="show=!show">主页</button>
	<transition name="fade">
		<ul v-if="show">
			<li>经典课程</li>
			<ul>
				<li>Python开发课程</li>
				<li>Java开发课程</li>
				<li>网站前端开发课程</li>
			</ul>
			<li>热门技术</li>
			<ul>
				<li>前端开发技术</li>
				<li>网络开发技术</li>
				<li>PHP开发技术</li>
			</ul>
			<li>畅销教材</li>
			<ul>
				<li>网站前端开发教材</li>
				<li>C语言入门教材</li>
				<li>Python开发教材</li>
			</ul>
		</ul>
	</transition>
</template>

<script>
export default {
	name: 'ch12_downpull_menu_anim',
	props: {
		ch_title: {
			type: String,
			default: "ch12：综合案例--设计下拉菜单的过渡动画"
		}
	},
	data: function() {
		return {
			show: false
		};
	}
}
</script>

<style scoped>
#app {
	background-color: #CEFFCE;
	width: 300px;
}
#app ul {
	height: 9 rem;
	overflow-x: hidden;
}
.fade-enter-from, .fade-leave-to {
	height: 0;
}
.fade-enter-active, .fade-leave-active {
	transition: height 0.5s;
}
</style>