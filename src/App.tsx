import {BrowserRouter} from 'react-router-dom'
import { Router } from './Routes'
import { GlobalStyles } from './styles/globa'

function App() {
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    </>  
  )
}

export default App
