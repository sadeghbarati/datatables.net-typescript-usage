import { defineConfig } from "vite"

// stop reloading sandbox with vite
const server = process.env.APP_ENV === "sandbox" ? { hmr: { clientPort: 443 } } : {};

export default defineConfig({
  server: server,
})
