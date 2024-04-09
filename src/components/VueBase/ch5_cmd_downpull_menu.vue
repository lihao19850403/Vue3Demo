<template>
	<li v-for="(menu, index) in menus" @mouseover="menu.show=!menu.show" @mouseout="menu.show=!menu.show" :key="index">
		<a :href="menu.url">{{menu.name}}</a>
		<ul v-show="menu.show">
			<li v-for="(subMenu, index) in menu.subMenus" :key="index">
				<a :href="subMenu.url">{{subMenu.name}}</a>
			</li>
		</ul>
	</li>
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
					url: "#", 
					show: false, 
					subMenus: [
						{ name: "Python课程", url: "#" },
						{ name: "Java课程", url: "#" },
						{ name: "前端课程", url: "#" }
					]
				},
				{
					name: "经典图书", 
					url: "#", 
					show: false, 
					subMenus: [
						{ name: "Python图书", url: "#" },
						{ name: "Java图书", url: "#" },
						{ name: "前端图书", url: "#" }
					]
				},
				{
					name: "技术支持", 
					url: "#", 
					show: false, 
					subMenus: [
						{ name: "Python技术支持", url: "#" },
						{ name: "Java技术支持", url: "#" },
						{ name: "前端技术支持", url: "#" }
					]
				},
				{
					name: "关于我们", 
					url: "#", 
					show: false, 
					subMenus: [
						{ name: "团队介绍", url: "#" },
						{ name: "联系我们", url: "#" }
					]
				}
			],
		};
	}
}
</script>

<style scoped>
a {
	text-decoration: none;
	display: block;
	color: #FFF;
	width: 120px;
	height: 40px;
	line-height: 40px;
	border: 1px solid #FFF;
	border-width: 1px 1px 0 0;
	background: #5D478B;
}
li {
	list-style-type: none;
}
#app > li {
	list-style-type: none;
	float: left;
	text-align: center;
	position: relative;
}
#app li a:hover {
	color: #FFF;
	background: #FF8C69;
}
#app li ul {
	position: absolute;
	left: -40px;
	margin-top: 1px;
	top: 40px;
	font-size: 12px;
}
[v-cloak] {
	display: none;
}
</style>