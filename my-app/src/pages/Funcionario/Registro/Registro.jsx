import React, { useEffect, useState } from 'react'
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Registro.css"
import { TbClockHour8Filled } from 'react-icons/tb'

export default function Registro() {
  const [hora, setHora] = useState(new Date())

  useEffect(()=>{
    const timer = setInterval(()=>{
      setHora(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <NavbarFuncionario />
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <div className="data-registro">{hora.toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</div>
            <div className="box-registro">
              <div className="titulo">Registrar Saída</div>
              <div className="hora"><strong>{hora.toLocaleTimeString("pt-BR")}</strong> </div>
              <TbClockHour8Filled className='registro' style={{fontSize:'80px'}} />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
