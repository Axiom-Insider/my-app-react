import React, { useEffect, useState } from 'react'
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Registro.css"
import { TbClockCheck, TbClockHour8Filled } from 'react-icons/tb'
import horarios from '../../../services/horarios'
import { ImEnter, ImExit } from "react-icons/im";
import Alerta from '../../../components/Alertas/Alerta'

export default function Registro() {
  const [hora, setHora] = useState(new Date())
  const [entrada, setEntrada] = useState('')
  const [saida, setSaida] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')
  const [abrirModal, setAbrirModal] = useState(false);

  const baterPonto = async () => {
    try {
      setAbrirModal(false);
      if(!entrada){
        const dados = await horarios.entrada()
        return setSucesso(dados.message)
      }else{
        const dados = await horarios.saida()
        return setSucesso(dados.message)
      }
    } catch (error) {
      setErro(error.message || "Falha ao verificar entrada")
    }
  };

  useEffect(() => {
    const verificarEntrada = async () => {
      try {
        const dados = await horarios.verificar()
        const { entrada, saida } = dados
        setSaida(saida ? true : false)
        setEntrada(entrada ? true : false)
      } catch (error) {
        setErro(error.message || "Falha ao verificar entrada")
      }
    }
    verificarEntrada()
    const timer = setInterval(() => {
      setHora(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [sucesso, erro])

  
  return (
    <div>
      <NavbarFuncionario />
      {sucesso && (<Alerta msg={sucesso} tipo={'sucesso'} />)}
      {erro && (<Alerta msg={erro} tipo={'erro'} />)}
      {abrirModal && (
        <div className="modal-overlay">
          <div className="modal-caixa">
            <h3>Confirmar Registro</h3>
            <p>Tem certeza que deseja registrar seu horário de {entrada ? <>Saída</> : <>Entrada</>}?</p>
            <div className="botoes">
              <button className="btn confirmar" onClick={baterPonto}>
                Sim
              </button>
              <button className="btn cancelar" onClick={() => setAbrirModal(false)}>
                Não
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          {saida ?
            <div className="col mt-4">
                <div className="sucesso">
                  <i className="icon-check"><TbClockCheck /></i>
                  <h3>Registro concluído!</h3>
                  <p>Até amanhã 👋</p>
                </div>
              </div>
           
            :
            <div>
              {entrada ?
                <div className="col">
                  <div className="data-registro">{hora.toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  <div className="box-registro">
                    <div className="titulo-hora">Registrar Saída <ImExit /></div>
                    <div className="hora"><strong>{hora.toLocaleTimeString("pt-BR")}</strong> </div>
                    <i className='relogio-icone' onClick={()=>setAbrirModal(true)} ><TbClockHour8Filled className='registro' style={{ fontSize: '80px' }} /></i>
                  </div>
                </div>
                :
                <div className="col">
                  <div className="data-registro">{hora.toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  <div className="box-registro">
                    <div className="titulo-hora">Registrar Entrada <ImEnter /></div>
                    <div className="hora"><strong>{hora.toLocaleTimeString("pt-BR")}</strong> </div>
                    <i className='relogio-icone' onClick={()=>setAbrirModal(true)}><TbClockHour8Filled className='registro' style={{ fontSize: '80px' }} /></i> 
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}
