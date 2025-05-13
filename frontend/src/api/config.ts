import type { AxiosRequestConfig } from "axios"

export const axiosConfig: AxiosRequestConfig = import.meta.env.PROD
    ? {
          baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
          timeout: 3000,
      }
    : {
          baseURL:
              import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000/api",
          timeout: 3000,
      }

export const githubAuthorizeUrl =
    import.meta.env.VITE_GITHUB_AUTHORIZE_URL ??
    "https://github.com/login/oauth/authorize"
