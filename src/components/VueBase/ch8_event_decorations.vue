<template>
	<h3>stop：阻止事件冒泡（向父容器传播）。</h3>
	<div class="outside1" @click="outsider1()">
		<div class="inside1" @click.stop="insider1()">冒泡事件</div>
	</div>
	<h3>capture：从父容器开始捕获，一直捕获至最深层子容器。</h3>
	<div class="outside2" @click.capture="outsider2()">外层
		<div class="center2" @click.capture="center2()">中间
			<div class="insider2" @click="insider2()">内部</div>
		</div>
	</div>
	<h3>self：只有直接作用在本控件上的动作才会被执行，并继续正常的冒泡行为；如果在其他控件的冒泡或捕获过程中到达本控件，则直接跳过。</h3>
	<div class="outside2" @click="outsider3()">外层
		<div class="center2" @click.self="center3()">中间
			<div class="insider2" @click="insider3()">内部</div>
		</div>
	</div>
	<h3>once：动作或修饰符只执行一次。</h3>
	<div class="outside1">
		<button class="inside1" @click.once="clickOnce()">单击一次</button>
	</div>
	<h3>prevent：阻止控件默认行为。</h3>
	<p>
		<a href="https://www.baidu.com" @click.prevent="">阻止&lt;a&gt;标签的跳转动作。</a>
	</p>
	<p>
		<button @click.prevent="alert()">令按钮的单击动作无效</button>
	</p>
</template>

<script>
export default {
	name: 'ch8_event_decorations',
	props: {
		ch_title: {
			type: String,
			default: "ch8：事件处理与修饰符"
		}
	},
	data: function() {
		return {
			
		};
	},
	methods: {
		outsider1: function() {
			console.log("outsider1");
		},
		insider1: function() {
			console.log("insider1");
		},
		outsider2: function() {
			console.log("outsider2");
		},
		center2: function() {
			console.log("center2");
		},
		insider2: function() {
			console.log("insider2");
		},
		outsider3: function() {
			console.log("outsider3");
		},
		center3: function() {
			console.log("center3");
		},
		insider3: function() {
			console.log("insider3");
		},
		clickOnce: function() {
			console.log("click once.")
		},
		alert: function() {
			alert("Hello world!");
		}
	}
}
</script>

<style scoped>
.outside1 {
	width: 200px;
	height: 100px;
	border: 1px solid black;
	text-align: center;
}
.inside1 {
	width: 100px;
	height: 50px;
	border: 1px solid black;
	margin: 25px 50px;
	line-height: 50px;
}
.outside2 {
	width: 300px;
	height: 200px;
	color: white;
	font-size: 30px;
	background: red;
}
.center2 {
	width: 200px;
	height: 150px;
	background: #17A2B8;
}
.insider2 {
	width: 100px;
	height: 100px;
	background: #A9B4BA;
}
</style>