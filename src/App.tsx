import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AppContainer } from './AppStyles'
import { Router } from './Routes'
import { GlobalStyles } from './styles/globa'
import { defaultTheme } from './styles/themes/default'
import { FinancialProvider } from './context/FinancialContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <GlobalStyles/>
        <BrowserRouter>
          <FinancialProvider>
            <Router/>
          </FinancialProvider>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
