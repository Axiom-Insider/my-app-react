import React, { useEffect, useState } from 'react'
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import { FaRegClock, FaSearch, FaUserEdit, FaUserPlus } from 'react-icons/fa'
import funcionarios from '../funcionarios'
import "./Registro.css"
import { MdPersonSearch } from 'react-icons/md'
import Horarios from '../Horarios/Horarios'

export default function Registro() {

  const [ativo, setAtivo] = useState('registrar')


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
  

  return (
    <div>
      <NavbarAdm />
      <div className="d-flex justify-content-center align-items-center">
         <div className="box-horarios">
            <div className="head">
              <div className={ativo == 'registrar'  ? "sub selecionado" : "sub"} onClick={()=> setAtivo('registrar')}><FaUserPlus /> Registrar</div>
              <div className={ativo == 'editar'  ? "sub selecionado" : "sub"} onClick={()=> setAtivo('editar') }><FaUserEdit /> Editar</div>
            </div>
            {ativo === "editar"? 
              <div className="body-horarios">
                  <div className="horarios-linha">
                    <input className='form-control' value={"Francisco Martins Gonçalves Gomes"} type="text" name="nome" id="" />
                  </div>
                <div className="linha">
                  <div className="horarios-linha">
                    <input className='form-control' type="number" value={9384958594} name="matricula" id="" />
                  </div>
                  <div className="horarios-linha">
                    <input className='form-control' type="text" value={"Recepção I"} name="matricula" id="" />                    
                  </div>
                </div>
                    <div className="horarios-linha">
                      <select className='form-select' name="" id="">
                        <option value="1">Nenhum</option>
                        <option value="2">Confiança</option>
                      </select>
                </div>
                  <div className="horarios-linha mt-4">
                    <div class="search-container">
                      <input type="text" onChange={digitando} class="form-control search-input" placeholder="Pesquisar..." />
                      <i class="fas fa-search search-icon"><MdPersonSearch /> </i>
                    </div>
                </div>
              </div>
            : 
              <div className='body-horarios'>
                 <div className="horarios-linha">
                    <label htmlFor="" className='form-label'>Nome:</label>
                    <input className='form-control' type="text" name="nome" id="" />
                  </div>
                <div className="linha">
                  <div className="horarios-linha">
                    <label htmlFor="" className='form-label'>Matrícula:</label>
                    <input className='form-control' type="number" name="matricula" id="" />
                  </div>
                  <div className="horarios-linha">
                    <label htmlFor="" className='form-label'>Cargo:</label>
                    <input className='form-control' type="text" name="matricula" id="" />                    
                  </div>
                </div>
                    <label htmlFor="" className='form-label'>Empresa:</label>
                    <div className="horarios-linha">
                      <select className='form-select' name="" id="">
                        <option value="1">Nenhum</option>
                        <option value="2">Confiança</option>
                      </select>
                </div>
              </div>
            }
          </div>
      </div>
    </div>
  )
}
