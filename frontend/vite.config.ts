/// <reference types="vitest" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
    base: "/",
    plugins: [react()],
    server: {
        port: 3000,
    },
    test: {
        globals: true,
    },
})
