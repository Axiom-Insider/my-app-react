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
import ProtectedRoute from './components/Auth/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: '/primeira-entrada',
    element: <NovaSenha />
  },
  {
    path: '/administrador/funcionarios/ausencias/:id',
    element: (
      <ProtectedRoute admin={true}>
        <Ausencia />
      </ProtectedRoute>
    )
  },
  {
    path: '/administrador/registro',
    element: (
      <ProtectedRoute admin={true}>
        <RegistroFuncionarios />
      </ProtectedRoute>
    )
  },
  {
    path: '/administrador/funcionarios',
    element:(
      <ProtectedRoute admin={true}>
        <Funcionarios />
      </ProtectedRoute>
    ) 
  },
  {
    path: '/administrador/funcionarios/historico/:id',
    element:
      (
      <ProtectedRoute admin={true}>
        <HistoricoAdm />
      </ProtectedRoute>
    )
  },
  {
    path: '/administrador/feriados',
    element: 
    (
      <ProtectedRoute admin={true}>
        <Feriados />
      </ProtectedRoute>
    )
  },
  {
    path: '/administrador/horarios',
    element: 
    (
      <ProtectedRoute admin={true}>
        <Horarios />
      </ProtectedRoute>
    )
  },
  {
    path: '/administrador/home',
    element:(
      <ProtectedRoute admin={true}>
        <Home />
      </ProtectedRoute>
    ) 
  },
  {
    path: '/login',
    element:( <ProtectedRoute admin={false}><Login /></ProtectedRoute>)
  },
  {
    path: '/funcionario/home',
    element:
    (
      <ProtectedRoute admin={false}>
        <HomeFuncionario />
      </ProtectedRoute>
    )
  },
  {
    path: '/funcionario/registro',
    element: 
    (
      <ProtectedRoute admin={false}>
        <Registro />,
      </ProtectedRoute>
    )
  },
  {
    path: '/funcionario/historico',
    element: 
    (
      <ProtectedRoute admin={false}>
        <Historico />,
      </ProtectedRoute>
    )
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
