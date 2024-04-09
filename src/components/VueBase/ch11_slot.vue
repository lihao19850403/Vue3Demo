<template>
	<h3>带有插槽的自定义组件：</h3>
	<page1>提交</page1><br />
	<h3>带有多个插槽位置的自定义组件：</h3>
	<page-layout>
		<template #header>
			<h2 align="center">书河上亭壁</h2>
		</template>
		<template #footer>
			<p align="right">经典古诗</p>
		</template>
		<!-- 此处必须标记slot是main部分，因为自定义组件中全是带有name的插槽，已经没有默认值是default的插槽了，如果不标记slot的位置，那么最终下面这个模板将会无法被找到。 -->
		<template #main>
			<h3>岸阔樯稀波渺茫，独凭危槛思何长。</h3>
			<h3>萧萧远树疏林外，一半秋山带夕阳。</h3>
		</template>
	</page-layout>
	<h3>父容器访问插槽内的数据（子容器插槽通过v-bind:values向外公开数据）：</h3>
	<inner-slot>
		<template #default="slotProps">{{slotProps.values.name}}</template>
	</inner-slot>
	<h3>父容器对子容器插槽数据进行解构：</h3>
	<page2>
		<template #default="{values: info}">{{info.firstContent}}<br />{{info.secondContent}}</template>
	</page2>
</template>

<script>
export default {
	name: 'ch11_slot',
	props: {
		ch_title: {
			type: String,
			default: "ch11：slot"
		}
	},
	data: function() {
		return {
			
		};
	},
	components: {
		page1: {
			template: `
				<button type="submit">
					<slot>Submit</slot>
				</button>
			`
		},
		pageLayout: {
			template: `
				<div>
					<header>
						<slot name="header"></slot>
					</header>
					<main>
						<!-- 如果不写name属性，默认是default。 -->
						<slot name="main"></slot>
					</main>
					<footer>
						<slot name="footer"></slot>
					</footer>
				</div>
			`
		},
		innerSlot: {
			data: function() {
				return {
					info: {
						name: "苹果",
						price: 8.86,
						city: "深圳"
					}
				};
			},
			template: `
				<button>
					<slot :values="info">{{info.city}}</slot>
				</button>
			`
		},
		page2: {
			data: function() {
				return {
					verse: {
						firstContent: "此心随去马，迢递过千峰。",
						secondContent: "野渡波摇月，空城雨翳钟。"
					}
				};
			},
			template: `
				<span>
					<slot :values="verse"></slot>
				</span>
			`
		}
	}
}  
</script>

<style>
</style>