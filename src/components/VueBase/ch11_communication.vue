<template>
	<parent></parent>
</template>

<script>
export default {
	name: 'ch11_communication',
	props: {
		ch_title: {
			type: String,
			default: "ch11：组件间传递数据"
		}
	},
	data: function() {
		return {
			
		};
	},
	components: {
		parent: {
			data: function() {
			    return {
				    name: "待接收",
					price: "待接收",
					num: "待接收"	
				};
			},
			methods: {
				childData: function(info) {
					console.log("接收到了事件参数：" + JSON.stringify(info));
					this.name = info.name;
					this.price = info.price;
					this.num = info.num;
				}
			},
			template:`
				<div>
				    <h3>父容器监听data事件，并用childData函数作为事件被接收时候的回调。</h3>
					<child @data="childData"></child>
					<ul>
						<li>名称：{{name}}</li>
						<li>单价：{{price}}</li>
						<li>数量：{{num}}</li>
					</ul>
				</div>
			`
		},
	},
}
</script>

<style>
</style>