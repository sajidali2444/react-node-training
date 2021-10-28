import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [{find: '@', replacement: path.resolve(__dirname, './src')}],
  },
  // // inject import react from react for all JSX file
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
})
