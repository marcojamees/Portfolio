import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// IMPORTANTE: Altere "Projeto" para o nome do seu repositório no GitHub
const repoName = "Projeto";

export default defineConfig({
  base: `/${repoName}/`,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
