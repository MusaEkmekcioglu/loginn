import './App.css'
import MainRouter from './router/MainRouter'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './Context/AuthContext'

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
