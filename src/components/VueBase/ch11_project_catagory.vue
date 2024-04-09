<template>
	<categoty-component :list="categories"></categoty-component>
</template>

<script>
export default {
	name: 'ch11_project_catagory',
	props: {
		ch_title: {
			type: String,
			default: "ch11：综合案例--使用组件创建树状项目分类"
		}
	},
	data: function() {
		return {
			categories: [
				{
					name: "网站开发技术",
					children: [
						{
							name: "前端开发技术",
							children: [
								{ name: "HTML5开发技术" },
								{ name: "Javascript开发技术" },
								{ name: "Vue.js开发技术" }
							]
						},
						{
							name: "PHP后端开发技术"
						}
					]
				},
				{
					name: "网络安全技术",
					children: [
						{
							name: "Linux系统安全"
						},
						{
							name: "代码审计安全"
						},
						{
							name: "渗透测试安全"
						}
					]
				}
			]
		};
	},
	components: {
		CategotyComponent: {
			name: "catCamp",
			props: {
				list: {
					type: Array
				}
			},
			template: `
				<ul>
					<!-- 如果list为空，则结束递归（无子分类）。 -->
					<template v-if="list">
						<li v-for="cat in list">
							{{cat.name}}
							<!-- 递归调用自身。 -->
							<catCamp :list="cat.children"></catCamp>
						</li>
					</template>
				</ul>
			`
		}
	}
}
</script>

<style>
</style>