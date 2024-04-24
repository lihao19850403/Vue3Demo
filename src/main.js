import { createApp } from 'vue'
import App from './App.vue'

/* normalize.css默认样式。 */
import "normalize.css"

/* Animate.css动画。 */
import 'animate.css';

/* Vuex全局状态机管理。 */
import store from "./stores/index.js"

/* Vue-Router路由管理。 */
import * as VueRouter from "vue-router";

/* 所有目录。 */
import CONTENTS from "../src/routers/contents.js"

const Router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes: CONTENTS.toRouters
});

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
app.use(store);
app.use(Router);
app.mount('#app');