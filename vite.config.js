import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "https://pavelolkhovoi.github.io/basic-pwa/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // enable service worker in dev for testing
      },
      manifest: {
        name: "My React PWA", // Full app name
        short_name: "ReactPWA", // Short name for homescreen
        description: "My Vite React PWA Example",
        start_url: "/", // Start URL when launched from homescreen
        display: "standalone", // Launch in standalone (app-like) mode
        background_color: "#ffffff", // Splash screen background color
        theme_color: "#317EFB", // Toolbar color (Android)
        icons: [
          {
            src: "/pwa-icon-192.png", // Path to icon in the public folder
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-icon-512.png", // Reuse 512x512 icon
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable", // Maskable for Android adaptive icon
          },
        ],
      },
    }),
  ],
});
