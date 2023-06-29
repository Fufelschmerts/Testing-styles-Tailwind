/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html'
    ],
    theme: {
        extend: {
            colors: {
                'midnight': 'rgba(250, 50, 60, 0.5)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}

