module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        borderWidth: {
            '1': '1px',
            '2': '2px'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}