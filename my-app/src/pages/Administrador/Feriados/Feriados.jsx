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
                {botao === true ?  
                <div className="horarios-linha">
                  <button className='btn btn-success btn-f'>Criar Feriado</button>
                </div> 
                : null
                }

                <div className="horarios-linha selecte">
                  <label htmlFor="" className="form-label">Ano:</label>
                   <select className="form-select" name="ano" id="">
                      <option value="">2024</option>
                      <option value="">2025</option>
                    </select>
                </div>
                  <div className="horarios-linha tables">
                      <table>
                        <thead>
                          <tr className="tr-f">
                            <th className="th-f" scope="col">Nome</th>
                            <th className="th-f" scope="col">Data</th>
                            <th className="th-f" scope="col">Permanente</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dados.map(feriados=>(
                            <tr>
                              <td>{feriados.nome}</td>
                              <td>{feriados.data}|{feriados.dataSec}</td>
                              <td>{feriados.nacional == true ? 'sim' : 'não'}</td>
                            </tr>
                          ))}
                         
                        </tbody>
                    </table>
                </div>
          </div>
        </div>
    </div>
  )
}
