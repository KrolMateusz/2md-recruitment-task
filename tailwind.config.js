module.exports = {
    purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            blue: {
                light: "#f1f9ff",
                default: "#80c4fd",
                dark: "#2899fb",
            },
        },
        extend: {
            gridTemplateColumns: {
                "main-page": "200px minmax(400px, 1fr)",
            },
            gridTemplateRows: {
                "maing-page-mobile": "8rem 1fr",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
