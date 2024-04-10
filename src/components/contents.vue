<template>
	<h2>目录</h2>
	<ul style="text-align: left;" v-for="(part, index) in contents" :key="part.path">
		<span style="font-weight: bold;">第{{index+1}}部分：{{part.name}}</span>
		<li style="list-style-type: none;" v-for="(chapter, index) in part.chapters" :key="chapter.path">
			<button style="font-size: 13px;margin-bottom: 3px;" @click="nav(chapter.path)">第{{index+1}}节：{{chapter.name}}</button>
		</li>
		<br />
	</ul>
</template>

<script>
/* 所有目录。 */
import CONTENTS from "../routers/contents.js";

export default {
	name: 'contents_page',
	props: {
		ch_title: {
			type: String,
			default: "目录"
		}
	},
	data: function() {
		return {
			contents: CONTENTS.allInfos
		};
	},
	methods: {
		nav: function(destPath) {
			this.$router.push({
				path: destPath
			});
		}
	}
}
</script>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>