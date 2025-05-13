import { FaUserTie } from "react-icons/fa"
import NavbarAdm from "../../../components/Navbar/NavbarAdm"
import "./Home.css"


function App() {

  return (
    <div>
      <NavbarAdm />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="alertas">
         <div className="row">
          <div className="col-10">
            <div className="titulo-home">Funcionarios que já bateram ponto</div>
          </div>
          <div className="col">
            <div className="data">12/03/2030</div>
          </div>
         </div>
          <div className="linha">
            <div className="icone"><FaUserTie /></div> 
            <div className="info"> Francisco Martins Gonçalves Gomes - <strong>Entrada:</strong> 12:03 | <strong>Saída:</strong> 17:03</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
