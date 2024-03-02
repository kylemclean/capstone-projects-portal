/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
    readonly VITE_GITHUB_AUTHORIZE_URL: string
    readonly VITE_GITHUB_CLIENT_ID: string
    readonly VITE_ADMIN_URL: string

    // For E2E tests
    readonly CHROME_BINARY_PATH: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
