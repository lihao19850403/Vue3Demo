<template>
	<p>Vuex状态机</p>
	<h3>商品名称：{{this.$store.state.store_name}}</h3>
	<h3>商品价格：{{this.$store.state.store_price}}</h3>
	<h3>涨价后的价格：{{this.$store.getters.getPrice}}</h3>
	<div>
		修改商品价格：
		<input style="text-align: right;" type="number" v-model="newPrice"/>元&nbsp;
		<button @click="updatePrice">更新</button>
	</div>
</template>

<script>
export default {
	name: 'ch16_vuex_normal',
	props: {
		ch_title: {
			type: String,
			default: "ch16：Vuex状态机"
		}
	},
	data: function() {
		return {
			newPrice: this.$store.state.store_price
		};
	},
	methods: {
		updatePrice: function() {
			// 直接修改值：
			// this.$store.state.store_price = this.newPrice;
			// 或者通过mutations提交修改：
			let delta = this.newPrice - this.$store.state.store_price; // 差价。
			this.$store.commit("updatePrice", {
				num: delta
			});
		}
	}
}
</script>

<style>
</style>