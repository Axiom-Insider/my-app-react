import { MdWorkHistory } from 'react-icons/md';
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import "./Funcionarios.css";
import fun from "./funcionarios";
import { RiLockPasswordFill } from 'react-icons/ri';
import { PiCertificateFill } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import funcionario from '../../../services/funcionario';
import Alerta from '../../../components/Alertas/Alerta';


export default function Funcionarios() {
  const [dados, setDados] = useState([])
  const [idFuncionario, setIdFuncionario] = useState('')
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(null)


  useEffect(()=>{
    const feachDate = async ()=>{
      const dados = await funcionario.getAll()
      console.log(dados);
      setDados(dados)
    }
    feachDate()
    
  },[])
  const resetarSenha = async ()=>{
      try {
        const dados = await funcionario.resetarSenha(idFuncionario)

        return setSucesso(dados.message)
      } catch (error) {
        setErro(error.message || "Não foi possível atualizar dados de funcionário")
      }
    }

  useEffect(()=>{
  if(idFuncionario){
    resetarSenha()
  }
  },[idFuncionario])

  
  
  return (
    <div>
      <NavbarAdm />
        {sucesso && (<Alerta msg={sucesso} tipo={'sucesso'} />) }
             {erro &&  (<Alerta msg={erro} tipo={'erro'} />) }
      <div className="container d-flex justify-content-center align-items-center">
        <div className="tabela-funcionarios">
          <div className="row tabela-titulo ">
            <div className="col">Matricula</div>
            <div className="col">Nome</div>
            <div className="col text-center">Opções</div>
          </div>
          
          {dados.map(funcionarios=>(
            <div className="row tabela-body align-items-center" key={funcionarios.id}>
              <div className="col">#{funcionarios.id}</div>
              <div className="col col-nome">{funcionarios.nome}</div>
              <div className="col text-center">
                <div className="btn-group" role='group' >
                <a href={"/administrador/funcionarios/historico/"+funcionarios.id} className='btn btn-primary icon'><MdWorkHistory /></a> 
                <a href={'/administrador/funcionarios/ausencias/'+funcionarios.id} className='btn btn-primary icon'><PiCertificateFill /></a>
                <button className='btn btn-danger icon' onClick={()=>{setIdFuncionario(funcionarios.id)}}><RiLockPasswordFill /></button>
                </div>
              </div>
          </div>
          ))}
        </div>

      </div>
    </div>
  )
}
