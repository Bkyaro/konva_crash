import Vue from "vue";
import App from "./App.vue";
import VueKonva from "vue-konva";

Vue.use(VueKonva);
Vue.config.productionTip = false;

new Vue({
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
