/*jshint esversion: 6 */
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import 'babel-polyfill';
import apiUrl from './api/apiUrl';
import {post,fetch,patch,put} from './api/index';
//定义全局变量
Vue.prototype.$apiUrl = apiUrl;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.use(ElementUI);

Vue.prototype.$axios = axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');