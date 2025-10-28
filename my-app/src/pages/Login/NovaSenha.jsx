import React, { useEffect, useState } from 'react'
import NavbarOff from '../../components/Navbar/NavbarOff'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginDay, loginFirst } from '../../services/login'
import Alerta from '../../components/Alertas/Alerta'
import Loading from '../../components/Loading/Loading'
import { BiSolidError } from 'react-icons/bi'

export default function NovaSenha() {

  const location = useLocation()
  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")
  const [novaSenha, setNovaSenha] = useState("")
  const [senhaDiferente, setSenhaDiferente] = useState(false)
  const [erro, setErro] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigate()
  

  useEffect(()=>{
    if(!location.state){
      navigation("/login", {replace:true})
    }else{
      setCpf(location.state.cpf)
    }

  }, [location, navigation])


  useEffect(()=>{
    setErro(false)
  }, [senha, novaSenha])
  
  useEffect(()=>{
    if(senha !== novaSenha){
      setSenhaDiferente(true)
    }
    if(senha === novaSenha || novaSenha == ""){
      setSenhaDiferente(false)
    }
    
  }, [novaSenha])

  
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
        const data = await loginFirst(cpf, "123", novaSenha)
        return navigation("/login", {state:{sucesso:data.message}, replace:true})
      } catch (error) {
        return navigation("/login", {state:{erro:data.message}, replace:true})        
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
