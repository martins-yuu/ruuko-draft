import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [forms, typography, daisyui],
  daisyui: {
    themes: [
      "acid",
      "aqua",
      "autumn",
      "black",
      "bumblebee",
      "business",
      "cmyk",
      "coffee",
      "corporate",
      "cupcake",
      "cyberpunk",
      "dark",
      "dim",
      "dracula",
      "emerald",
      "fantasy",
      "forest",
      "garden",
      "halloween",
      "lemonade",
      "light",
      "lofi",
      "luxury",
      "night",
      "nord",
      "pastel",
      "retro",
      "sunset",
      "synthwave",
      "valentine",
      "winter",
      "wireframe",
    ],
  },
} satisfies Config;
