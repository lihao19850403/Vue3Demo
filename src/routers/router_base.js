const home = { template: `<div>主页内容</div>` };
const list = { template: `<div>我不践斯境，岁月好已积。晨夕看山川，事事悉如昔。</div>` };
const about = { template: `<div>需要技术支持请联系作者微信。</div>` };

const RouterBase = [
	{
		path: "/base/home",
		name: "base_home",
		component: home
	},
	{
		path: "/base/list",
		name: "base_list",
		component: list
	},
	{
		path: "/base/about",
		name: "base_about",
		component: about
	},
];

export default RouterBase;