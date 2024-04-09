<template>
	<h3 v-show="ok">西瓜</h3>
	<h3 v-show="no">苹果</h3>
	<h3 v-show="num>=1000">库存很充足！</h3>
	<br />
	<span v-if="score>=90">优秀</span>
	<span v-else-if="score>=80">合格</span>
	<span v-else-if="score>=60">及格</span>
	<soan v-else>不及格</soan>
	<br />
	<p>古诗鉴赏：{{poem}}</p>
	<!-- 此处会整体更新，即覆盖掉提示语。但在CLI中不能通过编译。 -->
	<!-- <p v-text="poem">古诗鉴赏：</p> -->
	<br />
	<!--  依然是整体更新。但在CLI中不能通过编译。 -->
	<!-- <p v-html="htmlMsg">古诗鉴赏：</p> -->
	<br />
	<p v-pre>古诗鉴赏：{{poem}}</p><!-- v-pre或显示原文。 -->
	<br />
	<p v-cloak>古诗鉴赏：{{poem}}</p><!-- v-cloak保证差值没有计算好之前，不显示对应控件。 -->
</template>

<script>
export default {
	name: 'ch5_cmd_normal',
	props: {
		ch_title: {
			type: String,
			default: "ch5：内置指令"
		}
	},
	data: function() {
		return {
			ok: true,
			no: false,
			num: 1200,
			score: 85,
			poem: "床前明月光，疑是地上霜",
			htmlMsg: "<h3 style='color:red;'>床前明月光，疑是地上霜</h3>"
		};
	}
}
</script>

<style>
</style>