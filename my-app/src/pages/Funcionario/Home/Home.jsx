import React, { useEffect, useState } from 'react'
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Home.css"
import { IoPersonCircleSharp } from "react-icons/io5";
import funcionario from '../../../services/funcionario';
import { FaCheck } from 'react-icons/fa';

export default function HomeFuncionario() {

  const [data] = useState(new Date())
  const [nome, setNome] = useState('')
  const [matricula, setMatricula] = useState("")
  const [cargo, setCargo] = useState("")
  const [entrada, setEntrada] = useState('')
  const [saida, setSaida] = useState('')

  useEffect(()=>{
    const feachData = async()=>{
    const dados = await funcionario.getId()
    
    setNome(dados.nome)
    setMatricula(dados.matricula)
    setCargo(dados.cargo)
    
    return 
    }
    feachData()
  },[])

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
                <span className="nome">{nome}</span>
              </div>
              <div className="body">
                <div className='caixa' ><div className="matricula"><strong>Matrícula:</strong>{matricula}</div> <div className="cargo"><strong>Cargo:</strong>{cargo}</div></div>
                <div className="caixa"><div className='entrada'><strong>Entrada:</strong> <FaCheck /> </div> <div className='saida'><strong>Saída:</strong> <FaCheck /> </div></div>             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
