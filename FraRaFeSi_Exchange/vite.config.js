import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://pro-api.coinmarketcap.com/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        headers: {
          "X-CMC_PRO_API_KEY": "dd296c4e-2278-420e-a39e-660a9e0ea215",
          Accept: "application/json",
        },
      },
    },
  },
});
