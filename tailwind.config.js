module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        default: ['Montserrat']
      },
      animation: {
        fadeIn: 'fade .2s reverse',
        fadeOut: 'fade .2s forwards',
        attention: 'attention 2.1s infinite ',
        swivel: 'swivel 1.05s infinite ',
        foldOut: 'fold .4s forwards',
        foldIn: 'fold .4s reverse',
        clockwise: 'rotate 21s infinite linear',
        select: 'select .2s forwards',
        deselect: 'select .5s reverse',
        collect: 'collect 1s infinite',
        up: 'slide .5s forwards',
        down: 'slide .5s reverse forwards',
        grab: 'grab .06s linear infinite',
        iconOpen: 'grab .2s forwards',
        iconClose: 'grab .2s reverse',
        slideUp: 'slide .2s forwards',
        slideDown: 'slide .2s reverse forwards',
        throb: 'grab .5s alternate infinite'
      },
      keyframes: {
        fade: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slide: {
          from: { transform: 'transition(-2em)'},
          to: { transform: 'transition(0em)'},
        },
        attention: {
          '0%': { transform: 'scale(.9)' },
          '10%': { transform: 'scale(1)'  },
          '20%': { transform: 'scale(.9)'  },
          '30%': { transform: 'scale(1)'  },
          '40%': { transform: 'scale(.9)'  },
          '100%': { transform: 'scale(.9)'  },
        },
        select: {
          '0%': { transform: 'scale(1)'},
          '50%': { transform: 'scale(1.1)'},
          '75%': { transform: 'scale(1)'},
          '100%': { transform: 'scale(1)'},
        },
        swivel: {
          '0%': {transform: 'rotate(7deg) scale(1.1)'},
          '50%': {transform: 'rotate(-7deg) scale(1.1)'},
          '100%': {transform: 'rotate(7deg) scale(1.1)'},
        },
        fold: {
          '0%': {transform: 'scaleX(1)'},
          '50%': {transform: 'scaleX(0)'},
          '100%': {transform: 'scaleX(0)'},
        },
        rotate: {
          from: {transform: 'rotate(0deg) scale(2)'},
          to:  {transform: 'rotate(359deg) scale(2)'}
        },
        collect: {
          '0%': { transform: 'scale(1)', opacity: 1},
          '25%': { transform: 'scale(1.4)', opacity: 0},
          '50%': { transform: 'scale(1)', opacity: 0},
          '100%': { transform: 'scale(1)', opacity: 0},
        },
        slide: {
          '0%': {transform: 'translateY(6em)'},
          '100%': {transform: 'translateY(0em)'},

        },
        grab: {
          '0%': { transform: 'scale(1)'},
          '100%': { transform: 'scale(1.15)'},
        }


      },
    },
  },
  plugins: [],
}
