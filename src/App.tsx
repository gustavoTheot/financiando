import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AppContainer } from './AppStyles'
import { Router } from './Routes'
import { GlobalStyles } from './styles/globa'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <GlobalStyles/>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
