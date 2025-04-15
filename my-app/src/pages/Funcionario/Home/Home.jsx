import React from 'react'
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Home.css"
import { IoPersonCircleSharp } from "react-icons/io5";

export default function HomeFuncionario() {
  return (
    <div>
      <NavbarFuncionario />
     
      <div className="container-home">
        <div className="box-home">
                  <div class="head">
                     <div class="avatar"><IoPersonCircleSharp /></div>
                    <div class="titulo">Rafael de Paula Siqueira de Deus</div>
                  </div>    
                <div class="body">
                    <div><span class="text">Entrada:</span> 07:00 <span class="text">Saída:</span> 17:58</div>
                    <div><span class="text">Matrícula:</span> 12085 <span class="text">Função:</span> <span>Técnico de Informática</span></div>
                </div>
            </div>
        <div className="data-body">Data:12/03/2025</div>
            
      </div>
    </div>
  )
}
