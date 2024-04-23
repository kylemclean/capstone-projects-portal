import * as React from "react"
import { createRoot } from "react-dom/client"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import App from "./App"
import UAlbertaTheme from "./theme"

createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={UAlbertaTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
    </ThemeProvider>
)
