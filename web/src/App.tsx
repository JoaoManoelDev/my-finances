import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { AuthProvider } from './contexts/AuthContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <TransactionsProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </TransactionsProvider>
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
