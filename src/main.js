// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'element-ui/lib/theme-chalk/index.css';
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import App from './App';
import config from '../src/lib/config/config';
import router from './router';

Vue.component('chart', ECharts);
Vue.use(VueQuillEditor);

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
