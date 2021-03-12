module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      beige: '#fcf9eb',
      beigeLight: '#fefcf1',
      blue: '#179cc6',
      darkBlue: '#1B3641',
      green: '#349D82',
      purple: '#6E165C',
      red: '#F01456',
      transparent: 'rgba(0,0,0,0.0)',
      white: '#FFF'
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      zIndex: {
        '-1': '-1',
      }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
