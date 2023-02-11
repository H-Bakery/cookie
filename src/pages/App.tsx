import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import CartProvider from '../context/CartContext'
import { ModeContext } from '../context/ModeContext'
import dark from '../themes/dark'
import light from '../themes/light'

interface Props {
  children: React.ReactNode
}

const App: React.FC<Props> = ({ children }) => {
  const { mode } = React.useContext(ModeContext)

  const lightTheme = createTheme(light)
  const darkTheme = createTheme(dark)
  console.log(mode)

  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <CartProvider>
        <CssBaseline />
        {children}
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
