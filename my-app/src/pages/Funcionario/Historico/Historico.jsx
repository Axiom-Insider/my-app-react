import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Historico.css"
import usuarios from './usuarios';

export default function Historico() {
  const mes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const dados = usuarios();

  return (
    <div>
      <NavbarFuncionario />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="box-historico">
          <div className="row">
            <div className="col">
              <select class="form-select" id="mes" aria-label="Default select example">
                {mes.map((nome, index) =>(
                    <option value={index}>{nome}</option>
                  ))}
              </select>
            </div>
            <div className="col-10">
              <select className="form-select" id="ano" aria-label="Default select example">
              <option value="2024" selected>2025</option>
                <option value="2024">2024</option>
                </select>
            </div>
          </div>
          <div className="row mt-4">
            <table className='tabela'>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Feriado</th>
                  <th>Horário de Entrada</th>
                  <th>Horário de Saída</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((dados)=>( 
                  <tr key={dados.id}>
                      <td>{dados.data}</td>
                      <td>{dados.feriados}</td>
                      <td>{dados.hora_entrada}</td>
                      <td>{dados.hora_saida}</td>    
                  </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  )
}
