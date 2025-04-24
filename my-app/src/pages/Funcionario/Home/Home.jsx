import React, { useState } from 'react'
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Home.css"
import { IoPersonCircleSharp } from "react-icons/io5";

export default function HomeFuncionario() {

  const [data] = useState(new Date())

  return (
    <div>
      <NavbarFuncionario />
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <div className="date">{data.toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</div>
            <div className="box-home">
              <div className="head">
                <span className='avatar'> <IoPersonCircleSharp/> </span>
                <span className="nome">Francisco Martins Gonçalves Gomes</span>
              </div>
              <div className="body">
                <div className='caixa' ><div className="matricula"><strong>Maticula:</strong>12085</div> <div className="cargo"><strong>Cargo:</strong>Pintor</div></div>
                <div className="caixa"><div className='entrada'><strong>Entrada:</strong>12:09 </div> <div className='saida'><strong>Saída:</strong>17:09 </div></div>             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
