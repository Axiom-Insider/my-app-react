import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";



export default function ProtectedRoute({children, admin}) {
    const location = useLocation()
    const {user, loading} = useAuth()
    const token = localStorage.getItem("token")
    const primeiraEntrada = localStorage.getItem("primeiraEntrada")
    const funcionario = JSON.parse(localStorage.getItem('funcionario'))
    var adm
    if(loading){
      return (  <div id="loading" className="hidden">
            <div className="spinner"></div>
              <p className='text-loading'>Carregando...</p>
          </div>)
    }
    
    if(!user){
      if(!token){
        if(location.pathname === "/login"){
          return children
        }
        return <Navigate to={"/login" } replace />
      }
    }
    
    adm = funcionario.adm
    
    if(admin != adm){
      if(adm){
         return <Navigate to={"/administrador/home"} replace/> 
      }else{
         return <Navigate to={"/funcionario/home"} replace/>
      }
    }

    console.log('carrou a pagina')
    return children
}
