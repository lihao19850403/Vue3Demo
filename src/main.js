import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css';

const app = createApp(App);
app.component("blog-title", {
	props: [
		'dataTitle'
	],
	template: `
	    <h3>{{dataTitle}}</h3>
	`
});
app.component("child", {
	data: function() {
		return {
		    info: {
				name: "哈密瓜",
				price: "8.66",
				num: "2600公斤"
			}	
		};
	},
	methods: {
		handleClick: function() {
			// 单击时候发送如下事件：名称是data，值是info对象。
			this.$emit("data", this.info);
		}
	},
	template: `
	    <button @click="handleClick()">显示子组件的数据</button>
	`
});
app.mount('#app');