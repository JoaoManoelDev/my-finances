import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { UsersProvider } from './contexts/UsersContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UsersProvider>
        <TransactionsProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </TransactionsProvider>
      </UsersProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
