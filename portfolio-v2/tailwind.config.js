/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                shine: "shine 6s linear infinite"
            },
            keyframes: {
                shine: { "0%": { backgroundPosition: "200% center" }, "100%": { backgroundPosition: "-200% center" } }
            },
            spacing: { 128: "32rem", 144: "36rem" },
            fontFamily: { sans: ["Inter", "sans-serif"] },
            backgroundImage: {
                "cotton-candy":
                    "linear-gradient(to right, #f472b6 0%, #60a5fa 15%, #fff5fa 35%, #fff5fa 65%, #60a5fa 85%, #f472b6 100%)"
            }
        },
    },
    plugins: [],
}
