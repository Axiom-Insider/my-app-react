import React, { useEffect, useState } from 'react'
import NavbarOff from '../../components/Navbar/NavbarOff'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginFirst } from '../../services/login'
import Alerta from '../../components/Alertas/Alerta'
import Loading from '../../components/Loading/Loading'
import { BiSolidError } from 'react-icons/bi'

export default function NovaSenha() {

  const location = useLocation()
  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")
  const [novaSenha, setNovaSenha] = useState("")
  const [senhaDiferente, setSenhaDiferente] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigate()

  const [alerta, setAlerta] = useState(false)
  const [tipoAlerta, setTipoAlerta] = useState('')
  const [close, setClose] = useState(false)
  

  useEffect(()=>{
    if(!location.state){
      navigation("/login", {replace:true})
    }else{
      setCpf(location.state.cpf)
    }

  }, [location, navigation])

  useEffect(()=>{
    if(senha !== novaSenha){
      setSenhaDiferente(true)
    }
    if(senha === novaSenha || novaSenha == ""){
      setSenhaDiferente(false)
    }
    
  }, [novaSenha])

     //alerta
        useEffect(() => {
        if (alerta) {
          const t1 = setTimeout(() => {
            setClose(true); 
          }, 2000);
  
          const t2 = setTimeout(() => {
            setAlerta(false)
            setClose(false)
          }, 2500)
  
          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
          };
        }
      }, [alerta]);
  
    const handleLogin = async (e)=>{
      e.preventDefault()

      if(!senha || !novaSenha){
        setAlerta("Preencha todos os campos")
        setTipoAlerta("erro")
        return
      }
      
      if(senhaDiferente){
        setAlerta("As senhas digitadas não são iguais")
        setTipoAlerta("erro")
        return
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
       {alerta && (<Alerta msg={alerta} tipo={tipoAlerta} close={close} />) }
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
