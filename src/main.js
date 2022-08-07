import { createApp } from "vue";
import App from "./App.vue";

import * as components from "@moja-global/mojaglobal-ui/dist/mojaglobal-ui.esm.js";

createApp(App).mount("#app").use(components);
