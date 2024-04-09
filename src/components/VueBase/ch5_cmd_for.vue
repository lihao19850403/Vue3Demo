<template>
	<h3>普通的for-in：</h3>
	<ul>
		<li v-for="item in nameList" v-bind:key="item.token">
			{{item.name}}--{{item.city}}--{{item.price}}元
		</li>
	</ul>
	<h3>带index的for-in：</h3>
	<ul>
		<li v-for="(item, index) in nameList"  v-bind:key="item.token">
			{{index+1}}，{{item.name}}--{{item.city}}--{{item.price}}元
		</li>
	</ul>
	<h3>带index和键名的for-in：</h3>
	<ul>
		<li v-for="product in nameList" v-bind:key="product">
			<span v-for="(value, key, index) in product" v-show="index!=3"  v-bind:key="value.token">【{{index+1}}】{{key}}:{{value}}</span>
		</li>
	</ul>
	<h3>使用计算属性来过滤列表（价格超过7000）：</h3>
	<ul>
		<li v-for="item in computedList"  v-bind:key="item.token">
			{{item.name}}--{{item.city}}--{{item.price}}元
		</li>
	</ul>
	<h3>也可先过滤再显示列表（价格超过7000）：</h3>
	<ul>
		<li v-for="item in filteredList()"  v-bind:key="item.token">
			{{item.name}}--{{item.city}}--{{item.price}}元
		</li>
	</ul>
	<h3>或者遍历整数：</h3>
	<span v-for="num in 20"  v-bind:key="num">{{num}}&nbsp;</span>
	<h3>和v-bind:key一起使用，以便按照关键字来操作元素：</h3>
	<div>名称：<input type="text" v-model="name"/></div>
	<div>产地：<input type="text" v-model="city"/></div>
	<div>价格：<input type="text" v-model="price"/></div>
	<button @click="add()">添加这组新数据</button>
	<hr />
	<p v-for="item in nameList" v-bind:key="item.token">
		<input type="checkbox"/>
		<span>{{item.name}}，{{item.city}}，{{item.price}}，{{item.token}}</span>
	</p>
</template>

<script>
export default {
	name: 'ch5_cmd_for',
	props: {
		ch_title: {
			type: String,
			default: "ch5：for指令"
		}
	},
	data: function() {
		return {
			name: "",
			city: "",
			price: "",
			nameList: [
				{ name: "洗衣机", city: "上海", price: 8600, token: "1" },
				{ name: "冰箱", city: "北京", price: 6800, token: "2" },
				{ name: "空调", city: "广州", price: 5900, token: "3" }
			],
		};
	},
	computed: {
		computedList: function() {
			return this.nameList.filter(function(item) {
				return item.price > 7000;
			});
		}
	},
	methods: {
		add: function() {
			var newToken = Date.now();
			this.nameList.push({
				name: this.name,
				city: this.city,
				price: this.price,
				token: newToken + ""
			});
		},
		filteredList: function() {
			return this.nameList.filter(function(item) {
				return item.price > 7000;
			});
		}
	}
}
</script>

<style>
</style>