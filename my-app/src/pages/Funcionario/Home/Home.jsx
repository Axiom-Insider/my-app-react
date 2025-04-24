import React from 'react'
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Home.css"
import { IoPersonCircleSharp } from "react-icons/io5";

export default function HomeFuncionario() {
  return (
    <div>
      <NavbarFuncionario />
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <div className="date"><strong>Data:</strong> 04/09/2025</div>
            <div className="box">
              <div className="head">
                <span className='avatar'> <IoPersonCircleSharp/> </span>
                <span className="nome">Francisco Martins Gonçalves Gomes</span>
              </div>
              <div className="body">
                <p><span className="matricula"><strong>Maticula: </strong>12085</span> <span className='entrada'><strong>Entrada: </strong> 12:09 </span></p>
                <p><span className="cargo"><strong>Cargo: </strong>Pintor</span> <span className='saida'><strong>Saída: </strong> 17:09 </span></p>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
