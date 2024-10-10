import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/portfolioV1/",
    plugins: [react()],
    server: {
        host: true,
        port: 5173,
    },
});
