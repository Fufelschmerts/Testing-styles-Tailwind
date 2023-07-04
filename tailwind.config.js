/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html'
    ],
    theme: {
        extend: {
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries')
    ],
}

