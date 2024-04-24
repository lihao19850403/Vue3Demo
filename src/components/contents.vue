<template>
	<header>
		<h2>目录</h2>
	</header>
	
	<div class="part">
		<li v-for="(part, index) in contents" :key="part.path" @click="partIndex=index;">
			第{{index+1}}部分<br />{{part.name}}
		</li>
	</div>
	<div class="chapter">
		<li v-for="(chapter, index) in contents[partIndex].chapters" :key="chapter.path" @click="nav(chapter.path)">
			第{{index+1}}节：{{chapter.name}}
		</li>
	</div>
	<footer></footer>
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
			contents: CONTENTS.allInfos,
			partIndex: 0
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
h2 {
	min-width: 480px;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.part {
	display: flex;
	overflow: scroll;
	min-width: 480px;
}
.part li {
	list-style-type: none;
	text-align: center;
	color: #FFF;
	background: #5D478B;
	min-width: 160px;
	height: 60px;
	line-height: 20px;
	padding-top: 10px;
	border: 1px solid #FFF;
	border-width: 1px 1px 0 0;
	box-sizing: border-box;
	font-size: 15px;
	flex: 1;
}
.part li:hover {
	color: #FFF;
	background: #FF8C69;
}
.chapter {
	display: flex;
	flex-direction: column;
}
.chapter li {
	list-style-type: none;
	text-align: center;
	color: #FFF;
	background: #5D478B;
	min-width: 480px;
	height: 40px;
	line-height: 20px;
	padding-top: 10px;
	border: 1px solid #FFF;
	border-width: 1px 1px 0 0;
	box-sizing: border-box;
	font-size: 14px;
}
.chapter li:hover {
	color: #FFF;
	background: #FF8C69;
}
footer {
	height: 60px;
}
</style>