/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'tailwindcss/nesting': {},
    'postcss-preset-env': {
      "browsers": [
        "> 0.2% and not dead"
      ],
      "features": {
        "nesting-rules": [
          "auto",
          {
            "edition": "2024-02"
          }
        ]
      }
    },
    autoprefixer: {},
  },
};

export default config;
