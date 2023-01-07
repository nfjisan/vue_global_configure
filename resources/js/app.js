import Vue from 'vue';

import App from './App'

import VueRouter from 'vue-router'

import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
    events: 'input',
    fieldsBagName: '',
});

import base_mixin from './mixins/base_mixin';
Vue.mixin(base_mixin)

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios)


import 'sweetalert2/dist/sweetalert2.min.css';
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

Vue.use(VueRouter);

import Vuex from 'vuex';
Vue.use(Vuex);

import StoreData from './store'
const store = new Vuex.Store(StoreData);

import routes from './router/index';
console.log(routes);

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: "active",
});

new Vue({
    el: '#app',
    router, store,
    components: {App}
  });
