import Vue from 'vue';
import Vuex from 'vuex';

import TodoStore from './todo/store';
import LabelStore from './label/store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todo: TodoStore,
        label: LabelStore,
    }
});
