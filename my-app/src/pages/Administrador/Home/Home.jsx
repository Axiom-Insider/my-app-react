import { FaClock, FaRegClock, FaUserTie } from "react-icons/fa"
import NavbarAdm from "../../../components/Navbar/NavbarAdm"
import "./Home.css"
import { CiClock2 } from "react-icons/ci"


function App() {

  return (
    <div>
      <NavbarAdm />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="alertas">
          <div className="head-home">
            <div className="clock"><FaRegClock /> </div>
            <div className="titulo-home">
              Funcionários que já bateram o ponto
            </div>
            <div className="data">12/03/2025</div>
          </div>
          <div className="linha">
            <div className="grupo">
              <div className="icone">FM</div> 
              <div className="info"> Francisco Martins Gonçalves Gomes</div> 
            </div>
             <div className="horarios"><strong>Entrada:</strong> 12:03 | <strong>Saída:</strong> 17:03</div> 
          </div>
          <div className="linha">
            <div className="icone">FM</div> 
            <div className="info"> Francisco Martins Gonçalves Gomes - <strong>Entrada:</strong> 12:03 | <strong>Saída:</strong> 17:03</div>
          </div>
          <div className="linha">
            <div className="icone">FM</div> 
            <div className="info"> Francisco Martins Gonçalves Gomes - <strong>Entrada:</strong> 12:03 | <strong>Saída:</strong> 17:03</div>
          </div>
          <div className="linha">
            <div className="icone">FM</div> 
            <div className="info"> Francisco Martins Gonçalves Gomes - <strong>Entrada:</strong> 12:03 | <strong>Saída:</strong> 17:03</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
