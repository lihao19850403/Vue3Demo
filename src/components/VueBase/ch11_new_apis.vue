<template>
	<!-- setup() -->
	<post-item :post-content="content"></post-item>
	<!-- 监听响应式对象。 -->
	<button @click="state.count++">计数器改变</button><br /><br />
	<!-- readonly() -->
	<button @click="rodata.attr.age++">尝试修改只读数据</button>&nbsp;&nbsp;&nbsp;&nbsp;修改结果：{{rodata}}<br />
	<!-- computed() -->
	<p>原始字符串：{{message}}</p>
	<p>反转字符串：{{reversedMessage}}</p>
	<!-- watch() -->
	<p>watch监视两个值：{{obj1}}和{{obj2}}</p>
	<button @click="obj1++">改变前者</button>
	<button @click="obj1++;obj2++">两个都改变</button>
</template>

<script>
// import { reactive, ref, readonly, computed, watchEffect, watch } from 'vue'
import * as Vue from "vue"

export default {
	name: 'ch11_new_apis',
	props: {
		ch_title: {
			type: String,
			default: "ch11：组合API&响应式API"
		}
	},
	data: function() {
		return {
			content: "月浅灯深，梦里云归何处寻。",
			/* ref既支持基本类型，又支持复杂类型；reactive只支持对象类型。 */
			// state: Vue.reactive({
			// 	count: 0
			// })
			state: Vue.ref({
				count: 0
			}),
			/* 此处readonly令rodata只读，如果改成ref，则rodata将变得可修改。 */
			rodata: Vue.readonly({
				name: "李浩",
				attr: {
					age: 39,
					height: 183
				}
			}),
			message: Vue.ref("人世几回伤往事，山形依旧枕寒流。"),
			reversedMessage: Vue.computed(() => {
				return this.message.split("").reverse().join("");
			}),
			obj1: Vue.ref(0),
			obj2: Vue.ref(100)
		};
	},
	created: function() {
		Vue.watchEffect(() => {
			console.log("现在的计数器值是：" + this.state.count);
		});
		// Vue.watch(() => this.obj1, (newValue, oldValue) => {
		// 	console.log(`obj1的值发生了改变，原值：${oldValue}，新值：${newValue}。`);
		// });
		Vue.watch([() => this.obj1, () => this.obj2], ([newObj1Value, newObj2Value], [oldObj1Value, oldObj2Value]) => {
			console.log(`监控的值发生了改变，前者：${oldObj1Value}=>${newObj1Value}，后者：${oldObj2Value}=>${newObj2Value}。`);
		});
	},
	components: {
		postItem: {
			props: [
				"postContent"
			],
			setup: function(props, context) {
				Vue.watchEffect(() => {
					console.log(props.postContent);
				});
			},
			template: `
				<h3>{{postContent}}</h3>
			`
		}
	}
}
</script>

<style>
</style>