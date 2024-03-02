import { defineWorkspace } from "vitest/config"

export default defineWorkspace([
    {
        extends: "./vite.config.ts",
        test: {
            name: "unit",
            environment: "jsdom",
            include: ["src/**/*.test.tsx"],
        },
    },
    {
        extends: "./vite.config.ts",
        test: {
            name: "e2e",
            environment: "node",
            include: ["src/**/*.e2e.ts"],
        },
    },
])
