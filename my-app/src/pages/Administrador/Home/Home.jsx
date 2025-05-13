import NavbarAdm from "../../../components/Navbar/NavbarAdm"
import "./Home.css"


function App() {

  return (
    <div>
      <NavbarAdm />
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
        <div className="titulo">Funcionarios que já bateram ponto</div>
          <div className="col-5">
            <div className="alertas">Francisco Martins Gonçalves Gomes - <strong>Entrada:</strong> 12:03 | <strong>Saída:</strong> 17:03</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
