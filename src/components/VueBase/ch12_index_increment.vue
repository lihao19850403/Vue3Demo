<template>
	<transition-group>
		<div v-for="item in list" :key="item.id">{{ item.title }}</div>
	</transition-group>
	<button @click="handleBtnAdd">增加商品</button>
	<button @click="handleBtnRemove">减少商品</button>
</template>

<script>
export default {
	name: 'ch12_index_increment',
	props: {
		ch_title: {
			type: String,
			default: "ch12：综合案例--商品编号增加器"
		}
	},
	data: function() {
		return {
			count: 0,
			list: []
		};
	},
	methods: {
		handleBtnAdd: function() {
			this.list.push({
				id: this.count++,
				title: "商品编号：" + this.count
			});
		},
		handleBtnRemove: function() {
			this.list.pop();
		}
	}
}
</script>

<style scoped>
.v-enter-from, .v-leave-to {
	opacity: 0;
}
.v-enter-active, .v-leave-active {
	transition: opacity 2s;
}
</style>