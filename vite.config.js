import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                @use "@/scss/abstracts/_variables.scss" as *;
                @use "@/scss/abstracts/_mixins.scss" as *;
                @use "@/scss/abstracts/_animations.scss" as *;
              `,
      },
    },
  },
  plugins: [
    vue(),
    Components({
      dirs: ["./src/components"],
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
