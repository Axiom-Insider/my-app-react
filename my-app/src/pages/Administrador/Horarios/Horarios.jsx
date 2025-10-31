import React, { useState, useEffect, use } from 'react'
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import "./Horarios.css"
import funcionario from "../../../services/funcionario"
import horarios from "../../../services/horarios"
import ausencias from '../../../services/ausencias'
import { FaCheck, FaRegClock, FaSearch } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { MdPersonSearch } from 'react-icons/md'
import Alerta from '../../../components/Alertas/Alerta'


const Horarios = () => {
  
  const [id, setId] = useState("")

  //dados para editar horario
  const [dataCriada, setDataCriada] = useState("")
  const [hora, setHora] = useState("")
  //dados para criar ausencia
  const [dataInicio, setDataInicio] = useState(null)
  const [dataFim, setDataFim] = useState('')
  const [tipoAusencia, setTipoAusencia] = useState("Férias")

  const [animeBg, setAnimeBg] = useState(false)
  const [ativo, setAtivo] = useState('horarios')
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(null)
  const [status, setStatus] = useState(null)
  const [selecionado, setSelecionado] = useState(null)
  const [dados, setDados] = useState([])

  const [funcionarioPesquisar, setFuncionarioPesquisar] = useState("");

  const [funcionarioFiltrado, setFuncionarioFiltrado] = useState([]);

  useEffect(()=>{
      const fetchData = async () => {
           try {
             const data = await funcionario.getAll();
             setDados(data);
           } catch (err) {
             setErro(err.message || "Erro ao buscar funcionários");
           } 
         };
      if(!animeBg){
        fetchData()
      }
  }, [animeBg])

    useEffect(()=>{
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
        const data = await horarios.editarHorarios(dataCriada, hora, status, id)
        setSucesso(data.message)
      } catch (error) {
        setErro(error.message || "Erro ao Editar Horario")
      }
     
    }

    const criarHorario = async(e)=>{
      e.preventDefault()
      try {
        console.log(dataInicio, dataFim, tipoAusencia, id);
        const data = await ausencias.criarAusencia(dataInicio, dataFim, tipoAusencia, id)
        setSucesso(data.message)
      } catch (error) {
        setErro(error.message || "Erro ao Criar Ausência")
      }
    }
  
    useEffect(()=>{
      setAnimeBg(true)
      setFuncionarioFiltrado([])
      setSelecionado('')
      setId('')
      const timer = setTimeout(()=>setAnimeBg(false), 1000);
      return ()=> clearTimeout(timer)
    }, [ativo])
  
  return (
    <div>
      <NavbarAdm />
      {sucesso && (<Alerta msg={sucesso} tipo={'sucesso'} />) }
      {erro &&  (<Alerta msg={erro} tipo={'erro'} />) }
      <div className="container d-flex justify-content-center align-items-center">
        <div className={`box-horarios ${animeBg ? "anime-bg" : ''}`} >
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
                  <input className='form-control formulario' type="date" name="dataCriada" onChange={(e)=> {setDataCriada(e.target.value)
                     setDataInicio(e.target.value)}} id="data" required/>
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
                    <div className={`${selecionado == dados.id ? 'funcionarios select' : 'funcionarios'}`} onClick={()=> funcionarioSelecionado(dados.id)} key={dados.id}>
                      <div className="icone" >{iniciais(dados.nome)}</div> 
                      <div className="nome-horarios">{dados.nome}</div> 
                      {selecionado == dados.id ? <div className='func-selecionado'><FaCheck /></div> : ''}</div>
                  ))}
                </div>
                  {selecionado ? <div className="horarios-linha"><button className='botao-adicionar'>Cadastrar Horário</button></div> : ''} 
            </div>
            </form>
            : 
            <form onSubmit={criarHorario}>
            <div className="body-ferias">
                <div className="linha">
                  <div className="horarios-linha">
                    <label className="form-label">Data de Início:</label>
                    <input className='form-control formulario' onChange={(e)=>{setDataInicio(e.target.value)}} type="date" name="data-entrada" id="a" required/>
                  </div>
                  <div className="horarios-linha">
                  <label className="form-label">Data Final:</label>
                  <input className='form-control formulario' onChange={(e)=>{setDataFim(e.target.value)}} type="date" name="data-saida" id="" />
                </div>
                <div className="horarios-linha">
                <label className="form-label">Tipo de Ausência:</label>
                  <select className='form-select' name="" id="" onChange={(e)=>{setTipoAusencia(e.target.value)}}>
                    <option  value="Férias">Férias</option>
                    <option value="Atestado">Atestado</option>
                    <option value="Licença">Licença</option>
                    <option value="Outro">Outro</option>
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
                  {selecionado ? <div className="horarios-linha"><button className='botao-adicionar'>Cadastrar {tipoAusencia}</button></div> : ''} 
            </div>
            </form>
            }
          
        </div>
      </div>
    </div>
  )
}

export default Horarios