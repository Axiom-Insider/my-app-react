import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import "./Ausencias.css";

export default function Ausencias() {
    return (
        <div>
            <NavbarAdm />
            <div className="container d-flex justify-content-center align-items-center">

                <div className="tabela-funcionarios">
                    <div className="card-funcionario">
                        <div className="icone">FM</div>
                        <div>
                            <h2 className='nome-ausencia'>Francisco Martins Gonçalves Gomes</h2>
                        </div>
                    </div>
                    <div className="row tabela-titulo ">
                        <div className="col">Tipo</div>
                        <div className="col">Data Entrada</div>
                        <div className="col">Data Saída</div>
                        <div className="col text-center">Opções</div>
                    </div>
                    <div className="row tabela-body align-items-center">
                        <div className="col">Atestado</div>
                        <div className="col">10/30/2003</div>
                        <div className="col">10/30/2003</div>
                        <div className="col text-center">
                            <button className='btn btn-danger'>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
