import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vuetify/dist/vuetify.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vuetify Extension
Vue.use(Vuetify);
// Vuelidate para validações
Vue.use(Vuelidate);
// Vue Boostrap
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
