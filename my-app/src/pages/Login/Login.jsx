import React, { useEffect, useState } from 'react'
import "./Login.css"
import NavbarOff from '../../components/Navbar/NavbarOff'
import {loginDay}  from '../../services/login'
import Alerta from "../../components/Alertas/Alerta"
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'


export default function Login() {
  const navigation = useNavigate()
  const [matricula, setMatricula] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const [sucesso, setSucesso] = useState("");
  const [loading, setLoading] = useState(false)
  const location = useLocation()


  useEffect(()=>{
    if(location.state){
      setSucesso(location.state.sucesso)
      setErro(location.state.erro)
    }
  }, [location])

  useEffect(() => {
    setErro("");
    setSucesso("");
  }, [matricula, senha]);

  const handleLogin = async (e)=>{
    e.preventDefault()

    if(!matricula || !senha){
      setErro("Preencha todos os campos")
      return
    }

    setLoading(true)
    try {
      const data = await loginDay(matricula, senha);   
       if(!data.primeiraEntrada){
            return navigation("/primeira-entrada", {state:{matricula}, replace:true})
        }
      if(data.funcionario.adm){
        return navigation("/administrador/home", {state:{mensagem:"Logado com sucesso"}, replace:true})
      }else{
        return navigation("/funcionario/home", {state:{mensagem:"Logado com sucesso"}, replace:true})
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
      {sucesso && (<Alerta msg={sucesso} tipo={'sucesso'} />) }
      {erro &&  (<Alerta msg={erro} tipo={'erro'} />) }
    <div className="container-login">
      <div className="fundoPreto"></div>
        {loading ? 
          <Loading></Loading>
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
