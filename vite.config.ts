import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: './',
    plugins: [vue()],
    build: {
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
    },
  };
});
