import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    base: "/",
    plugins: [react()],
    build: {
        outDir: "build",
    },
    server: {
        host: true,
        port: Number(process.env.VITE_PORT || 3000),
    },
    test: {
        globals: true,
        setupFiles: ["./vitest-setup.ts"],
        name: "unit",
        environment: "jsdom",
        include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
        exclude: ["src/e2e-tests/**/*"],
    },
})
