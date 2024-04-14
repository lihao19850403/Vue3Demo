<template>
	<div class="body">
		<hgroup>
			<h1>整理&nbsp;一些标签</h1>
			<h1>4月14日星期日，下午</h1>
		</hgroup>
		<hr />
		<h3>一、常用标签：</h3>
		<p>
			<b>&lt;b&gt;表示粗体</b><br />
			<i>&lt;i&gt;表示斜体</i><br />
			<u>&lt;u&gt;表示下划线</u><br />
			<del>&lt;del&gt;表示删除线</del><br />
			&lt;sup&gt;表示上标：a<sup>2</sup>+b<sup>2</sup>=c<sup>2</sup><br />
			&lt;sub&gt;表示下标：a<sub>1</sub>+a<sub>2</sub>+a<sub>3</sub>+...+a<sub>n</sub>=(a<sub>1</sub>+a<sub>n</sub>)×n÷2<br />
			<mark>&lt;mark&gt;表示高亮显示</mark><br />
			<em>&lt;em&gt;表示强调，表现为斜体</em><br />
			<strong>&lt;strong&gt;表示着重说明，表现为粗体</strong><br />
			&lt;hr&gt;表示横向分割线
		</p>
		<hr />
		<h3>二、程序代码相关标签：</h3>
		<p>
			<code>&lt;code&gt;表示代码，表现为打字机字体</code><br />
			<samp>&lt;samp&gt;表示示例，表现为打字机字体</samp><br />
			<kbd>&lt;kbd&gt;表示用户输入部分，表现为打字机字体</kbd><br />
			<var>&lt;var&gt;表示变量，表现为斜体</var><br />
			&lt;pre&gt;表示预格式化部分内容，会原样输出<br />
			举例：<br />
			<code>
				<samp>求两数的乘积：用户输入<kbd>a</kbd>与<kbd>b</kbd>后，程序计算出二者的乘积。</samp><br />
				<pre>
public static void main(int args[]) {
    Scanner <var>sc</var> = new Scanner(System.in);
    String[] <var>strs</var> = sc.nextLine().split(" ");
    int <var>a</var> = Integer.parseInt(strs[0]);
    int <var>b</var> = Integer.parseInt(strs[1]);
    System.out.println(a * b);
    sc.close();
}
				</pre>
			</code>
		</p>
		<hr />
		<h3>三、其他标签：</h3>
		<p>
			<small>&lt;small&gt;表示字号略小</small><br />
			<tt>&lt;tt&gt;表示打字机字体：Typewriter</tt><br />
			<ins cite="../../../public/data/user.json" datetime="2024-04-13">&lt;ins&gt;表示一段被插入文档中的文本，表现为下划线</ins><br />
			<s>&lt;s&gt;表示过时信息，表现为删除线</s><br />
			<dfn>&lt;dfn&gt;表示定义，表现为斜体</dfn><br />
			<cite>&lt;cite&gt;表示引用，表现为斜体</cite><br />
			<abbr title="此处是注释内容">&lt;abbr&gt;表示含有注释的文本，鼠标悬停或长按将显示注释</abbr><br />
		</p>
	</div>
</template>

<script>
export default {
	name: 'h5_ch1_welcome',
	props: {
		ch_title: {
			type: String,
			default: "h5_ch1：Html5标签"
		}
	}
}
</script>

<style scope>
	.body {
		text-align: left;
	}
</style>