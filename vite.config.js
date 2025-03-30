import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/basic-pwa/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // enable service worker in dev for testing
      },
      manifest: {
        name: "My React PWA",
        short_name: "ReactPWA",
        description: "My Vite React PWA Example",
        start_url: "/basic-pwa/", // Updated start_url
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#317EFB",
        icons: [
          // {
          //   src: "/pwa-icon-192.png",
          //   sizes: "192x192",
          //   type: "image/png",
          // },
          {
            src: "/pwa-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        lang: "en",
        scope: "/basic-pwa/",
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache", // name for the cache storage
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 24 * 60 * 60, // 1 day cache expiration
              },
              cacheableResponse: {
                statuses: [0, 200], // cache valid responses (200) and opaque responses
              },
            },
          },
        ],
      },
    }),
  ],
});
