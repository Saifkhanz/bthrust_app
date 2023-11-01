import { createApp } from "vue";
import store from "./store.js";
import App from "./App.vue";
import router from "./router";
import axiosInstance from "./api/api.js";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
const app = createApp(App);
// Provide the Axios instance globally
app.config.globalProperties.$axios = axiosInstance;
app.use(store);
app.use(router);
app.use(vuetify);
app.mount("#app");
// createApp(App).mount('#app')
