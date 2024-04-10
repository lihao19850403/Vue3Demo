import Vue from "vue";
import * as VueRouter from "vue-router";

const header = { template: `<div>头部内容</div>` };
const sidebar = { template: `<div>侧边栏导航内容</div>` };
const main = { template: `<div>正文部分</div>` };

const RouterFrame = [
	{ 
		path: "/", 
		components: {
			default: header,
			sidebar: sidebar,
			main: main
		},
	},
];

export default RouterFrame;