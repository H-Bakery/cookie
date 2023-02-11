import React from 'react'

import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'

import createEmotionCache from '../utils/createEmotionCache'
import ModeProvider, { ModeContext } from '../context/ModeContext'
import App from './App'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        {/* @ts-ignore */}
        <Hydrate state={pageProps.dehydratedState}>
          <ModeProvider>
            <App>
              <ReactQueryDevtools initialIsOpen />
              <Component {...pageProps} />
            </App>
          </ModeProvider>
        </Hydrate>
      </CacheProvider>
    </QueryClientProvider>
  )
}

export default MyApp
