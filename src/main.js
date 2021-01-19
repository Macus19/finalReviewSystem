// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import config from '../src/lib/config/config';
import router from './router';

// eslint-disable-next-line import/first
// import axios from 'axios';
Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.prototype.global = config;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
