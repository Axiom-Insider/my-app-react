import React, { useEffect, useState } from 'react'
import "./Login.css"
import NavbarOff from '../../components/Navbar/NavbarOff'
import { login } from '../../services/login'
import Alerta from "../../components/Alertas/Alerta"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'


export default function Login() {
  const navigation = useNavigate()
  const [matricula, setMatricula] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const [loading, setLoading] = useState(false)
  const {user} = useAuth()

  console.log(user);
  
    useEffect(() => {
      setErro("");
    }, [matricula, senha]);

  const handleLogin = async (e)=>{
    e.preventDefault()

    if(!matricula || !senha){
      setErro("Preencha todos os campos")
      return
    }

    setLoading(true)
    try {
      const data = await login(matricula, senha);
      console.log(data);
      
      localStorage.setItem("token", data.token)
      localStorage.setItem("expiresin", data.expiresIn)
      localStorage.setItem("funcionario", JSON.stringify(data.funcionario))
      
      if(data.funcionario.adm){
        return navigation("/administrador/home", {state:{mensagem:"Login realizado com sucesso"}})
      }else{
        return navigation("/funcionario/home", {state:{mensagem:"Login realizado com sucesso"}})
      }
    } catch (error) {
      setErro(error.message || "Falha no Login")
    } finally{
      setLoading(false)
    }
  }

  return (
    <div>
      <NavbarOff></NavbarOff>
      {erro &&  (<Alerta msg={erro} tipo={'erro'} />) }
    <div className="container-login">
      <div className="fundoPreto"></div>
        {loading ? 
          <div id="loading" className="hidden">
            <div className="spinner"></div>
              <p className='text-loading'>Carregando...</p>
          </div>
        :   
      <div className="box">
        <p className="titulo">LOGIN</p>
        <form className='formulario' id='meuform' onSubmit={handleLogin}>
          <label className='text'>Matrícula:</label>
            <input required type="text" onChange={(e)=> setMatricula(e.target.value)} pattern="[0-9]*" placeholder=" Digite sua matrícula..." className="input" />
          <label className='text'>Senha:</label>
            <input required type="password" onChange={(e)=> setSenha(e.target.value)} placeholder=" Digite sua senha..." className="input" />
        </form>
         <div className="boxBotao">
          <button form='meuform'  className='botao'>➔</button>
         </div>
      </div>}
    
    </div>
  </div>
  )
}
