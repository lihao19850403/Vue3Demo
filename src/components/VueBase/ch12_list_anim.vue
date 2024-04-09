<template>
	<p>列表项增删动画</p>
	<button @click="add()">添加</button><button @click="remove()">删除</button><br />
	<transition-group name="list" tag="p">
		<span v-for="item in items" :key="item" class="num-item">{{ item }}</span>
	</transition-group>
	<p>列表项交错动画</p>
	输入过滤条件：<input type="text" v-model="query"/>
	<transition-group
		tag="ul"
		@before-enter="beforeEnter"
		@enter="enter"
		@leave="leave"
		:css="false"
	>
		<li
			v-for="(item, index) in computedList"
			:key="item.msg"
			:data-index="index"
		>
			{{ item.msg }}
		</li>
	</transition-group>
</template>

<script>
import Velocity from "velocity-animate";
	
export default {
	name: 'ch12_list_anim',
	props: {
		ch_title: {
			type: String,
			default: "ch12：列表动画"
		}
	},
	data: function() {
		return {
			items: [10, 20, 30, 40, 50, 60, 70, 80, 90],
			nextNum: 10,
			query: "",
			list: [
				{ msg: "apple" },
				{ msg: "almond" },
				{ msg: "banana" },
				{ msg: "coconut" },
				{ msg: "date" },
				{ msg: "mango" },
				{ msg: "apricot" },
				{ msg: "banana2" },
				{ msg: "bitter" },
			]
		};
	},
	computed: {
		/* 对列表数据进行过滤。 */
		computedList: function() {
			return this.list.filter(item => item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1);
		}
	},
	methods: {
		randomIndex: function() {
			return Math.floor(Math.random() * this.items.length);
		},
		add: function() {
			this.items.splice(this.randomIndex(), 0, this.nextNum++);
		},
		remove: function() {
			this.items.splice(this.randomIndex(), 1);
		},
		beforeEnter: function(el) {
			el.style.opacity = 0;
			el.style.height = 0;
		},
		enter: function(el, done) {
			var delay = el.dataset.index * 150;
			setTimeout(function() {
				Velocity(el, { opacity: 1, height: "1.6em" }, { complete: done });
			}, delay);
		},
		leave: function(el, done) {
			var delay = el.dataset.index * 150;
			setTimeout(function() {
				Velocity(el, { opacity: 0, height: 0 }, { complete: done });
			}, delay);
		}
	}
}
</script>

<style scoped>
.num-item {
	display: inline-block;
	margin-right: 10px;
}
.list-enter-from, .list-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.list-enter-active, .list-leave-active {
	transition: all 1s;
}
.list-move {
	transition: transform 1s;
}
</style>