import React from 'react'
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Home.css"
import { IoPersonCircleSharp } from "react-icons/io5";

export default function HomeFuncionario() {
  return (
    <div>
      <NavbarFuncionario />
      <div className="container">
        <div className="row">
          <div className="col-4">
           <div className="box"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
