import React from 'react'
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Home.css"

export default function HomeFuncionario() {
  return (
    <div>
      <NavbarFuncionario />
      
      <div className="container-home">
        <div className="box">      
            <div class="card">
                <div class="avatar">👤</div>
                <div class="info">
                    <div class="name">Francisco Martins Gonçalves Gomes</div>
                    <div><span class="muted">Matrícula:</span> 12085 <span class="muted">Info:</span> <span>INFO</span></div>
                    <div><span class="muted">Entrada:</span> 07:00 <span class="muted">Saída:</span> 17:58</div>
                </div>
            </div>
        </div>
      <div class="date">Data: <strong>04/04/25</strong></div>


      </div>
    </div>
  )
}
