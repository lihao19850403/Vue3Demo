<template>
	<h3>在style中定义，在body中使用：</h3>
	<div class="static" v-bind:class="['class1','class2']">
		{{data}}
	</div>
	<h3>或者在data中建立样式的链接，再在body中使用：</h3>
	<div class="static" v-bind:class="[class_1,class_2]">
		{{data}}
	</div>
	<h3>或者使用样式对象来控制控件样式：</h3>
	<div class="static" v-bind:class="objStyle">
		{{data}}
	</div>
	<h3>或者使用计算属性来代替样式对象：</h3>
	<div class="static" v-bind:class="classObject">
		{{data}}
	</div>
	<h3>如果是标签的内联样式，则使用v-bind:style来引用（需要将连接线改为驼峰命名）：</h3>
	<div class="static" v-bind:style="[innerStyle1, innerStyle2]">
		{{data}}
	</div>
</template>

<script>
export default {
	name: 'ch9_class_style',
	props: {
		ch_title: {
			type: String,
			default: "ch9：绑定html样式"
		}
	},
	data: function() {
		return {
			data: "从军玉门道，逐虏金微山。",
			class_1: "class1",
			class_2: "class2",
			objStyle: {
				class1: true,
				class2: true
			},
			innerStyle1: {
				background: "#79FF79",
				fontSize: "20px",
				textAlign: "center",
				lineHeight: "100px"
			},
			innerStyle2: {
				width: "400px",
				height: "100px"
			}
		};
	},
	computed: {
		classObject: function() {
			return {
				class1: true,
				class2: true
			}
		}
	}
}
</script>

<style scoped>
.static {
	color: white;
}
.class1 {
	background: #79FF79;
	font-size: 20px;
	text-align: center;
	line-height: 100px;
}
.class2 {
	width: 400px;
	height: 100px;
}
</style>