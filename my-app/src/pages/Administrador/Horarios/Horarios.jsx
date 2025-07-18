import React, { useState, useEffect } from 'react'
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import "./Horarios.css"
import funcionarios from '../funcionarios'
import { FaCheck, FaRegClock } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'


const Horarios = () => {

  const [ativo, setAtivo] = useState('horarios')
  const [status, setStatus] = useState(null)
  const [statusTwo, setStatusTwo] = useState(null)
  const [selecionado, setSelecionado] = useState(null)


  const dados = funcionarios()

  const [funcionarioPesquisar, setFuncionarioPesquisar] = useState();

  const [funcionarioFiltrado, setFuncionarioFiltrado] = useState([]);

    useEffect(()=>{

      const resultado = dados.filter(user => user.nome.toLowerCase().includes(funcionarioPesquisar))
      setFuncionarioFiltrado(resultado)
    }, [funcionarioPesquisar])


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
        setSelecionado(id)
        const fun = funcionarioFiltrado.filter(user => user.id === id);
        setFuncionarioFiltrado(fun)
      } 

    }

  
  return (
    <div>
      <NavbarAdm />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="box-horarios">
          <div className="head">
            <div className={ativo == 'horarios'  ? "sub selecionado" : "sub"} onClick={()=> setAtivo('horarios')}><FaRegClock /> Horarios</div>
            <div className={ativo == 'ausencia'  ? "sub selecionado" : "sub"} onClick={()=> {setAtivo('ausencia') 
              setSelecionado(null)
              setFuncionarioFiltrado([])
              }}><IoDocumentTextOutline /> Férias/Atestado</div>
          </div>

            {ativo ==  'horarios' ? 
              <div className="body-horarios">
              <div className="linha">
                 <div className="horarios-linha">
                   <label className="form-label">Data:</label>
                  <input className='form-control formulario' type="date" name="" id="" />
                </div>
                <div className="horarios-linha">
                   <label className="form-label">Horário:</label>
                  <input className='form-control formulario' type="time" name="" id="" />
                </div>
                <div className="horarios-linha">
                  <label className="form-label">Entrada:</label>
                  <input className='form-check-input check' type="checkbox" checked={status == 'entrada' ? true : false} onClick={()=> setStatus('entrada')} name="status" id="" />
                </div>
                <div className="horarios-linha">
                  <label className="form-label">Saída:</label>
                  <input className='form-check-input check' type="checkbox" checked={status == 'saida' ? true : false} onClick={()=> setStatus('saida')} name="status" id="" />
                </div>
              </div>
              
                <div className="horarios-linha">
                  <label className="form-label">Funcionário: </label>
                  <input onChange={digitando} className='form-control' value={funcionarioPesquisar} type="search" name="" id="" placeholder='nome do funcionário...'/>
                </div>

                <div className="horarios-linha">
                  {funcionarioFiltrado.map(dados =>(
                    <div className={selecionado == dados.id ? 'funcionarios select' : 'funcionarios'} onClick={()=> funcionarioSelecionado(dados.id)} key={dados.id}>
                      <div className="icone" >{iniciais(dados.nome)}</div> 
                      <div className="nome-horarios">{dados.nome}</div> 
                      {selecionado == dados.id ? <div className='func-selecionado'><FaCheck /></div> : ''}</div>
                  ))}
                </div>
                  {selecionado ? <div className="horarios-linha"><button className='btn btn-success'>Atualizar horário</button></div> : ''} 
            </div>
            : 
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
                  <label className="form-label">Férias:</label>
                  <input className='form-check-input check' type="checkbox" checked={statusTwo == 'férias' ? true : false} onClick={()=> setStatusTwo('férias')} name="status" id="" />
                </div>
                <div className="horarios-linha">
                  <label className="form-label">Atestado:</label>
                  <input className='form-check-input check' type="checkbox" checked={statusTwo == 'atestado' ? true : false} onClick={()=> setStatusTwo('atestado')} name="status" id="" />
                </div>
                </div>
                <div className="horarios-linha">
                  <label className="form-label">Funcionário: </label>
                  <input onChange={digitando} className='form-control' value={funcionarioPesquisar} type="search" name="" id="" placeholder='nome do funcionário...'/>
                </div>
                <div className="horarios-linha">
                  {funcionarioFiltrado.map(dados =>(
                    <div className={selecionado == dados.id ? 'funcionarios select' : 'funcionarios'} onClick={()=> funcionarioSelecionado(dados.id)} key={dados.id}>
                      <div className="icone" >{iniciais(dados.nome)}</div> 
                      <div className="nome-horarios">{dados.nome}</div> 
                      {selecionado == dados.id ? <div className='func-selecionado'><FaCheck /></div> : ''}</div>
                  ))}
                </div>
                  {selecionado ? <div className="horarios-linha"><button className='btn btn-success'>Adicionar {statusTwo} </button></div> : ''} 
            </div>
            }
          
        </div>
      </div>
    </div>
  )
}

export default Horarios