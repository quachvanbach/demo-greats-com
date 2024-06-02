/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-bg": "@/public/assets/images/hero-banner.jpg",
        "mobile-bg": "@/public/assets/images/mobile-hero-banner.jpg",
      },
      fontFamily: {
        'playfair-display': ['"Playfair Display"', 'serif'],
      },
    },
      screens: {
          'lg': {'max': '1024px'},
          'sm': {'max': '768px'},
      }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hero-shop-button': {
          height: '45px',
          minWidth: '120px',
          maxWidth: '230px',
          width: '100%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          backgroundColor: 'transparent',
          paddingLeft: '50px',
          paddingRight: '50px',
          paddingTop: '12px',
          paddingBottom: '12px',
          borderRadius:'10px',
          textTransform: 'uppercase',
          color: 'white',
          overflow: 'hidden',
        },
        '.hero-shop-button:hover': {
          border: 'solid 2px #fff',
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
};
