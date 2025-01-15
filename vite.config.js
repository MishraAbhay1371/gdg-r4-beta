// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        game: "src/game.html",
      },
      output: {
        // Ensure all assets are included
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
    },
    // Copy all assets
    assetsInclude: [
      "**/*.jpg",
      "**/*.png",
      "**/*.svg",
      "**/*.gif",
      "**/*.css",
      "**/*.js",
      "**/*.fnt",
    ],
    // Ensure public directory is copied
    copyPublicDir: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // Process all static assets
  publicDir: "public",
});
