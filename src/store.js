import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
    // 在vuex中存储的数据
    state: {
        count: 0
    },
    // 定义改变state数据的方法
    mutations: {
        increase(state, needDouble) {
            state.count++;
            if (needDouble) {
                state.count++;
            }
        }
    },
    // 用来提交mutations
    actions: {
        increase(context, needDouble) {
            context.commit('increase', needDouble)
        }
    }
})
export default store