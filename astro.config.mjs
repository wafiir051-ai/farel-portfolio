// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// `site` belum diisi karena domain belum tersedia. Isi setelah deploy
// (mis. site: "https://namadomain.com") agar canonical URL & sitemap bisa dipakai.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
