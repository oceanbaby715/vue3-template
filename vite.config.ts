import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 配置目录别名
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      "views": path.resolve(__dirname, "src/views"),
      "utils": path.resolve(__dirname, "src/utils"),
      "api": path.resolve(__dirname, "src/api"),
    }
  },
  server: {
    host: "0.0.0.0",
    port: 9800,
    open: true,//自动打开浏览器
    proxy: {
      '/api': {
        target: "https://yapi.baidu.com/mock/71977",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/css`;
        },
      }]
    })
  ]
})
