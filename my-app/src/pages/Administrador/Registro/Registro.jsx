import React, { useState } from 'react'
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import { FaRegClock, FaSearch, FaUserEdit, FaUserPlus } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { MdAdd } from 'react-icons/md'

export default function Registro() {

  const [ativo, setAtivo] = useState('registrar')

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
                <div className="linha">
                  
                    <i className="icone-pesquisa mt-4"><FaSearch /></i>
                  <input className='form-control mt-3' type="search" placeholder='Nome do funcionário'  id="" />
                </div>
              </div>
            : ''}
          </div>
      </div>
    </div>
  )
}
