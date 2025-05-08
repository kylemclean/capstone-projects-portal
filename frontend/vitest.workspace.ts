import { defineWorkspace } from "vitest/config"

export default defineWorkspace([
    {
        extends: "./vite.config.ts",
        test: {
            name: "unit",
            environment: "jsdom",
            include: ["src/**/*.test.tsx"],
            exclude: ["src/e2e-tests/**/*"],
        },
        server: {
            ws: false,
        },
    },
    {
        extends: "./vite.config.ts",
        test: {
            name: "e2e",
            environment: "node",
            include: ["src/e2e-tests/**/*.test.ts"],
            fileParallelism: false,
            maxConcurrency: 1,
        },
        server: {
            ws: false,
        },
    },
])
