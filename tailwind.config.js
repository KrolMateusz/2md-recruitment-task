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
            inset: {
                "-px-80": "-80px",
                "-px-70": "-70px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
