import React, { useState, useEffect } from 'react'
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import "./Horarios.css"
import funcionario from "../../../services/funcionario"
import horarios from "../../../services/horarios"
import { FaCheck, FaRegClock, FaSearch } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { MdPersonSearch } from 'react-icons/md'
import Alerta from '../../../components/Alertas/Alerta'


const Horarios = () => {

  const [dataCriado, setDataCriado] = useState("")
  const [hora, setHora] = useState("")
  const [id, setId] = useState("")
  const [ativo, setAtivo] = useState('horarios')
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(null)
  const [status, setStatus] = useState(null)
  const [statusTwo, setStatusTwo] = useState(null)
  const [selecionado, setSelecionado] = useState(null)
  const [dados, setDados] = useState([])

  const [funcionarioPesquisar, setFuncionarioPesquisar] = useState("");

  const [funcionarioFiltrado, setFuncionarioFiltrado] = useState([]);

  useEffect(()=>{
      const fetchData = async () => {
           try {
             const data = await funcionario.getAll();
             console.log(data);
             setDados(data);
           } catch (err) {
             setErro(err.message || "Erro ao buscar funcionários");
           } 
         };
         fetchData();
  }, [])

    useEffect(()=>{
      console.log(dados)
      const resultado = dados.filter(user => user.nome.toLowerCase().includes(funcionarioPesquisar))
      setFuncionarioFiltrado(resultado)
    }, [funcionarioPesquisar, dados])


  const iniciais = (nome)=>{
      var dividido = nome.split(' ')
      var primeira = dividido[0].charAt(0).toUpperCase();
      var segunda = dividido[1].charAt(0).toUpperCase();
      return `${primeira}${segunda}`
    }

  const digitando = (event)=>{  
    setSelecionado(null)  
    setFuncionarioPesquisar(event.target.value)
  }

  const funcionarioSelecionado = (id)=>{
      if(selecionado == id){
        setSelecionado(null)
        setFuncionarioFiltrado(dados)
      }else{
        setId(id)
        setSelecionado(id)
        const fun = funcionarioFiltrado.filter(user => user.id === id);
        setFuncionarioFiltrado(fun)
      } 

    }
    const editarHorario = async (e)=>{
      e.preventDefault()
      try {
        const data = await horarios.editarHorarios(dataCriado, hora, status, id)
        console.log(data)
        setSucesso(data.message)
      } catch (error) {
        setErro(error.message || "Erro ao Editar Horario")
      }
     
    }

    const criarHorario = async(e)=>{
      e.preventDefault()
    }
  

  
  return (
    <div>
      <NavbarAdm />
      {sucesso && (<Alerta msg={sucesso} tipo={'sucesso'} />) }
      {erro &&  (<Alerta msg={erro} tipo={'erro'} />) }
      <div className="container d-flex justify-content-center align-items-center">
        <div className="box-horarios">
          <div className="head">
            <div className={ativo == 'horarios'  ? "sub selecionado" : "sub"} onClick={()=> setAtivo('horarios')}><FaRegClock /> Horarios</div>
            <div className={ativo == 'ausencia'  ? "sub selecionado" : "sub"} onClick={()=> setAtivo('ausencia') }><IoDocumentTextOutline /> Férias/Atestado</div>
          </div>

            {ativo ==  'horarios' ? 
              <form onSubmit={editarHorario}>
              <div className="body-horarios">
              <div className="linha">
                 <div className="horarios-linha">
                   <label className="form-label">Data:</label>
                  <input className='form-control formulario' type="date" name="dataCriado" onChange={(e)=> setDataCriado(e.target.value)} id="" required/>
                </div>
                <div className="horarios-linha">
                   <label className="form-label">Horário:</label>
                  <input className='form-control formulario' type="time" name="hora" onChange={(e)=> setHora(e.target.value)} id="" required/>
                </div>
                <div className="horarios-linha">
                  <label className="form-label">Entrada:</label>
                  <input className='form-check-input check' type="checkbox" checked={status === "entrada"}  onChange={()=> setStatus('entrada')} name="status" id="" />
                </div>
                <div className="horarios-linha">
                  <label className="form-label">Saída:</label>
                  <input className='form-check-input check' type="checkbox" checked={status === "saida"} onChange={()=> setStatus('saida')} name="status" id="" />
                </div>
              </div>
              
                <div className="horarios-linha mt-2">
                    <div className="search-container">
                      <input onChange={digitando} type="text" className="form-control search-input" placeholder="Pesquisar..." />
                      <i className="fas fa-search search-icon"><MdPersonSearch /> </i>
                    </div>
                </div>

                <div className="horarios-linha">
                  {funcionarioFiltrado.map(dados =>(
                    <div className={selecionado == dados.id ? 'funcionarios select' : 'funcionarios'} onClick={()=> funcionarioSelecionado(dados.id)} key={dados.id}>
                      <div className="icone" >{iniciais(dados.nome)}</div> 
                      <div className="nome-horarios">{dados.nome}</div> 
                      {selecionado == dados.id ? <div className='func-selecionado'><FaCheck /></div> : ''}</div>
                  ))}
                </div>
                  {selecionado ? <div className="horarios-linha"><button className='botao-adicionar'>Atualizar Horário</button></div> : ''} 
            </div>
            </form>
            : 
            <form onSubmit={criarHorario}>
            <div className="body-ferias">
                <div className="linha">
                  <div className="horarios-linha">
                    <label className="form-label">Data Entrada:</label>
                    <input className='form-control formulario' type="date" name="data-entrada" id="" />
                  </div>
                  <div className="horarios-linha">
                  <label className="form-label">Data Saída:</label>
                  <input className='form-control formulario' type="date" name="data-saida" id="" />
                </div>
                <div className="horarios-linha">
                <label className="form-label">Tipo de Ausência:</label>
                <select className='form-select' name="" id="">
                  <option value="1">Ferias</option>
                  <option value="2">Atestado</option>
                  <option value="3">Lincença</option>
                  <option value="4">Outro</option>
                </select>
                </div>
                </div>
                <div className="horarios-linha mt-2">
                    <div className="search-container">
                      <input onChange={digitando} type="text" className="form-control search-input" placeholder="Pesquisar..." />
                      <i className="fas fa-search search-icon"><MdPersonSearch /> </i>
                    </div>
                </div>
                <div className="horarios-linha">
                  {funcionarioFiltrado.map(dados =>(
                    <div className={selecionado == dados.id ? 'funcionarios select' : 'funcionarios'} onClick={()=> funcionarioSelecionado(dados.id)} key={dados.id}>
                      <div className="icone" >{iniciais(dados.nome)}</div> 
                      <div className="nome-horarios">{dados.nome}</div> 
                      {selecionado == dados.id ? <div className='func-selecionado'><FaCheck /></div> : ''}</div>
                  ))}
                </div>
                  {selecionado ? <div className="horarios-linha"><button className='botao-adicionar'>Adicionar {statusTwo} </button></div> : ''} 
            </div>
            </form>
            }
          
        </div>
      </div>
    </div>
  )
}

export default Horarios