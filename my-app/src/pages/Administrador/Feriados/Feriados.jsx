import "./Feriados.css"
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import feriados from "./feriados";
import { useState } from "react";

export default function Feriados() {

  const [botao, setBotao] = useState(false);
  
  const dados = feriados();
  
  const preenchido = (e)=>{
    
    if(e.target.value.length < 1){
      return setBotao(false);
    }
    setBotao(true)
  }

  return (
    <div>
       <NavbarAdm />
       <div className="container d-flex justify-content-center align-items-center">
          <div className="box-horarios">
          
              <div className="horarios-linha">
                <label className='form-label' >Feriado:</label>
                <input onChange={preenchido} type="text" className='form-control' name="" placeholder='Nome do feriado...' id="" />
              </div>

              <div className="linha">
                <div className="horarios-linha">
                  <label className='form-label'>Data de começo</label>
                  <input className='form-control' type="date" name="" id="" />
                </div>
                
                <div className="horarios-linha">
                <label className='form-label'>Data de fim</label>
                  <input className='form-control' type="date" name="" id="" />
                </div>
              
                <div className="horarios-linha">
                  <label className="form-label">Permanente:</label>
                  <input className='form-check-input check' type="checkbox" name="status" id="" />
                </div>
              </div>
                {botao === true ?  
                <div className="horarios-linha">
                  <button className='btn btn-success'>Criar Feriado</button>
                </div> 
                : null
                }
                  <div className="horarios-linha">
                                  {dados.map(dados =>(
                                    <div className={selecionado == dados.id ? 'funcionarios select' : 'funcionarios'} onClick={()=> funcionarioSelecionado(dados.id)} key={dados.id}>
                                      <div className="icone" >{iniciais(dados.nome)}</div> 
                                      <div className="nome-horarios">{dados.nome}</div> 
                                      {selecionado == dados.id ? <div className='func-selecionado'><FaCheck /></div> : ''}</div>
                                  ))}
                                </div>
               {dados.map(feriados=>(
                feriados.nome
               ))}

          </div>
        </div>
    </div>
  )
}
