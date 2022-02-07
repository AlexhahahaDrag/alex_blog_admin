import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { loadEnv } from "./build/utils";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import Components from 'unplugin-vue-components/vite'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, "./", dir);
};

//設置別名
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@v": pathResolve("src/views"),
  "@u": pathResolve("src/utils"),
  "@a": pathResolve("src/api"),
};

const mode = "development";

const root: string = process.cwd();

const { getThemeVariables } = require("ant-design-vue/dist/theme");
const { additionalData } = require("./themeConfig");

const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_OPEN } = loadEnv(mode);

// https://vitejs.dev/config/
export default defineConfig({
  mode,
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        // 默认从 /src/components 目录下自动查找组件
        AntDesignVueResolver(),
      ],
    }),
  ],
  base: process.env.NODE_ENV === "production" ? "/manages/" : VITE_PUBLIC_PATH,
  resolve: {
    alias,
  },
  //css样式
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        lessOptions: {
          modifyVars: { ...getThemeVariables() },
        },
      },
      scss: {
        // additionalData,
      },
    },
  },
  server: {
    // host: '10.10.20.38',
    port: VITE_PORT,
    // port: 10000,
    open: VITE_OPEN,
    https: false,
    proxy: {
      // 选项写法
      "/api": {
        target: "http://localhost:30016",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
