<template>
	<h3>请求本地资源：</h3>
	<button @click="getLocalInfo()">请求本地信息</button>
	<br />
	<textarea style="width: 80%;height: 100px" v-model="localInfo"></textarea>
	<h3>远程访问数据：</h3>
	<button @click="postRemoteInfo()">请求远程信息</button>
	<br />
	<textarea style="width: 80%;height: 100px" v-model="remoteInfo"></textarea>
	<h3>同时发出请求：</h3>
	<button @click="multiRequests()">请求远程信息</button>
	<br />
	<textarea style="width: 80%;height: 100px" v-model="multi"></textarea>
</template>

<script>
import Axios from "axios";

export default {
	name: 'ch15_axios_normal',
	props: {
		ch_title: {
			type: String,
			default: "ch15：网络请求库axios"
		}
	},
	data: function() {
		return {
			localInfo: "",
			remoteInfo: "",
			multi: ""
		};
	},
	methods: {
		getLocalInfo: function() {
			this.localInfo = 'loading...';
			Axios.get("http://localhost:8081/data/user.json")
				.then(response => this.localInfo = JSON.stringify(response.data))
				.catch(error => this.localInfo = error + "\n\n有可能本地url端口号已改变，需要调整本地端口号。");
		},
		postRemoteInfo: function() {
			this.remoteInfo = 'loading...';
			const postParams = { title: "Vue POST Request Example" };
			Axios.post("https://reqres.in/api/articles", postParams)
				.then(response => this.remoteInfo = JSON.stringify(response.data))
				.catch(error => this.remoteInfo = error);
		},
		multiRequests: function() {
			this.multi = 'loading...';
			let requests = [
				Axios.get("http://localhost:8081/data/user.json"),
				Axios.post("https://reqres.in/api/articles", { 
					title: "Vue POST Request Example" 
				})
			];
			Axios.all(requests)
				.then(Axios.spread((response1, response2) => {
					this.multi = "响应1：\n" + JSON.stringify(response1.data) + "\n\n响应2：\n" + JSON.stringify(response2.data)
				}))
				.catch(error => this.multi = error);
		}
	}
}
</script>

<style>
</style>