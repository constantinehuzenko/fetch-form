import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { API_FORM } from "./src/common/constants";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
