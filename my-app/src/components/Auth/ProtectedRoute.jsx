import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ToCheck from "./TokenExn";

export default function ProtectedRoute({ children, admin }) {
  const location = useLocation()
  const { user } = useAuth()
  const token = localStorage.getItem("token")
  const funcionario = JSON.parse(localStorage.getItem('funcionario'))
  
  
  if (!user || !funcionario) {
    if (!token) {
      if (location.pathname === "/login") {
        return children
      }
      return <Navigate to={"/login"} replace />
    }
  }
  
  ToCheck(token) 
  
  const adm = funcionario.adm
  if (admin != adm) {
    if (adm) {
      return <Navigate to={"/administrador/home"} replace />
    } else {
      return <Navigate to={"/funcionario/home"} replace />
    }
  }

  return children
}
