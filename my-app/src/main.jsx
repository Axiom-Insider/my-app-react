import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Administrador/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'


//configurando rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeFuncionario from './pages/Funcionario/Home/Home.jsx'
import Historico from './pages/Funcionario/Historico/Historico.jsx'

const router = createBrowserRouter([
  {
    path: '/administrador/home',
    errorElement: <div>error</div>,
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path:'/funcionario/home',
    element: <HomeFuncionario />
  },
  {
    path:'/funcionario/historico',
    element: <Historico /> ,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
