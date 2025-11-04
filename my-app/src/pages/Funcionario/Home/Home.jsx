import React, { useEffect, useState } from 'react'
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Home.css"
import { IoPersonCircleSharp } from "react-icons/io5";
import funcionario from '../../../services/funcionario';
import horario from '../../../services/horarios';
import { FaCheck, FaCheckSquare, FaHourglassHalf, FaRegCheckSquare } from 'react-icons/fa';

export default function HomeFuncionario() {

  const [data] = useState(new Date())
  const [nome, setNome] = useState('')
  const [matricula, setMatricula] = useState("")
  const [cargo, setCargo] = useState("")
  const [entrada, setEntrada] = useState('')
  const [saida, setSaida] = useState('')

  useEffect(() => {
    const feachData = async () => {
      const dadosFuncionario = await funcionario.getId()
      const { nome, matricula, cargo } = dadosFuncionario
      const dadosHora = await horario.verificar()
      const {entrada, saida} = dadosHora

      setNome(nome)
      setMatricula(matricula)
      setCargo(cargo)
      setEntrada(entrada)
      setSaida(saida)
    }
    feachData()
  }, [])

  return (
    <div>
      <NavbarFuncionario />
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <div className="date">{data.toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
            <div className="box-home">
              <div className="head">
                <span className='avatar'> <IoPersonCircleSharp /> </span>
                <span className="nome">{nome}</span>
              </div>
              <div className="body">
                <div className='caixa' ><div className="matricula"><strong>Matrícula: </strong>{matricula}</div> 
                <div className="cargoHome"><strong>Cargo: </strong>{cargo}</div></div>
                <div className="caixa">
                  {entrada ? 
                      <div className='entrada'><strong>Entrada:</strong> {entrada}H <i className='checkHoras'> <FaCheckSquare /></i>
                      </div>
                    : 
                      <div className='entrada'><strong>Entrada:</strong> <i className='wait'> <FaHourglassHalf /></i></div> 
                    }
                    {saida ? 
                      <div className='saida'><strong>Saída:</strong> {saida}H <i className='checkHoras'> <FaCheckSquare /> </i>
                      </div>
                    : 
                      <div className='saida'><strong>Saída:</strong> <i className='wait'> <FaHourglassHalf /></i></div> 
                    }  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
