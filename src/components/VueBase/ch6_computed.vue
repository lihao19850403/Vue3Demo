<template>
	<div>
		<div>
			<h3 align="center">商品购物车</h3>
		</div>
		<div>
			<div>
				<label>
					<input type="checkbox" v-model="checkAll" />全选
				</label>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button type="button" @click="checkNo()">反选</button>
			</div>
			<ul>
				<li v-for="item in list" :key="item.id">
					<div>
						<label>
							<input type="checkbox" v-model="item.checked"/>{{item.name}}
						</label>
						￥{{item.price}}
						&nbsp;&nbsp;&nbsp;&nbsp;
						<button type="button" @click="item.nums>1?item.nums-=1:1">－</button>
						数量：{{item.nums}}
						<button type="button" @click="item.nums+=1">＋</button>
						&nbsp;&nbsp;&nbsp;&nbsp;
						小计：{{item.nums*item.price}}
					</div>
				</li>
			</ul>
			<p align="right">
				总价：{{sumPrice}}
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button type="button" @click="save()">提交订单</button>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ch6_computed',
	props: {
		ch_title: {
			type: String,
			default: "ch6：综合案例--使用计算属性设计购物车效果"
		}
	},
	data: function() {
		return {
			list: [
				{
					id: 1,
					name: "洗衣机",
					checked: true,
					price: 6800,
					nums: 1
				},
				{
					id: 2,
					name: "电视机",
					checked: true,
					price: 4900,
					nums: 1
				},
				{
					id: 3,
					name: "饮水机",
					checked: true,
					price: 1000,
					nums: 3
				}
			]
		};
	},
	computed: {
		checkAll: {
			get: function() {
				return this.list.length === this.list.filter(item => item.checked == true).length;
			},
			set: function(newValue) {
				this.list.forEach(item => item.checked = newValue);
			}
		},
		sumPrice: {
			get: function() {
				return this.list
				.filter(item => item.checked)
				.reduce((pre, cur) => pre + cur.price * cur.nums, 0);
			}
		}
	},
	methods: {
		checkNo: function() {
			this.list.forEach(item => item.checked = !item.checked);
		},
		save: function() {
			console.log(this.list.filter(item => item.checked));
		}
	}
}
</script>

<style>
</style>