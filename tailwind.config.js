/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#2a2a3b', // Votre fond principal
                    light: '#273346',   // Vos cartes
                    lighter: '#383f54', // Vos chips/tags
                    dark: '#1f1f2c',    // Votre section Projets
                },
                green: {
                    DEFAULT: '#ff0000', // Votre couleur d'accent
                },
            },
        },
    },
    plugins: [],
}
