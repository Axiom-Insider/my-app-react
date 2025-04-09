import React from 'react'
import "./Login.css"
import NavbarOff from '../../components/Navbar/NavbarOff'


export default function Login() {
  return (
    <div>
      <NavbarOff></NavbarOff>
    <div className="container">
      <div className="box">
        <h2 className="titulo">LOGIN</h2>
        <form className='formulario' action="">
          <label className='text'>Matrícula:</label>
          <input type="text" placeholder="Digite sua matrícula.." className="input" />
          <label className='text'>Senha:</label>
          <input type="password" placeholder="Digite sua senha.." className="input" />
        </form>
         <span className='botao'>➔</span>
      </div>
    </div>
  </div>
  )
}
