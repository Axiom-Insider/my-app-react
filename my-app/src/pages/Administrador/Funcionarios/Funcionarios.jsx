import { MdWorkHistory } from 'react-icons/md';
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import "./Funcionarios.css";
import { RiLockPasswordFill } from 'react-icons/ri';
import { PiCertificateFill } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import funcionario from '../../../services/funcionario';
import Alerta from '../../../components/Alertas/Alerta';
import Loading from '../../../components/Loading/Loading';
import { Link } from 'react-router-dom';


export default function Funcionarios() {
  const [dados, setDados] = useState([])
  const [idFuncionario, setIdFuncionario] = useState('')
  const [abrirModal, setAbrirModal] = useState(false)

  const [alerta, setAlerta] = useState(false)
  const [tipoAlerta, setTipoAlerta] = useState('')
  const [close, setClose] = useState(false)

  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    const feachDate = async ()=>{
      try {
        const dados = await funcionario.getAll()
        setDados(dados)
      } catch (error) {
        setTipoAlerta('erro')
        setAlerta(error.message || "Não foi possível listar Funcionários")
      }finally{
        setLoading(false)
      }
    }
    feachDate()
    
  },[])

   //alerta
      useEffect(() => {
      if (alerta) {
        const t1 = setTimeout(() => {
          setClose(true); 
        }, 2000);

        const t2 = setTimeout(() => {
          setAlerta(false)
          setClose(false)
        }, 2500)

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      }
    }, [alerta]);

  const resetarSenha = async ()=>{
      try {
        const dados = await funcionario.resetarSenha(idFuncionario)
        setAbrirModal(false)
        setAlerta(dados.message)
        setTipoAlerta('sucesso')
      } catch (error) {
        setAlerta(error.message || "Não foi possível atualizar dados de funcionário")
        setTipoAlerta('erro')
      }
    }
     if(loading){
      return <Loading />
    }
  
  return (
    <div>
      <NavbarAdm />
       {alerta && (<Alerta msg={alerta} tipo={tipoAlerta} close={close} />) }
        {abrirModal && (
        <div className="modal-overlay">
          <div className="modal-caixa">
            <h3>Redefinir senha</h3>
            <p>Tem certeza que deseja redefinir a senha de funcionário</p>
            <div className="botoes">
              <button className="btn confirmar" onClick={resetarSenha}>
                Sim
              </button>
              <button className="btn cancelar" onClick={() => setAbrirModal(false)}>
                Não
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container d-flex justify-content-center align-items-center">
        <div className="tabela-funcionarios">
          <div className="row tabela-titulo ">
            <div className="col">Matricula</div>
            <div className="col">Nome</div>
          
            <div className="col text-center">Opções</div>
          </div>
          
          {dados.map(funcionarios=>(
            <div className="row tabela-body align-items-center" key={funcionarios.id}>
              <div className="col">{funcionarios.matricula}</div>
              <div className="col col-nome">{funcionarios.nome}</div>
               
              <div className="col text-center">
                <div className="btn-group" role='group' >
                <Link to={"/historico/"+funcionarios.id} className='btn btn-primary icon' > <MdWorkHistory /> </Link>
                <Link to={'/ausencias/'+funcionarios.id} className='btn btn-secondary icon'> <PiCertificateFill /></Link>
                <button className='btn btn-danger icon' onClick={()=>{
                setAbrirModal(true);
                setIdFuncionario(funcionarios.id);
                }}><RiLockPasswordFill /></button>
                </div>
              </div>
          </div>
          ))}
        </div>

      </div>
    </div>
  )
}
