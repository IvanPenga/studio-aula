import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), astroI18next()],
  i18n: {
    locales: ["hr", "en"],
    defaultLocale: "en",
  },
});
