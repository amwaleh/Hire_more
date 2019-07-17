export const breakpoints = {
  tablet: '48rem', // 768px
  desktop: '62rem', // 992px
  widescreen: '75rem', // 1200px
}

export default {
  space: [
    '0', // key: 0
    '1rem', // key: 1
    '2rem', // key: 2
    '3rem', // key: 3
    '4rem', // key: 4
    '5rem', // key: 5
    '6rem', // key: 6
    '7rem', // key: 7
    '0.5rem', // key: 8
  ],
  breakpoints: Object.keys(breakpoints).map(e => breakpoints[e]),
  colors: {
    mainYellow: '#ffc84b',
    mainRed: '##c31e28',
    mainGray: '#7f7f7f',
    mainGreen: '#039BE5',
  },
  fonts: {
    family: {
      header: 'Manrope',
    },
  },
}
