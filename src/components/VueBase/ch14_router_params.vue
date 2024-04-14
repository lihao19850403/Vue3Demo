<template>
	<div class="style1">
		<router-view></router-view>
	</div>
	<div class="main">
		<router-view name="main"></router-view>
	</div>
</template>

<script>
import RouterParams from "../../routers/router_params.js";

export default {
	name: 'ch14_router_params',
	props: {
		ch_title: {
			type: String,
			default: "ch14：路由传参"
		},
		children_router: {
			type: Array,
			default: () => RouterParams
		}
	},
	data: function() {
		return {
			
		};
	},
	mounted: function() {
		this.$router.replace({
			name: "form"
		});
	},
}
</script>

<style scoped>
.style1 {
	background: #0BB20C;
	color: white;
	padding: 15px;
	margin: 15px 0;
}
.main {
	padding: 10px;
}
</style>