/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        spin: 'spin 0.5s 5',
        ping: 'ping 1s 5',
        twist: 'twist 1s 4',
        // x: 'x 2s 5',
        // y: 'y 2s 5',
      },
      keyframes: {
        twist: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-7deg)',
          },
        },
        // x: {
        //   '0%, 100%': {
        //     transform: 'scale(1.2) rotate(7deg)',
        //   },
        //   '50%': {
        //     transform: 'scale(0.8) rotate(-7deg)',
        //   },
        // },
        // y: {
        //   '0%, 100%': {
        //     transform: 'fade-in_1s_ease-in-out',
        //   },
        //   '50%': {
        //     transform: 'fade-out_1s_ease-in-out',
        //   },
        // },
      },
    },
  },
  plugins: [],
}

