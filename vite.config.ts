// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './setupTests.js'
//   }
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.ts", // Ulazna tačka za vaš paket
      name: "PickUpComponents", // Globalno ime za UMD build
      formats: ["es", "cjs"], // Generiše ES module i CommonJS
      fileName: (format) => `index.${format}.js`, // Ime fajla za svaki format
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Označava React kao eksternu zavisnost
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
    exclude: ['src/__tests__/**/*']
  },
});

