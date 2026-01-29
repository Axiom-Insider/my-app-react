import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ToCheck from "./TokenExn";

export default function ProtectedRoute({ admin }) {
  const location = useLocation()
  const { user} = useAuth()
  const {temp} = useAuth()
  const {adm} = user
  
  console.log(user, temp);
  if (user.length === 0) {
      if (location.pathname === "/login") {
        return <Outlet />
      }
      return <Navigate to={"/login"} replace />
    }
  
    ToCheck(temp) 
  
  if (admin != adm) {
    if (adm) {
      return <Navigate to={"/monitoramento"} replace />
    } else {
      return <Navigate to={"/home"} replace />
    }
  }

  return <Outlet />
}
