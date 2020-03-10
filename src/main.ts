import Vue from 'vue';
import App from './App.vue';
import '../lib/t-components/build';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
