import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  experimental: {
    svg: {
      mode: "sprite",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  adapter: vercel(),

  // Configuración de i18n
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false, // Cambiado a false para permitir rutas sin prefijo
    },
  },
});
