<template>
	<input v-focus>
	<br />
	<div v-demo:foo.a.b="message"></div>
	<br />
	<!-- 直接给出指令的参数。 -->
	<p v-pin:top="100" style='color:red;'>林风纤月落</p>
	<!-- 使用动态参数。 -->
	<p v-pin:[direction]="100" style='color:red;'>林风纤月落</p>
</template>

<script>
export default {
	name: 'ch5_cmd_custom',
	props: {
		ch_title: {
			type: String,
			default: "ch5：自定义指令"
		}
	},
	data: function() {
		return {
			message: "海上生明月",
			direction: "left"
		};
	},
	directives: {
		focus: {
			mounted: function(el) {
				el.focus();
				console.log(el + "已获得焦点。");
			}
		},
		demo: {
			mounted: function(el, binding, vnode) {
				/* 有可能造成循环引用。
				"instance: " + JSON.stringify(binding.instance) + "<br />" +
				*/
				el.innerHTML = 
				"value: " + JSON.stringify(binding.value) + "<br />" +
				"argument: " + JSON.stringify(binding.arg) + "<br />" +
				"modifiers: " + JSON.stringify(binding.modifiers) + "<br />" +
				"vnode keys: " + Object.keys(vnode).join(", ");
			}
		},
		pin: {
			beforeMount: function(el, binding, vnode) {
				el.style.position = "fixed"; // 固定位置。
				let s = binding.arg || "left"; // 默认处理左边距。
				el.style[s] = binding.value + "px"; // 填入左边距的值。
			}
		}
	}
}
</script>

<style>
</style>