<template>
	<div class="style1">
		<router-view></router-view>
	</div>
	<div class="container">
		<router-view name="sidebar"></router-view>
		<router-view name="main"></router-view>
	</div>
</template>

<script>
import RouterFrame from "../../routers/router_frame.js";

export default {
	name: 'ch14_router_frame',
	props: {
		ch_title: {
			type: String,
			default: "ch14：命名视图"
		},
		children_router: {
			type: Array,
			default: () => RouterFrame
		}
	},
	data: function() {
		return {
			
		};
	},
	mounted: function() {
		this.$router.replace({
			name: "base_frame"
		});
	},
}
</script>

<style scoped>
.style1 {
	height: 20vh;
	background: #0BB20C;
	color: white;
}
.style2 {
	background: #9e8158;
	float: left;
	width: 30%;
	height: 70vh;
	color: white;
}
.style3 {
	background: #2D309E;
	float: right;
	width: 70%;
	height: 70vh;
	color: white;
}
</style>