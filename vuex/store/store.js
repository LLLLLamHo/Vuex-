import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    // 应用启动时，count 置为0
    count : 0
};

const mutations = {
    // mutation 的第一个参数是当前的 state
    // 你可以在函数里修改 state
    INCREMENT(state,amout){
        state.count = state.count + amout;
    },

    //减1
    REDUCE(state,amout){
        state.count = state.count - amout;
    }

};

export default new Vuex.Store({
    state,
    mutations
})

