import React, { useEffect, useState } from 'react'
import NavbarOff from '../../components/Navbar/NavbarOff'
import { useLocation } from 'react-router-dom'
import { loginFirst } from '../../services/login'
import Alerta from '../../components/Alertas/Alerta'
import Loading from '../../components/Loading/Loading'

export default function NovaSenha() {

  const location = useLocation()
  const [matricula, setMatricula] = useState("")
  const [senha, setSenha] = useState("")
  const [novaSenha, setNovaSenha] = useState("")
  const [senhaDif, setSenhaDif] = useState(false)
  const [erro, setErro] = useState("")
  const [loading, setLoading] = useState(false)
  

  useEffect(()=>{
    setMatricula(location.state.matricula || null)
  }, [location.state])

    const digitandoSenha = (e)=>{
      setSenha(e.target.value)
    }

    const digitandoNovaSenha = (e)=>{
      setNovaSenha(e.target.value)
      console.log(novaSenha, senha);
      
      if(novaSenha !== senha){
        setSenhaDif(true)
      }else{
        setSenhaDif(false)
      }
    }
    const handleLogin = async (e)=>{
      e.preventDefault()

      if(!senha || !novaSenha){
        return setErro("Preencha todos os campos")
      }
      
      setLoading(true)
      try {
        const data = await loginFirst(matricula, senha, novaSenha)
        console.log(data);
      } catch (error) {
        setErro(error.message || "Falha no Login")
    } finally{
      setLoading(false)
    }
    }

  return (
    <div>
       <NavbarOff />
    <div className="container-login">
      {erro && (<Alerta msg={erro} tipo={"erro"}></Alerta>)}
      {loading && <Loading></Loading>}
      <div className="fundoPreto"></div>
      <div className="box">
        <p className="titulo">Primeiro Entrada</p>
        <form className='formulario' id='formNovaSenha' onSubmit={handleLogin}>
          <label className='text'>Nova Senha:</label>
          <input onChange={digitandoSenha} type="password" placeholder=" Digite sua nova senha..." className="input" />
          <label className='text'>Confirmar Senha:</label>
          <input onChange={digitandoNovaSenha} type="password" placeholder=" Confirme a senha..." className="input" />
          {senhaDif && ( 
              <div className="senhaDiff">
            <strong>As senhas não estão iguais!</strong><br />
          </div>
          )}
        
        </form>
         <div className="boxBotao">
         <button form='formNovaSenha' className='botao'>➔</button>
         </div>
      </div>
    </div>
    </div>
  )
}
