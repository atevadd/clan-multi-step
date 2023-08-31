import "./scss/main.scss";
import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(plugin, defaultConfig);

app.mount("#app");
