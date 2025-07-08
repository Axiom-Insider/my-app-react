import React, { useState, useEffect } from 'react'
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import "./Horarios.css"
import funcionarios from '../funcionarios'


const Horarios = () => {

  const [ativo, setAtivo] = useState('horarios')
  const [status, setStatus] = useState(null)
  const [selecionado, setSelecionado] = useState(null)


  const dados = funcionarios()

  const [funcionarioPesquisar, setFuncionarioPesquisar] = useState();

  const [funcionarioFiltrado, setFuncionarioFiltrado] = useState([]);

    useEffect(()=>{

      const resultado = dados.filter(user => user.nome.includes(funcionarioPesquisar))
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
            <div className={ativo == 'horarios'  ? "sub selecionado" : "sub"} onClick={()=> setAtivo('horarios')}>Horarios</div>
            <div className={ativo == 'ausencia'  ? "sub selecionado" : "sub"} onClick={()=>setAtivo('ausencia')}>Férias/Ausência</div>
          </div>
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
                      {selecionado == dados.id ? <div className='func-selecionado'>Selecionado</div> : ''}</div>
                  ))}
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Horarios