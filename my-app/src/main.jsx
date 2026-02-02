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
import Pagina404 from './pages/Erro/Erro.jsx';

const router = createBrowserRouter([
   {
        path:"*",
        element: <Pagina404></Pagina404>
      },
  {
    element: <ProtectedRoute admin={true}/>,
    children: [
     {
    path: '/monitoramento',
    element:<Home />
  },
   {
    path: '/ausencias/:id',
    element:<Ausencia/>
  },
  {
    path: '/cadastro',
    element: <RegistroFuncionarios/>
  },
  {
    path: '/funcionarios',
    element:<Funcionarios />
  },
  {
    path: '/historico/:id',
    element:<HistoricoAdm/>
  },
  {
    path: '/feriados',
    element: <Feriados/>
  },
  {
    path: '/horarios',
    element:<Horarios/>
  },
     
    ],
  },
   {
    path: '/primeira-entrada',
    element: <NovaSenha />
  },
  {
    element: <ProtectedRoute admin={false}/>,
    children: [
     {
    path: '/home',
    element:<HomeFuncionario />
   },
    {
    path: '/login',
    element:<Login />
  },
  {
    path: '/registro',
    element: <Registro></Registro>
  },
  {
    path: '/historico',
    element: <Historico></Historico>
  }   
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
