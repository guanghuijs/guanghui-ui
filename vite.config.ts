import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Pages from 'vite-plugin-pages';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      Pages({
        dirs: './src/views', //指定生成路由的目录
        extensions: ['vue'], //文件后缀
        exclude: ['**/src/*.vue'], //可以排除指定目录
        extendRoute() {},
      }),
    ],
    build:
      mode === 'lib'
        ? {
            outDir: 'lib',
            emptyOutDir: true,
            lib: {
              // 入口指向组件库入口模块
              entry: resolve(__dirname, 'packages/components/index.ts'),
              name: 'ghui',
              // 构建生成的文件名，与package.json中配置一致
              fileName: 'ghui',
            },
            rollupOptions: {
              // 确保外部化处理那些你不想打包进库的依赖
              external: ['vue'],
              output: {
                globals: {
                  // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                  vue: 'Vue',
                },
              },
            },
          }
        : {
            outDir: 'preview',
            emptyOutDir: true,
          },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./packages', import.meta.url)),
      },
    },
  };
});
