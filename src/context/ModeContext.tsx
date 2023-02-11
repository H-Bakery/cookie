import React from 'react'
import { Product } from '../components/products/types'
import { PRODUCTS } from '../mocks/products'

type Mode = 'dark' | 'light'

interface ContextProps {
  mode: Mode
  setMode: (mode: Mode) => void
}

export const ModeContext = React.createContext({} as ContextProps)

interface Props {
  children: React.ReactNode
}

const ModeProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = React.useState<Mode>('dark')

  const value = {
    mode,
    setMode,
  }

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>
}

export default ModeProvider
