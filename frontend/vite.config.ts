/// <reference types="vitest" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    base: "/",
    plugins: [react()],
    server: {
        port: Number(process.env.VITE_PORT || 3000),
    },
    test: {
        globals: true,
    },
})
