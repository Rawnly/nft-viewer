import { amberDark, blueDark, cyanDark, grayDark, mintDark, tealDark, tomatoDark } from '@radix-ui/colors'
import { createStitches, PropertyValue } from '@stitches/react'

export const { createTheme, css, theme, styled, getCssText, globalCss, keyframes } =  createStitches( {
	theme: {
    colors: {
      ...blueDark,
      ...tomatoDark,
      ...cyanDark,
      ...tealDark,
      ...amberDark,
      ...mintDark,
      ...grayDark
    }
  },
  utils: {
    // Margins
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Paddings
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      marginTop: value,
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      marginRight: value,
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      marginBottom: value,
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      marginLeft: value,
    }),
    px: (value: PropertyValue<'padding'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    py: (value: PropertyValue<'padding'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    viewportSize: (size: number) => ({
      width: `${size}vw`,
      height: `${size}vh`
    }),

    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value
    }),

    flexCenter: (direction: PropertyValue<'flexDirection'>) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: direction,
    }),

    dotsBg: (backgroundColor: PropertyValue<'backgroundColor'>) => ({
      backgroundColor,
      backgroundImage: 'radial-gradient(hsl(0 0% 15%) 1px,transparent 0)',
      backgroundPosition: '50% center',
      backgroundSize: '25px 25px'
    }),

    radialGradient: (value: string) => ({
      backgroundImage: `radial-gradient(${value})`
    }),

    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`
    }),
  }
} )



export const applyGlobalStyle = globalCss({
  '*': {
    boxSizing: 'border-box',
    transition: 'background .15s ease, color .15s ease',
    '&::selection': {
      color: 'white',
      background: '$cyan8'
    }
  },
  html: {
    fontSize: 18,
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif',
    margin: 0,
    padding: 0,
    size: '100%',
    color: 'white',
    background: 'black'
  },
  body: {
    fontSize: 18,
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif',
    margin: 0,
    padding: 0,
    size: '100%',
    color: 'white',
    background: 'black'
  }
})
