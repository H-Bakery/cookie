import React from 'react'

import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'

import createEmotionCache from '../utils/createEmotionCache'
import ModeProvider, { ModeContext } from '../context/ModeContext'
import App from './App'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ModeProvider>
        <App>
          <Component {...pageProps} />
        </App>
      </ModeProvider>
    </CacheProvider>
  )
}

export default MyApp
