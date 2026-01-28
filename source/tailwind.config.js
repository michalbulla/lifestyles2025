const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./templates/**/*.twig'],
  theme: {
    fontFamily: {
      primary: ['Open Sans', 'sans-serif'],
      secondary: ['Montserrat', 'sans-serif'],
    },
    screens: {
      sm: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1350px',
      // We want the maximum container to stop at 1350px
      // so we set the last breakpoint to the same value
      '2xl': '1350px',
      // The original Tailwind 2xl breakpoint value
      // '2xl': '1536px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          // put the custom site color here
          'one': '#0a6108',
          'two': '#AFB924',
          'three': '#2B7E29',
        },
        content: {
          'text': '#666666',
          'link': '#4e93d8',
          'h2': '#0a6108',
          'h3': '#666666',
          'h4': colors.gray[600],
          'divider': colors.gray[300],
          image: {
            'caption': colors.gray[600],
            'ring': colors.gray[300],
          },
          table: {
            'heading': '#fff',
            'heading-bg': '#539052',
            'border': '#539052',
            'grid-row': '#539052',
            'grid-column': '#539052',
            'alt-row-bg': '#E6EFE6',
          },
          doc: {
            'size': colors.gray[700],
            'description': colors.gray[700],
            'card-bg': colors.white,
            'card-ring': colors.gray[300],
          },
        },
        social: {
          facebook: '#3c5a99',
          linkedin: '#0077b5',
          twitter: '#55acee',
          pinterest: '#cb2027',
        },
      },
      backgroundImage: {
        // 'callout-red': "url('/img/callout-graphic_red.svg'), linear-gradient(to right, #E7751F, #D33D4C)",
      },
      boxShadow: {
        // 'btn' : '2px 2px 0 rgba(0, 0, 0, .5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
