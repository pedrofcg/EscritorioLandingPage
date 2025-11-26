/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a', // Slate 900
                    foreground: '#f8fafc', // Slate 50
                },
                secondary: {
                    DEFAULT: '#334155', // Slate 700
                    foreground: '#f8fafc', // Slate 50
                },
                accent: {
                    DEFAULT: '#0ea5e9', // Sky 500
                    foreground: '#f8fafc', // Slate 50
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
