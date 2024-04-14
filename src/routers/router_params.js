const sidebarTemplate = `
<div>
	<ul>
		<router-link v-for="(item, index) in menu" :key="index" :to="item.url" tag="li">{{item.name}}</router-link>
	</ul>
</div>
`;
const mainTemplate = `
<div>
	<router-view></router-view>
</div>
`;
const formTemplate = `
<div>
	<form>
		<div>
			<label for="exampleInputEmail1">邮箱</label>
			<input type="email" id="exampleInputEmail1" placeholder="输入电子邮件" v-model="email">
		</div>
		<div>
			<label for="exampleInputPassword1">密码</label>
			<input type="password" id="exampleInputPassword1" placeholder="输入密码" v-model="password">
		</div>
		<button type="submit" @click="submit">提交</button>
	</form>
</div>
`;
const infoTemplate = `
<div>
	<div>输入的信息</div>
	<div>
		<blockquote>
			<p>邮箱：{{$route.params.email}}</p>
			<p>密码：{{$route.params.password}}</p>
		</blockquote>
	</div>
</div>
`;

const header = { template: `<div class="header">头部</div>` };
const sidebar = { 
	template: sidebarTemplate ,
	data: function() {
		return {
			menu: [
				{
					displayName: "Form",
					routeName: "form"
				},
				{
					displayName: "Info",
					routeName: "info"
				},
			]
		};
	}
};
const main = { template: mainTemplate };
const form = {
	template: formTemplate,
	data: function() {
		return {
			email: "",
			password: ""
		};
	},
	methods: {
		submit: function() {
			this.$router.push({
				name: "base_params_info",
				params: {
					email: this.email,
					password: this.password
				}
			});
		}
	}
};
const info = { template: infoTemplate };

const RouterParams = [
	{ 
		path: "/base/params",
		name: "base_params",
		components: {
			default: header,
			sidebar: sidebar,
			main: main
		},
		children: [
			{
				path: "",
				name: "form",
				redirect: { name: "base_params_form" }
			},
			{
				path: "form",
				name: "base_params_form",
				component: form
			},
			{
				path: "info/:email/:password",
				name: "base_params_info",
				component: info
			}
		],
	},
];

export default RouterParams;