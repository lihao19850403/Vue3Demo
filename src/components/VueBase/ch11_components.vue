<template>
	<h3>普通组件：</h3>
	<blog-content style="background-color: yellow;" :data-title="content"></blog-content>
	<h3>组件间传递值：</h3>
	<wrap-content></wrap-content>
	<h3>组件有多个属性并进行属性验证：</h3>
	<my-component :name="'苹果'" :price="2.86" :num="2800"></my-component>
</template>

<script>
export default {
	name: 'ch11_components',
	props: {
		ch_title: {
			type: String,
			default: "ch11：组件及prop属性的使用"
		}
	},
	data: function() {
		return {
			content: "玉瘦檀轻无限恨，南楼羌管休吹。"
		};
	},
	components: {
		blogContent: {
			props: [
				'dataTitle'
			],
			template: "<h3>{{dataTitle}}</h3>",
			created: function() {
				console.log("组件已创建：" + this.dataTitle)
			}
		},
		wrapContent: {
			data() {
				return {
					title: "明朝准你南轩望，洗出庐山万丈青。"
				};
			},
			template: `
			    <div style='background-color: yellow;'>
				    <h3>容器</h3>
				    <blog-title v-bind:data-title="title"></blog-title>
				</div>
			`
		},
		myComponent: {
			props: {
				name: {
					type: String,
					default: "待定"
				},
				price: {
					type: Number,
					default: 0
				},
				num: {
					type: Number,
					default: 0
				}
			},
			template: `
			    <ul>
				    <li>商品名：{{name}}</li>
					<li>单价：{{price}}元</li>
					<li>购买数量：{{num}}公斤</li>
				</ul>
			`
		}
	}
}
</script>

<style>
</style>