import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/Header'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
