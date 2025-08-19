import React, { useEffect, useState } from 'react'
import NavbarOff from '../../components/Navbar/NavbarOff'
import { useLocation } from 'react-router-dom'
import { loginFirst } from '../../services/login'
import Alerta from '../../components/Alertas/Alerta'
import Loading from '../../components/Loading/Loading'
import { BiSolidError } from 'react-icons/bi'

export default function NovaSenha() {

  const location = useLocation()
  const [matricula, setMatricula] = useState("")
  const [senha, setSenha] = useState("")
  const [novaSenha, setNovaSenha] = useState("")
  const [senhaDiferente, setSenhaDiferente] = useState(false)
  const [erro, setErro] = useState(false)
  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    setErro(false)
  }, [senha, novaSenha])

  useEffect(()=>{
    setMatricula(location.state.matricula || null)
    if(senha !== novaSenha){
      setSenhaDiferente(true)
    }
    if(senha === novaSenha || novaSenha == ""){
      setSenhaDiferente(false)
    }
    
  }, [location.state, novaSenha])

  
    const handleLogin = async (e)=>{
      e.preventDefault()

      if(!senha || !novaSenha){
        return setErro("Preencha todos os campos")
      }
      
      if(senhaDiferente){
        return setErro("As senhas estão diferente!")
      }

      setLoading(true)
      try {
        const data = await loginFirst(matricula, "123", novaSenha)
        console.log(data);
      } catch (error) {
        setErro(error.message || "Falha ao registrar nova senha")
    } finally{
      setLoading(false)
    }
    }

  return (
    <div>
       <NavbarOff />
      {erro && (<Alerta msg={erro} tipo={"erro"}></Alerta>)}
    <div className="container-login">
      <div className="fundoPreto"></div>
      {loading && <Loading></Loading>}
      <div className="box">
        <p className="titulo">Primeiro Entrada</p>
        <form className='formulario' id='formNovaSenha' onSubmit={handleLogin}>
          <label className='text'>Nova senha:</label>
          <input required onChange={(e)=> setSenha(e.target.value)} type="password" placeholder=" Digite sua nova senha..." className="input" />
          <label className='text'>Confirmar a nova senha:</label>
          <input required onChange={(e)=> setNovaSenha(e.target.value)} type="password" placeholder=" Confirme a senha..." className="input" /> 
          {senhaDiferente && (
          <div className="senhaDiff">
            <strong><i className="icone-senha"><BiSolidError /></i> As senhas não estão iguais!</strong><br />
          </div>)}
        
        </form>
          <div className="boxBotao">
            <button form='formNovaSenha' className='botao'>➔</button>
          </div>
      </div>
    </div>
    </div>
  )
}
