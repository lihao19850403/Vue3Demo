<template>
	<button @click="show=!show">动画</button>
	<br />
	<transition 
		name="my-transition"
		appear
		appear-class="appear-start"
		appear-active-class="appear-doing"
		appear-to-class="appear-end"
	>
		<p v-if="show">高田如楼梯，平田如棋局。</p>
	</transition>
	<transition 
		name="my-transition"
		appear
		appear-class="appear-start"
		appear-active-class="appear-doing"
		appear-to-class="appear-end"
	>
		<p v-if="show">白鹭忽飞来，点破秧针绿。</p>
	</transition>
	<br />
	<transition name="my2">
		<p v-if="show">六出飞花入户时，坐看青竹变琼枝。如今好上高楼望，盖尽人间恶路岐。</p>
	</transition>
	<br />
	<transition enter-active-class="animate__animated animate__bounceInUp" leave-active-class="animate__animated animate__slideOutRight">
		<p v-if="show">春晓不得处，唯有鬓边霜。</p>
	</transition>
	<br />
	<transition
		@before-enter="beforeEnter"
		@enter="enter"
		@leave="leave"
		:css="false"
	>
		<p v-if="show">玉户帘中卷不去，捣衣砧上拂还来。</p>
	</transition>
</template>

<script>
import Velocity from "velocity-animate";
	
export default {
	name: 'ch12_animations',
	props: {
		ch_title: {
			type: String,
			default: "ch12：动画"
		}
	},
	data: function() {
		return {
			show: true
		};
	},
	methods: {
		beforeEnter: function(el) {
			el.style.opacity = 0;
			el.style.transformOrigin = "left";
		},
		enter: function(el, done) {
			Velocity(el, { opacity: 1, fontSize: "2em" }, { duration: 300 });
			Velocity(el, { fontSize: "1em" }, { complete: done });
		},
		leave: function(el, done) {
			Velocity(el, { translateX: "15px", rotateZ: "50deg" }, { duration: 600 });
			Velocity(el, { rotateZ: "100deg" }, { loop: 5 });
			Velocity(el, { rotateZ: "45deg", translateY: "30px", translateX: "30px", opacity: 0 }, { complete: done });
		}
	}
}
</script>

<style scoped>
.appear-start {
	font-size: 50px;
	color: #C65EE2;
	background: #3D9DE2;
}
.appear-doing {
	color: red;
	background: #CEFFCE;
	transition: all 3s ease;
}
.appear-end {
	color: #E26346;
	background: #488913;
}
.my-transition-enter-from, .my-transition-leave-to {
	opacity: 0;
	transform: translate(150px);
}
.my-transition-enter-to, .my-transition-leave-from {
	opacity: 1;
	transform: translate(0px);
}
.my-transition-enter-active, .my-transition-leave-active {
	transition: all 1s ease;
}
.my2-enter-active {
	animation: my2-active 1s;
}
.my2-leave-active {
	animation: my2-active 1s reverse;
}
@keyframes my2-active {
	0% { transform: scale(0); }
	50% { transform: scale(1.5); }
	100% { transform: scale(1); }
}
</style>