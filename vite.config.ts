import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import { loadEnv } from "./build/utils";

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir);
};

//設置別名
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@v": pathResolve("src/views"),
  "@u": pathResolve("src/utils"),
  "@a": pathResolve("src/api"),
};

const mode = 'development';

const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_OPEN } = loadEnv(mode);

// https://vitejs.dev/config/
export default defineConfig({
  mode,
  plugins: [vue()],
  base:
      process.env.NODE_ENV === "production" ? "/manages/" : VITE_PUBLIC_PATH,
  resolve: {
    alias,
  },
  server: {
    // host: 10.10.20.38,
    port: VITE_PORT,
    // port: 10000,
    https: false,
    proxy: {
      // 选项写法
      '/api': {
        target: 'www.baidu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})