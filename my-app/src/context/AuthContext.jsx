import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const storedFuncionario = localStorage.getItem("funcionario")
        console.log(storedFuncionario);
        if(storedFuncionario){
            setUser(JSON.parse(storedFuncionario))
        }
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
        localStorage.removeItem("funcionario")
        localStorage.removeItem("token")
        localStorage.removeItem("expiresin")
    }

    return(
        <AuthContext.Provider value={{user, setUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>  {return useContext(AuthContext)}