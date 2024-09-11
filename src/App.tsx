import { FC } from 'react'
import AppRouter from './router/AppRouter'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { theme } from './styles'
import COLORS from './styles/colors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        },
        'body': {
          backgroundColor: COLORS.background
        },
        'button': {
          backgroundColor: 'transparent',
          border: 'none',
          padding: 0,
          boxShadow: 'none',
          cursor: 'pointer',
        },
        'a': {
          textDecoration: 'none'
        }
      }}
      />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <AppRouter />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
