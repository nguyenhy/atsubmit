/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", ".dark"],
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: "#007aff",
          gray: "#8e8e93",
        },

        background: "rgb( var(--background) / <alpha-value>)",
        foreground: "rgb( var(--foreground) / <alpha-value>)",
        muted: "rgb( var(--muted) / <alpha-value>)",
        "muted-foreground": "rgb( var(--muted-foreground) / <alpha-value>)",
        border: "rgb( var(--border) / <alpha-value>)",
        accent: "rgb( var(--accent) / <alpha-value>)",
        card: "rgb( var(--card) / <alpha-value>)",
        "card-foreground": "rgb( var(--card-foreground) / <alpha-value>)",
      },

      fontFamily: {
        sans: [
          '"SF Pro Display"',
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: ['"SF Mono"', '"JetBrains Mono"', "ui-monospace", "monospace"],
      },

      borderRadius: {
        apple: "12px",
        "apple-lg": "20px",
      },
    },
  },
  plugins: [],
};
