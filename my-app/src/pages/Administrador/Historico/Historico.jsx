import { useState } from 'react';
import NavbarAdm from '../../../components/Navbar/NavbarAdm';
import "./Historico.css"
import usuarios from './usuarios';

export default function Historico() {
  
  const [num, setNum] = useState(1);

  const mes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const semana = ['segunda-feira', 'terça-feira', 'quarta-feira'];

  const ausenciaFeriados = (ausencia, feriados) => {
    if (ausencia && feriados) {
      return `${feriados}/${ausencia}`
    } if (ausencia) {
      return ausencia
    }

    return feriados
  }

  const dados = usuarios();

  return (
    <div>
      <NavbarAdm />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="box-historico w-100">
          <div className="summary-cards d-flex align-items-center gap-3 mb-3">
    <div className="card-hour">Total: 30h</div>
    <div className="card-extra">Extras: 2h</div>
  </div>
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
                    <th className='th-h'>Ferias/Ausência</th>
                    <th className='th-h'>Feriados</th>
                    <th className='th-h'>Horário de Entrada</th>
                    <th className='th-h'>Horário de Saída</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((item) => (
                    <tr key={item.id} className="dados trHover">
                      <td>{semana[0]} {()=> setNum(num+ 1)} {num}</td>
                      <td>{ausenciaFeriados(item.ausencia, item.feriados)}</td>
                      <td>Natal</td>
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
