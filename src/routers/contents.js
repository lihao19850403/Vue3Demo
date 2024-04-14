/** 章节目录。 */
import Vue from "vue";
import * as VueRouter from "vue-router";
import contents_page from "../components/contents.vue";

/* Html5基础内容。 */
import h5_ch1_welcome from '../components/H5Base/h5_ch1_welcome'

/* Vue3基础语法。 */
import index_old from '../components/VueBase/index_old'
import ch2_welcome from '../components/VueBase/ch2_welcome.vue'
import ch4_create from '../components/VueBase/ch4_create.vue'
import ch4_methods from '../components/VueBase/ch4_methods.vue'
import ch4_lifecycle from '../components/VueBase/ch4_lifecycle.vue'
import ch4_cmd from '../components/VueBase/ch4_cmd.vue'
import ch5_cmd_normal from '../components/VueBase/ch5_cmd_normal.vue'
import ch5_cmd_for from '../components/VueBase/ch5_cmd_for.vue'
import ch5_cmd_custom from '../components/VueBase/ch5_cmd_custom.vue'
import ch5_cmd_downpull_menu from '../components/VueBase/ch5_cmd_downpull_menu.vue'
import ch6_computed from '../components/VueBase/ch6_computed.vue'
import ch7_watch from '../components/VueBase/ch7_watch.vue'
import ch8_event_decorations from '../components/VueBase/ch8_event_decorations.vue'
import ch8_event_keys from '../components/VueBase/ch8_event_keys.vue'
import ch8_event_userinfo_handler from '../components/VueBase/ch8_event_userinfo_handler'
import ch9_class_style from '../components/VueBase/ch9_class_style'
import ch9_shop_list from '../components/VueBase/ch9_shop_list'
import ch10_user_register from '../components/VueBase/ch10_user_register'
import ch11_components from '../components/VueBase/ch11_components'
import ch11_communication from '../components/VueBase/ch11_communication'
import ch11_slot from '../components/VueBase/ch11_slot'
import ch11_new_apis from '../components/VueBase/ch11_new_apis'
import ch11_project_catagory from '../components/VueBase/ch11_project_catagory'
import ch12_animations from '../components/VueBase/ch12_animations'
import ch12_list_anim from '../components/VueBase/ch12_list_anim'
import ch12_index_increment from '../components/VueBase/ch12_index_increment'
import ch12_downpull_menu_anim from '../components/VueBase/ch12_downpull_menu_anim'
import ch14_router_base from '../components/VueBase/ch14_router_base'
import ch14_router_frame from '../components/VueBase/ch14_router_frame'
import ch14_router_params from '../components/VueBase/ch14_router_params'
import ch15_axios_normal from '../components/VueBase/ch15_axios_normal'
import ch16_vuex_normal from '../components/VueBase/ch16_vuex_normal'

/* 目录根路径。路径格式：/contents/<大章节路径>/<小章节路径>。 */
const CONTENTS_ROOT = "/contents";

/* 目录正文。 */
const allInfos = [
	// Html5基础内容。
	generatePart("Html5基础内容", "html5_base", h5_ch1_welcome),
	// Vue3基础语法。
	generatePart("Vue3基础语法", "vue_base", index_old, ch2_welcome, ch4_create, ch4_methods, ch4_lifecycle, ch4_cmd, ch5_cmd_normal, ch5_cmd_for, ch5_cmd_custom, ch5_cmd_downpull_menu, ch6_computed, ch7_watch, ch8_event_decorations, ch8_event_keys, ch8_event_userinfo_handler, ch9_class_style, ch9_shop_list, ch10_user_register, ch11_components, ch11_communication, ch11_slot, ch11_new_apis, ch11_project_catagory, ch12_animations, ch12_list_anim, ch12_index_increment, ch12_downpull_menu_anim, ch14_router_base, ch14_router_frame, ch14_router_params, ch15_axios_normal, ch16_vuex_normal),
	
];

//////////////////////////////////////////////////

/* 导出项。 */
const CONTENTS = {
	// 目录完整内容。
	allInfos: allInfos,
	// 转换成路由。
	toRouters: transToRouters()
};

/**
 * 生成大章节内容。
 * @param thisPartName 大章节名字。
 * @param thisPartPath 大章节路径（头尾不带/）。
 * @param thisChapters 小章节组件列表。
 * @return 大章节信息。
 */
function generatePart(thisPartName, thisPartPath, ...thisChapters) {
	// 构造小章节数组。
	let chapters = [];
	for (let chapter of thisChapters) {
		chapters.push({
			name: chapter.props.ch_title.default,
			path: CONTENTS_ROOT + "/" + thisPartPath + "/" + chapter.name,
			component: chapter
		});
	}
	// 生成大章节内容。
	let part = {
		name: thisPartName,
		path: CONTENTS_ROOT + "/" + thisPartPath,
		chapters: chapters
	};
	return part;
}

/**
 * 输出路由数组。
 * @return 路由数组。
 */
function transToRouters() {
	let routers = [];
	routers.push({
		path: "/",
		name: "app_home_page",
		component: contents_page
	});
	for (let part of allInfos) {
		for (let chapter of part.chapters) {
			let router = {
				path: chapter.path,
				component: chapter.component,
			};
			// 检测并导入子组件的嵌套路由。
			if (chapter.component.props.children_router) {
				let childrenRouters = chapter.component.props.children_router.default();
				router["children"] = childrenRouters;
			}
			routers.push(router);
		}
	}
	return routers;
}

export default CONTENTS;