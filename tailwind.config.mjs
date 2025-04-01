import { BedSingleIcon } from 'lucide-react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bianco:'#FAFAF7',
        verdeSalviaDark: "#4E5C45",
        salvia: "#819671",
        glicine: '#D9D3EA',
        pesca:'#FBCDC0',
        zucchero: '#8FAABF',
        zuccheroDark:"#637685",
      },

      backgroundImage: {
        Hero:  "url('/mobile1.jpg')",
        Chiesa: "url('/madrice.webp')",
        Chiesa2: "url('/chiesaInterno.jpg')",
        Baglio: "url('/baglioInterno.jpeg')",
        Baglio2: "url('/baglioEsterno.jpg')",
        Countdown: "url('/WhatsApp Image 2025-01-24 at 09.44.05.jpeg')",
        Loro: "url('/WhatsApp Image 2025-01-22 at 16.31.41 (1).jpeg')",
        Presentazione: "url('/WhatsApp Image 2025-01-22 at 16.31.41 (6).jpeg')",
      },
    },
  },
  plugins: [],
};
