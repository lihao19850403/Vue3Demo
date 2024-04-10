<script>
import CONTENTS from "../src/routers/contents.js"

export default {
	name: 'App',
	mounted: function() {
		this.$router.push({
			path: CONTENTS.toRouters[0].path,
		});
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

<template>
	<router-view></router-view>
</template>