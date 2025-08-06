import { MdWorkHistory } from 'react-icons/md';
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import "./Funcionarios.css";
import fun from "./funcionarios";
import { RiLockPasswordFill } from 'react-icons/ri';
import { PiCertificateFill } from 'react-icons/pi';
import { FaTrash } from 'react-icons/fa';

export default function Funcionarios() {
  const dados = fun();

  return (
    <div>
      <NavbarAdm />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="tabela-funcionarios">
          <div className="row tabela-titulo ">
            <div className="col">Matricula</div>
            <div className="col">Nome</div>
            <div className="col text-center">Opções</div>
          </div>
          {dados.map(funcionarios=>(
            <div className="row tabela-body align-items-center">
              <div className="col">#{funcionarios.id}</div>
              <div className="col col-nome">{funcionarios.nome}</div>
              <div className="col text-center">
                <div className="btn-group" role='group' >
                <a href={"/administrador/funcionarios/"+funcionarios.id} className='btn btn-primary icon'><MdWorkHistory /></a> 
                <button className='btn btn-primary icon'><PiCertificateFill /></button>
                <button className='btn btn-danger icon'><RiLockPasswordFill /></button>
                <button className='btn btn-danger icon'><FaTrash /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
