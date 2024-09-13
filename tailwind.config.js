export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors: {
            "price-color": "#0E42FD",
            "category-women": "#FF5E84",
            "category-men": "#2BD9AF",
          },
          height : {
            '500': '400px'
          },
          maxHeight: {
            '5': '400px',
            '2': '170px',
          },
          minHeight: {
            '5': '400px',
            '2': '170px',
          }
        }, 
    },
    plugins: [],
};