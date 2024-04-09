<template>
	<div>
		商品名称：
		<input v-model="name"/>
	</div>
	<button @click="cut">减一个</button>
	购买数量：{{count}}
	<button @click="add">加一个</button>
	<button @click="addCart">加入购物车</button>
	<div v-for="(item, index) in list" :key="index">
		{{item.name}}×{{item.count}}
	</div>
</template>

<script>
export default {
	name: 'ch7_watch',
	props: {
		ch_title: {
			type: String,
			default: "ch7：综合案例--使用监听器设计购物车效果"
		}
	},
	data: function() {
		return {
			name: "",
			count: 0,
			isMax: false,
			list: []
		};
	},
	methods: {
		cut: function() {
			this.count = this.count - 1;
			this.isMax = false;
		},
		add: function() {
			this.count = this.count + 1;
		},
		addCart: function() {
			this.list.push({
				name: this.name,
				count: this.count
			})
		}
	},
	watch: {
		count: {
			handler: function(newValue, oldValue) {
				if (newValue > 10) {
					this.isMax = true;
				}
				if (newValue < 0) {
					this.count = 0;
				}
			}
		},
		name: {
			handler: function(newValue, oldValue) {
				this.count = 0;
				this.isMax = false;
			}
		}
	}
}
</script>

<style>
</style>