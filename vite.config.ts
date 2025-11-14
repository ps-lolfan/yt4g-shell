import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "yt4g_shell",
      remotes: {
        yt4g_feed: "http://localhost:4001/assets/remoteEntry.js",
        yt4g_player: "http://localhost:4002/assets/remoteEntry.js",
        yt4g_comments: "http://localhost:4003/assets/remoteEntry.js",
        yt4g_auth: "http://localhost:4004/assets/remoteEntry.js",
        yt4g_live: "http://localhost:4005/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  resolve: {
    alias: {
      // 👇 adjust this path to where your UI Kit lives
      "yt4g-ui-kit": resolve(__dirname, "../yt4g-ui-kit/src"),
    },
  },
  server: { port: 4000 },
});
