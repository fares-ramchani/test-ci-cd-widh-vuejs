import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import * as path from 'path';
import svgLoader from 'vite-svg-loader';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
    plugins: [
      vue(),
      svgLoader(),
      eslintPlugin({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '145.239.198.96',
      port: 5173,
      proxy: {
        '/rms/api': {
          target: 'http://145.239.198.96:3005',
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
  };
});
