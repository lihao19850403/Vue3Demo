/** 使用Vuex管理全局状态。 */
import * as Vuex from "vuex";

const store = Vuex.createStore({
	state: {
		store_name: "洗衣机",
		store_price: 8600
	},
	getters: {
		getPrice: function(state) {
			return state.store_price + 400;
		}
	},
	mutations: {
		updatePrice: function(state, params) {
			return state.store_price += params.num;
		}
	}
});

export default store;