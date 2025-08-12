import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'



//configurando rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login.jsx'
import Home from './pages/Administrador/Home/Home.jsx'
import HomeFuncionario from './pages/Funcionario/Home/Home.jsx'
import Registro from './pages/Funcionario/Registro/Registro.jsx'
import Historico from './pages/Funcionario/Historico/Historico.jsx'
import Horarios from './pages/Administrador/Horarios/Horarios.jsx'
import Feriados from './pages/Administrador/Feriados/Feriados.jsx'
import HistoricoAdm from "./pages/Administrador/Historico/Historico.jsx";
import Funcionarios from './pages/Administrador/Funcionarios/Funcionarios.jsx';
import RegistroFuncionarios from "./pages/Administrador/Registro/Registro.jsx";
import Ausencia from "./pages/Administrador/Ausencias/Ausencias.jsx";
import NovaSenha from './pages/Login/NovaSenha.jsx';

const router = createBrowserRouter([
  {
    path:'/primeira_entrada',
    element:<NovaSenha />
  },
  {
    path:'/administrador/funcionarios/ausencias/:id',
    element:<Ausencia />
  }, 
  {
    path:'/administrador/registro',
    element:<RegistroFuncionarios />
  }, 
  {
    path:'/administrador/funcionarios',
    element:<Funcionarios />
  },
  {
    path:'/administrador/funcionarios/historico/:id',
    element:<HistoricoAdm />
  },
  {
    path:'/administrador/feriados',
    element:<Feriados />
  },
  {
    path:'/administrador/horarios',
    element:<Horarios />
  },
  {
    path: '/administrador/home',
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
    path: '/funcionario/registro',
    element: <Registro />,
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
