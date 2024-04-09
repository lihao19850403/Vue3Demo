<template>
	<table>
		<tr>
			<th>编号</th>
			<th>名称</th>
			<th>库存</th>
			<th>价格</th>
			<th>产地</th>
		</tr>
		<tr v-for="(good, index) in goods" v-bind:key="good.id" v-bind:class="{even:index%2===0}">
			<td>{{good.id}}</td>
			<td>{{good.title}}</td>
			<td>{{good.num}}</td>
			<td>{{good.price}}</td>
			<td>{{good.city}}</td>
		</tr>
	</table>
</template>

<script>
export default {
	name: 'ch9_shop_list',
	props: {
		ch_title: {
			type: String,
			default: "h9：综合案例--设计隔行变色的商品表"
		}
	},
	data: function() {
		return {
			goods: [
				{
					id: 1,
					title: "洗衣机",
					num: "2800台",
					price: 188,
					city: "北京"
				},
				{
					id: 2,
					title: "电视机",
					num: "2600台",
					price: 188,
					city: "广州"
				},
				{
					id: 3,
					title: "冰箱",
					num: "5400台",
					price: 188,
					city: "上海"
				},
				{
					id: 4,
					title: "空调",
					num: "1800台",
					price: 188,
					city: "北京"
				},
			]
		};
	},
	methods: {
		deleteItem(index) {
			this.goods.splice(index, 1);
		}
	}
}
</script>

<style scoped>
[v-cloak] {
	display: none;
}
body {
	width: 600px;
}
table {
	width: 100%;
	border: 2px solid black;
}
th {
	height: 50px;
}
th, td {
	border-bottom: 1px solid black;
	text-align: center;
}
.even {
	background-color: #7AFEC6;
}
</style>