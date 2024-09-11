import { FC } from 'react'
import AppRouter from './router/AppRouter'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { theme } from './styles'
import COLORS from './styles/colors'

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
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
