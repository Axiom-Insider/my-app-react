import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";



export default function ProtectedRoute({children, admin}) {
    const {user, loading} = useAuth()
        
    if(loading){
      return (  <div id="loading" className="hidden">
            <div className="spinner"></div>
              <p className='text-loading'>Carregando...</p>
          </div>)
    }

    if(!user && !loading){
      return <Navigate to={"/login" } replace />
    }

    const adm = user.adm
    console.log(user, !user.adm, admin);
    
    if(admin != user.adm){
      if(adm){
         return <Navigate to={"/administrador/home"} replace/> 
      }else{
         return <Navigate to={"/funcionario/home"} replace/>
      }
    }

    console.log('carrou a pagina')
    return children
}
