import { useEffect, useState } from 'react';
import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Historico.css"
import horarios from "../../../services/horarios"
import usuarios from './usuarios';

export default function Historico() {
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')
  const [historico, setHistorico] = useState([])
  const mes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  useEffect(()=>{
    const feachDate = async ()=>{
      try {
        const dados = await horarios.historicoFuncionario("11", "2025")
        
        return setHistorico(dados.historico)
      } catch (error) {
        setErro(error.message || "Falha ao verificar entrada")
      }
    }
    feachDate()
  })
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
        <select className="form-select" id="mes" aria-label="Selecionar mês">
          {mes.map((nome, index) => (
            <option key={index} value={index}>{nome}</option>
          ))}
        </select>
      </div>
      <div className="col-6 col-md-3">
        <select className="form-select" id="ano" aria-label="Selecionar ano" defaultValue="2025">
          <option value="2025">2025</option>
          <option value="2024">2024</option>
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
            {dados.map((item) => (
              <tr key={item.id} className="dados trHover">
                <td>{item.data}</td>
                <td>{ausenciaFeriados(item.ausencia, item.feriados)}</td>
                <td>{item.hora_entrada}</td>
                <td>{item.hora_saida}</td>
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
