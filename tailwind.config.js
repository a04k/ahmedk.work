/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./content/**/*.{md,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        switzer: ["Switzer", "sans-serif"],
        fustat: ["Fustat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        InstrumentSerif: ["Instrument Serif", "serif"],
        InstrumentSerifItalic: ["Instrument Serif Italic", "serif"],
        pixel: ['"VT323"', "monospace"],
      },
      backgroundImage: {
        bg: "url('/images/bg.webp')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s linear forwards",
        marquee: "marquee var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        DEFAULT:
          "0px 3px 6px -3px rgba(0,0,0,.05),0px 2px 4px -2px rgba(0,0,0,.05),0px 1px 2px -1px rgba(0,0,0,.05),0px 1px 1px -1px rgba(0,0,0,.05),0px 1px 0px -1px rgba(0,0,0,.05)",
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5rem" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "2rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
    },
  },
  // NOTE: no safelist — every previously-safelisted class is either present
  // literally in scanned files (so Tailwind generates it anyway) or was never
  // used. A safelist here forced ~14KiB of dead CSS into production.
  plugins: [require("@tailwindcss/typography")],
};
