import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";


const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState([])
    const [temp, setTemp] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (token) {
        const decoded = jwtDecode(token);
        setUser(decoded)
        }
        const exp = localStorage.getItem("expiresin");
        setTemp(+exp)
        setLoading(false)
    }, [])

    if(loading){
       return (  <div id="loading" className="hidden">
            <div className="spinner"></div>
              <p className='text-loading'>Carregando...</p>
          </div>)
    }

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("expiresin")
    }

    return(
        <AuthContext.Provider value={{user,temp, logout,}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>  {return useContext(AuthContext)}