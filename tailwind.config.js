module.exports = {
    purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            blue: {
                light: "#f1f9ff",
                "light-2": "#bce0fd",
                default: "#80c4fd",
                dark: "#3aa2fc",
            },
            black: {
                default: "#000",
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
