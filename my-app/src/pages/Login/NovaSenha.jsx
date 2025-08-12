import React from 'react'
import NavbarOff from '../../components/Navbar/NavbarOff'

export default function NovaSenha() {
  return (
    <div>
       <NavbarOff />
    <div className="container-login">
      <div className="fundoPreto"></div>
      <div className="box">
        <p className="titulo">Primeira Senha</p>
        <form className='formulario' action="">
          <label className='text'>Nova Senha:</label>
          <input type="password" placeholder=" Digite sua nova senha..." className="input" />
          <label className='text'>Confirmar Senha:</label>
          <input type="password" placeholder=" Confirme a senha..." className="input" />
        
        </form>
         <div className="boxBotao">
         <span className='botao'>➔</span>
         </div>
      </div>
    </div>
    </div>
  )
}
