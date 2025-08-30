/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", // you can toggle manually, or use system with 'media'
  theme: {
    extend: {
      colors: {
        // 🎨 Brand palette
        primary: {
          DEFAULT: "#2563eb", // blue-600
          light: "#3b82f6",   // blue-500
          dark: "#1e40af",    // blue-800
        },
        secondary: {
          DEFAULT: "#10b981", // emerald-500
          light: "#34d399",   // emerald-400
          dark: "#047857",    // emerald-700
        },
        accent: {
          DEFAULT: "#f59e0b", // amber-500
          light: "#fbbf24",
          dark: "#b45309",
        },
        background: {
          light: "#f9fafb",   // gray-50
          dark: "#111827",    // gray-900
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};

