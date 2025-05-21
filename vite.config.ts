import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import * as path from 'path';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
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
        target: process.env.VITE_API_BASE_URL, // Proxy to the backend server
        changeOrigin: true, // Ensures that the Host header is correctly set
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
