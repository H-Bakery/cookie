import { ThemeOptions } from '@mui/material'

const headlines = {
  fontFamily: 'Averia Serif Libre',
}

const buttons = {
  fontFamily: 'Averia Serif Libre',
}

const dark: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#D038BA',
    },
    success: {
      main: '#1ADA67',
    },
    grey: {
      50: '#F6F8FC',
      100: '#F2F5FB',
      200: '#E8EEFB',
      300: '#D8E1F4',
      400: '#B0BFD9',
      500: '#909FBE',
      600: '#677695',
      700: '#485776',
      800: '#293858',
      900: '#131F37',
    },
    background: {
      paper: '#131F37',
      default: '#293858',
    },
    text: {
      primary: '#F6F8FC',
      secondary: '#E8EEFB',
      disabled: '#909FBE',
    },
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
    h1: { ...headlines },
    h2: { ...headlines },
    h3: { ...headlines },
    h4: { ...headlines },
    h5: { ...headlines },
    h6: { ...headlines },
    button: { ...buttons },
  },
}

export default dark
