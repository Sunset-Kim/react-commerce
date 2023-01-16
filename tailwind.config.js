/** @type {import('tailwindcss').Config} */
function range(start, end) {
  const mylength = end - start + 1;
  return Array.from({ length: mylength }, (_, i) => start + i);
}

const pxToRem = (px, base = 16) => `${px / base}rem`;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    darkMode: "class",
    extend: {
      spacing: {
        ...range(1, 100).reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px);
          return acc;
        }, {}),
      },
    },
  },
  plugins: [],
};
