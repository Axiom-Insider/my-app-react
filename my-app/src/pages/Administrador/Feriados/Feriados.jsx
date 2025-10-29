import "./Feriados.css"
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import feriados from "./feriados";
import { useEffect, useState } from "react";
import { MdCheckBox, MdClose, MdFormatListBulletedAdd } from "react-icons/md";
import { FaCheck, FaRegClock, FaTrash } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";

export default function Feriados() {

  const [botao, setBotao] = useState(false);
  const [ativo, setAtivo] = useState('Cadastrar')
   const [animeBg, setAnimeBg] = useState(false)
  const dados = feriados();
  
  const preenchido = (e)=>{
    
    if(e.target.value.length < 1){
      return setBotao(false);
    }
    setBotao(true)
  }

    useEffect(()=>{
        setAnimeBg(true)
        const timer = setTimeout(()=>setAnimeBg(false), 1000);
        return ()=> clearTimeout(timer)
      }, [ativo])

  return (
    <div>
       <NavbarAdm />
       
       <div className="container d-flex justify-content-center align-items-center">
          <div className={`box-horarios ${animeBg ? "anime-bg" : ''}`}>
            <div className="head">
                <div className={ativo == 'Cadastrar'  ? "sub selecionado" : "sub"} onClick={()=> setAtivo('Cadastrar')}><MdFormatListBulletedAdd /> Cadastrar</div>
                <div className={ativo == 'Consultar'  ? "sub selecionado" : "sub"} onClick={()=> setAtivo('Consultar') }><CiBoxList /> Consultar</div>
            </div>
            {ativo === "Cadastrar" ?
              <div>    
              <div className="horarios-linha mt-4">
                <label className='form-label' >Nome do Feriado:</label>
                <input onChange={preenchido} type="text" className='form-control feriado' name="" placeholder='nome do feriado...' id="" />
              </div>
              <div className="linha">
                <div className="horarios-linha">
                  <label className='form-label'>Data de início:</label>
                  <input className='form-control' type="date" name="" id="" />
                </div>
                
                <div className="horarios-linha">
                <label className='form-label'>Data de fim:</label>
                  <input className='form-control' type="date" name="" id="" />
                </div>
              
                <div className="horarios-linha">
                  <label className="form-label">Permanente:</label>
                  <input className='form-check-input check' type="checkbox" name="status" id="" />
                </div>
              </div>
                <div className="horarios-linha">
                  <button className={botao == true? "botao-adicionar mt-2" : "botao-adicionar escondido"}>Criar Feriado</button>
                </div> 
              </div>
            :
                <div className="horarios-linha selecte">
                  <label htmlFor="" className="form-label">Ano:</label>
                   <select className="form-select" name="ano" id="">
                      <option value="">2024</option>
                      <option value="">2025</option>
                    </select>
                </div>
            }
          </div>
        </div>
    </div>
  )
}
