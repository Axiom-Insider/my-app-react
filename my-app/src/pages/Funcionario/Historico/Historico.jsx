import NavbarFuncionario from '../../../components/Navbar/NavbarFuncionario'
import "./Historico.css"

export default function Historico() {
  const mes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

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
            <div className="col">
              <select class="form-select" id="mes" aria-label="Default select example">
                {mes.map((nome, index) =>(
                  <option value={index}>{nome}</option>
                ))}
                </select>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
