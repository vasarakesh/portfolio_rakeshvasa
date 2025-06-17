/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2B4C7E', // Deep blue
          dark: '#4A6FA5',  // Lighter blue
        },
        secondary: {
          light: '#1A1A1A', // Deep charcoal
          dark: '#2D2D2D',  // Dark grey
        },
        accent: {
          light: '#4A90E2', // Bright blue
          dark: '#6BA4E7',  // Light blue
        },
        background: {
          light: '#FFFFFF',
          dark: '#121212',
        },
        text: {
          light: '#1A1A1A',
          dark: '#E0E0E0',
        },
        card: {
          light: '#F5F5F5',
          dark: '#1E1E1E',
        }
      },
    },
  },
  plugins: [],
} 