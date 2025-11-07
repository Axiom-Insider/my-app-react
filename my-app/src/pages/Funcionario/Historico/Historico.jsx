import { useEffect, useState } from 'react';
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Historico.css"
import horarios from "../../../services/horarios"
import usuarios from './usuarios';
import Alerta from '../../../components/Alertas/Alerta';

export default function Historico() {
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')
  const [historico, setHistorico] = useState([])
  const [anoSelect, setAnoSelect] = useState('')
  const [anos, setAnos] = useState([])
  const [mesSelect, setMesSelect] = useState('')
  
  const mes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  useEffect(()=>{
    const feachDate = async ()=>{
      try {
        const date = new Date()
        const dadosAnos = await horarios.ano()
        setAnos(dadosAnos.dados)
        setMesSelect(date.getMonth())
        
        const dados = await horarios.historicoFuncionario(date.getMonth() + 1, date.getFullYear().toString())
        console.log(dados.historico);
        
        setHistorico(dados.historico)
        return
        } catch (error) {
        setErro(error.message || "Falha ao verificar entrada")
      }
    }
    feachDate()
  },[])

  useEffect(()=>{
    const feachDate = async ()=>{
      try {
        const date = new Date()

        const dados = await horarios.historicoFuncionario(mesSelect || date.getMonth() + 1, anoSelect || date.getFullYear().toString())
        
        setHistorico(dados.historico)
        return
        } catch (error) {
        setErro(error.message || "Falha ao verificar entrada")
      }
    }
      feachDate()
  },[mesSelect, anoSelect])


  const ausenciaFeriados = (ausencia, feriados)=>{
    if(ausencia && feriados){
      return `${feriados}/${ausencia}`
    }if(ausencia){
      return ausencia
    }

    return feriados
  }



  return (
    <div>
      {sucesso && (<Alerta msg={sucesso} tipo={'sucesso'} />)}
      {erro && (<Alerta msg={erro} tipo={'erro'} />)}
      <NavbarFuncionario />
      <div className="container d-flex justify-content-center align-items-center">
  <div className="box-historico w-100">
    <div className="row g-3">
      <div className="col-6 col-md-3">
        <select className="form-select" value={mesSelect} onChange={(e)=>{setMesSelect(e.target.value)}} id="mes" aria-label="Selecionar mês"  >
          {mes.map((nome, index) => (
            <option key={index} value={index}>{nome}</option>
          ))}
        </select>
      </div>
      <div className="col-6 col-md-3">
        <select className="form-select" onChange={(e)=>{setAnoSelect(e.target.value)}}  id="ano" aria-label="Selecionar ano" >
          {anos.map(ano=>(
            <option key={ano.ano} value={ano.ano}>{ano.ano}</option>
          ))}
        </select>
      </div>
    </div>
    <div className="row mt-4">
      <div className="table-responsive">
        <table className="tabela">
          <thead>
            <tr>
              <th className='th-h'>Data</th>
              <th className='th-h'>Feriado/Ausência</th>
              <th className='th-h'>Horário de Entrada</th>
              <th className='th-h'>Horário de Saída</th>
            </tr>
          </thead>
          <tbody>
            {historico.map((item) => (
              <tr key={item.dia} className="dados trHover">
                <td className='data-historico'>{item.dia} - {item.diaNome === 'Sábado' || item.diaNome === 'Domingo' ? <strong>{item.diaNome}</strong> : <>{item.diaNome}</> }</td>
                <td>{ausenciaFeriados(item.ausencias, item.feriados)}</td>
                <td>{item.diaNome == 'Domingo' ? '--------' : <>{item.entrada}</>}</td>
                <td>{item.diaNome == 'Domingo' ? '--------' : <>{item.saida}</>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
