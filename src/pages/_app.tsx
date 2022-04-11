import GlobalStyle from '../styles/global'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PostsContextProvider from '../context/PostsContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient()

  return (
    <PostsContextProvider>
      <QueryClientProvider client={queryClient}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
          </ThemeProvider>
        </MuiThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </PostsContextProvider>
  )
}

export default MyApp
