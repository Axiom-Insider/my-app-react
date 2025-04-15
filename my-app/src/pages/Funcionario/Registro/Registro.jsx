import React from 'react'
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Registro.css"

export default function Registro() {
  return (
    <div>
      <NavbarFuncionario />
      <div className="container-home">
       
        <div className="box">
          <div className="head">
          <div className="titulo">Registrar-Horário</div>
        </div>
          <div className="tempo">12:00</div>
          <span className="botao-registro"></span>
        </div>
        <div className="data-body">Data:12/03/2025</div>
      </div>
    </div>
  )
}
