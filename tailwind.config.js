module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Lora"]
    },
    extend: {},
    screens: {
      'xs': '300px',
      'sm': '500px',
      // => @media (min-width: 640px) { ... }
      'sn': '600px' ,
      'md': '1024px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
