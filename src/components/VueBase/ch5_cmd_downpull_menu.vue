<template>
	<div>
		<li v-for="(menu, index) in menus" @mouseover="menu.show=!menu.show" @mouseout="menu.show=!menu.show" :key="index">
			<a :href="menu.url">{{menu.name}}</a>
			<div v-show="menu.show">
				<template v-for="(subMenu, index) in menu.subMenus" :key="index">
					<a :href="subMenu.url">{{subMenu.name}}</a>
				</template>
			</div>
		</li>
	</div>
</template>

<script>
export default {
	name: 'ch5_cmd_downpull_menu',
	props: {
		ch_title: {
			type: String,
			default: "ch5：综合案例--通过指令实现下拉菜单效果"
		}
	},
	data: function() {
		return {
			menus: [
				{
					name: "在线课程", 
					url: "", 
					show: false, 
					subMenus: [
						{ name: "Python课程", url: "javascript:alert('Python课程')" },
						{ name: "Java课程", url: "javascript:alert('Java课程')" },
						{ name: "前端课程", url: "javascript:alert('前端课程')" }
					]
				},
				{
					name: "经典图书", 
					url: "", 
					show: false, 
					subMenus: [
						{ name: "Python图书", url: "javascript:alert('Python图书')" },
						{ name: "Java图书", url: "javascript:alert('Java图书')" },
						{ name: "前端图书", url: "javascript:alert('前端图书')" }
					]
				},
				{
					name: "技术支持", 
					url: "", 
					show: false, 
					subMenus: [
						{ name: "Python技术支持", url: "javascript:alert('Python技术支持')" },
						{ name: "Java技术支持", url: "javascript:alert('Java技术支持')" },
						{ name: "前端技术支持", url: "javascript:alert('前端技术支持')" }
					]
				},
				{
					name: "关于我们", 
					url: "", 
					show: false, 
					subMenus: [
						{ name: "团队介绍", url: "javascript:alert('团队介绍')" },
						{ name: "联系我们", url: "javascript:alert('联系我们')" }
					]
				}
			],
		};
	}
}
</script>

<style scoped>
div {
	display: flex;
	width: 480px;
	overflow: scroll;
	margin-left: -8px;
	margin-right: -8px;
}
a {
	display: block;
	text-decoration: none;
	color: #FFF;
	width: 120px;
	height: 40px;
	line-height: 40px;
	border: 1px solid #FFF;
	border-width: 1px 1px 0 0;
	background: #5D478B;
	box-sizing: border-box;
}
li {
	list-style-type: none;
	text-align: center;
}
li a:hover {
	color: #FFF;
	background: #FF8C69;
}
li div {
	display: flex;
	flex-direction: column;
	width: 120px;
	margin-top: 0;
	margin-left: 0;
	margin-right: 0;
	font-size: 12px;
}
[v-cloak] {
	display: none;
}
</style>