import Vue from "vue";
import App from "./app.vue";
import "./style/common.css";
import router from "./router/index";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
Vue.use(router);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
