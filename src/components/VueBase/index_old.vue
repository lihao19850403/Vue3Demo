<template>
	{{ message }}
	<div>
		<img width="100" v-bind:src="url"/>
	</div>
	<h2 v-once>{{ explain }}</h2>
	<!-- 简单的文本插值。 -->
	<h2>{{ website }}</h2>
	<!-- 替换html标签。 -->
	<h2 v-html="website"></h2>
	<!-- 使用js表达式。 -->
	<h2>{{ message.toUpperCase() }}</h2>
	<p>苹果总共{{ price * total }}元</p>
	输入内容：<input type="text" v-model="inputValue"/><br />
	反转之后：{{ reversedMessage }}
	<br/><button v-on:click="add(2)">当前值：{{ num }}</button>
	<!-- 方法之间的调用。 -->
	<p>{{ content }}</p>
	<p v-once>{{ way2() }}</p>
	<!-- 指令。 -->
	<a :[attr]="attrUrl">点击跳转至百度首页。</a><br />
	<button @[callbacks]="callbackFunc">点击执行事件</button><br />
	<h1 v-show="show">控制显隐。</h1>
	<ul>
		<li v-for="(item, index) of nameList" v-show="item.price > 0" v-bind:key="JSON.stringify(item) + index">
			{{ index + 1 }}: {{ item.name }} - {{ item.city }} - {{ item.price }}元
		</li>
		<br />
		<template v-for="(item, index) in nameList" v-bind:key="JSON.stringify(item) + index">
			<li v-if="item.price > 0">{{ index + 1 }}: {{ item.name }} - {{ item.city }} - {{ item.price }}元</li>
		</template>
		<br />
		<li v-for="(item, index) of nameLists" v-show="item.price > 0" v-bind:key="JSON.stringify(item) + index">
			{{ index + 1 }}: {{ item.name }} - {{ item.city }} - {{ item.price }}元
		</li>
	</ul>
	<!-- 此处不能在CLI中通过编译。 -->
	<!-- <p v-html="htmlText">整体更新innerHTML</p> -->
	<p v-pre>显示原始标签：{{ message }}</p>
	<input type="text" v-on:keyup.enter="finishInput" v-on:keyup.ctrl.space="changeIME" v-model="focusText" v-focus /><br />
	<!-- 固定位置。 -->
	<p style="background-color: blue;" v-pin:right="200">固定位置</p>
	<!-- watch监听。 -->
	分钟：<input type="text" v-model="minutes"/>秒：<input type="text" v-model="seconds"/>
	<!-- 事件冒泡。 -->
	<div style="background-color: green; width: 300; height: 300; display: flex;" @click="outter">
		<div style="background-color: red; width: 150; height: 150;" @click.stop="inner">
			<span style="color: white; align-self: center;">单击</span>
		</div>
	</div>
	<!-- 样式选择。 -->
	<div class="static" v-bind:class="objectStyle">竹色溪下绿荷花镜里香</div>
	<!-- 自定义组件。 -->
	<button-counter content="目前的值是:"></button-counter>
</template>

<script>
var linesText =
`江南好，风景旧曾谙。
日出江花红胜火，
春来江水绿如蓝。
能不忆江南？`;
console.log(linesText);

function fn(a, b, ...args) {
	console.log(a);
	console.log(b);
	console.log(args);
}
fn(100, 200, 300, 400, 500, 600, 700, 800, 900);
			
function test(a, b, c) {
	console.log(...arguments)
}
var params = [1, 2, 3];
test(...params);

// 自定义组件。
const myComponent = {
	data() {
		return {
			num: 1000,
		};
	},
	methods: {
		reduce() {
			this.num--;
		}
	},
	props: {
		content: {
			type: String,
			default: ""
		},
	},
	template: `<button @click='reduce'>{{ content }}{{ num }}</button>`,
};

export default {
	name: 'index_old',
	props: {
		ch_title: {
			type: String,
			default: "ch0：老页面"
		}
	},
	data: function() {
		return {
			message: "Hello world",
			url: require("../../assets/img/mis.jpeg"),
			explain: "苹果是蔷薇科苹果亚科苹果属植物。其营养价值很高。",
			website: "<a href='https://www.baidu.com'>百度</a>",
			price: 20,
			total: 5,
			inputValue: "",
			num: 1,
			content: "古诗",
			attr: "href",
			attrUrl: "https://www.baidu.com",
			callbacks: "click",
			show: true,
			nameList: [
				{ name: "洗衣机", city: "上海", price: 8600 },
				{ name: "冰箱", city: "北京", price: 6800 },
				{ name: "空调", city: "广州", price: 5900 },
				{ name: "不存在", city: "未知", price: -9000 }
			],
			htmlText: "<h3 style='color:red'>红色</h3>",
			minutes: 0,
			seconds: 0,
			focusText: "",
			objectStyle: {
				class1: true,
				class2: true,
			}
		};
	},
	computed: {
		nameLists: {
			get: function() {
				return this.nameList.filter((item) => item.city === "上海");
			}
		},
		reversedMessage: {
			get: function() {
				return this.inputValue.split("").reverse().join("");
			},
			set: function(newMsg) {
				this.inputValue = newMsg;
			}
		}
	},
	methods: {
		add(step = 1) {
			this.num+=step;
		},
		way1() {
			alert("床前明月光疑是地上霜。");
		},
		way2() {
			// this.$options.methods.way1();
			this.way1();
		},
		callbackFunc() {
			alert("动态绑定点击事件。");
		},
		outter() {
			console.log("外部事件。");
		},
		inner() {
			console.log("内部事件。");
		},
		finishInput() {
			console.log(`已经完成了输入：${this.focusText}`);
		},
		changeIME() {
			console.log("尝试切换输入法。");
		}
	},
	directives: {
		focus: {
			mounted: function(el) {
				console.log("已加入DOM");
				el.focus();
			}
		},
		pin: {
			beforeMount: function(el, binding, vnode) {
				el.style.position = "fixed";
				let s = binding.arg || "left";
				el.style[s] = binding.value + "px";
			}
		}
	},
	watch: {
		minutes: {
			handler: function(newValue) {
				console.log("新值: " + newValue);
				this.seconds = newValue * 60;
			}
		},
		seconds: {
			handler: function(newValue, oldValue) {
				console.log(`新值：${newValue}，旧值：${oldValue}`);
				this.minutes = newValue / 60;
			}
		},
	},
	components: {
		ButtonCounter: myComponent,
	},
	beforeCreate: () => console.log("beforeCreate"),
	created: () => console.log("created"),
	beforeMount: () => console.log("beforeMount"),
	mounted: () => console.log("mounted"),
	beforeUpdate: () => console.log("beforeUpdate"),
	updated: () => console.log("updated"),
}

// setTimeout(() => {
// 	this.data.message = "空山新雨后天气晚来秋。";
// 	this.data.show = false;
// }, 3000);
</script>

<style scoped>
.static {
	color: white;
}
.class1 {
	background: #5151A2;
	font-size: 20px;
	text-align: center;
	line-height: 100px;
}
.class2 {
	width: 300px;
	height: 100px;
}
</style>