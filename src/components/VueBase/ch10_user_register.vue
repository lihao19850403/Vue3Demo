<template>
	<form @submit.prevent="handleSubmit()">
		用户名称：
		<input type="text" v-model="user.userName"/><br />
		用户密码：
		<input type="password" v-model="user.pwd"/><br />
		性别：
		<input type="radio" id="female" value="female" v-model="user.gender"/>女
		<input type="radio" id="male" value="male" v-model="user.gender"/>男<br />
		喜欢的技术：
		<input type="checkbox" id="basketball" value="Java开发" v-model="user.hobbys"/>Java开发
		<input type="checkbox" id="football" value="Python开发" v-model="user.hobbys"/>Python开发
		<input type="checkbox" id="pingpang" value="PHP开发" v-model="user.hobbys"/>PHP开发<br />
		就业城市：
		<select v-model="user.selCityId">
			<option value="">未选择</option>
			<option v-for="city in citys" :value="city.id" :key="city.id">
				{{city.name}}
			</option>
		</select><br />
		自我介绍：<br />
		<textarea rows="5" cols="30" v-model="user.desc" ></textarea><br /><br />
		<input type="submit" value="注册"/>
	</form>
</template>

<script>
export default {
	name: 'ch10_user_register',
	props: {
		ch_title: {
			type: String,
			default: "ch10：综合案例--设计用户注册页面"
		}
	},
	data: function() {
		return {
			user: {
				userName: "",
				pwd: "",
				gender: "female",
				hobbys: [],
				selCityId: "",
				desc: ""
			},
			citys: [
				{
					id: 1,
					name: "北京"
				},
				{
					id: 2,
					name: "上海"
				},
				{
					id: 3,
					name: "广州"
				}
			]
		};
	},
	methods: {
		handleSubmit: function() {
			console.log(JSON.stringify(this.user));
		}
	}
}
</script>

<style>
</style>