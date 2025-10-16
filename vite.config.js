import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Configuración oficial y compatible con Vercel
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Carpeta que Vercel usará para desplegar
  },
  server: {
    host: true,
  },
});
