/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    container: {
      
    },
    fontFamily: {
      sans: ["General Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: 'var(--color-text-100)',
          300: 'var(--color-text-300)',
          500: 'var(--color-text-500)',
          700: 'var(--color-text-700)',
          900: 'var(--color-text-900)',
        },
        secondary: {
          300: 'var(--color-primary-300)',
          500: 'var(--color-primary-500)',
          700: 'var(--color-primary-700)',
        }
      },
      backgroundColor: {
        primary: {
          100: 'var(--color-primary-100)',
          300: 'var(--color-primary-300)',
          500: 'var(--color-primary-500)',
          700: 'var(--color-primary-700)',
          900: 'var(--color-primary-900)',
        }
      },
      borderRadius: {
        xs: "0.125rem",
        sm: "0.25rem",
      },
      borderColor: {
        primary: {
          300: 'var(--color-primary-300)',
          500: 'var(--color-primary-500)',
          700: 'var(--color-primary-700)',
        }
      },
    },
  },
  plugins: [],
};
