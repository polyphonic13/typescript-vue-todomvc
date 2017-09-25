import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Vuex from 'vuex';
import TodoApp from './components/TodoApp.vue';
import { RouteViews } from './models';

import * as Models from './models/todo';

const viewNames = ['completed', 'active', '*'];
const routes = viewNames.map((view): RouteConfig => ({
    path: '/' + view,
    component: TodoApp,
    props: {
        currentView: view === '*' ? 'all' : view,
    },
}));

const router = new VueRouter({
    mode: 'history',
    routes,
});

const store = new Vuex.Store({
    state: {
        todos: [],
        labels: [],
    },
    getters: {
        getTodos: state => state.todos,
        getLabels: state => state.labels,
    },
});
Vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    template: '<router-view></router-view>',
    router,
    mixins: [VueRouter],
});
