<template>
	<h2>目录</h2>
	<dl v-for="(part, index) in contents" :key="part.path">
		<dt>第{{index+1}}部分：{{part.name}}</dt>
		<dd v-for="(chapter, index) in part.chapters" :key="chapter.path">
			<button @click="nav(chapter.path)">第{{index+1}}节：{{chapter.name}}</button>
		</dd>
	</dl>
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
dl {
	text-align: left;
}
dl dt {
	font-weight: bold;
}
dl dd {
	list-style-type: none; 
	margin-left: 0;
}
dl dd button {
	font-size: 13px;
	margin-bottom: 3px;
}
</style>