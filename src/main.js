import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/vuex";
import Vue2Editor from "vue2-editor";
import './axios';
import 'material-design-icons-iconfont';

Vue.use(Vue2Editor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
