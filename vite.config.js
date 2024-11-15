import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monacoEditorPlugin  from 'vite-plugin-monaco-editor';

export default defineConfig({
  plugins: [
    vue(),
    monacoEditorPlugin()
  ],
  base: 'https://hugo-17.github.io/Code.link/'
});
