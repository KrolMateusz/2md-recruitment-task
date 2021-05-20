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
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
