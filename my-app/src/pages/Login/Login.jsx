import React, { useState } from 'react'
import "./Login.css"
import NavbarOff from '../../components/Navbar/NavbarOff'
import { login } from '../../services/login'
import Alerta from "../../components/Alertas/Alerta"


export default function Login() {
  const [matricula, setMatricula] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e)=>{
    e.preventDefault()

    if(!matricula || !senha){
      setErro("Preencha todos os campos")
      return
    }
    setLoading(true)
    try {
      console.log(matricula, senha);
      await login(matricula, senha);
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
          <div id="loading" class="hidden">
            <div class="spinner"></div>
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
