import "./Feriados.css"
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import feriados from '../../../services/feriados'
import { useEffect, useState } from "react";
import { MdCheckBox, MdClose, MdFormatListBulletedAdd } from "react-icons/md";
import { FaCheck, FaRegClock, FaTrash } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import Alerta from "../../../components/Alertas/Alerta";

export default function Feriados() {


  //dados para criar feriado
  const [nomeFeriado, setNomeFeriado] = useState("")
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")
  const [tipoFeriado, setTipoFeriado] = useState("Nacional")
  const [nacional, setNacional] = useState(false)
  const [idFeriado, setIdFeriado] = useState('')

  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(null)
  const [ativo, setAtivo] = useState('Cadastrar')
  const [animeBg, setAnimeBg] = useState(false)
  const [dados, setDados] = useState([])
  const [anos, setAnos] = useState([])
  const [anosSelect, setAnosSelect] = useState(null)
  const [tipoFeriadoSelect, setTipoFeriadoSelect] = useState(null)

  useEffect(()=>{
    const feachAno = async ()=>{
      try {
        const data = await feriados.anosFeriados()
        
        setAnos(data.dados)
        console.log(anos);
      } catch (error) {
        setAnos([])
      }
    }
    feachAno()
    
    const feachData = async ()=>{
      try {
        const date = new Date()
        const data = await feriados.findAnoTipo(date.getFullYear().toString(), 'Nacional')
        console.log(data);
        
        setDados(data.dados) 
      } catch (error) {
        setErro(error.message || "Nenhum feriado foi encontrado")
      }
    }
    feachData()
  },[ativo])

  useEffect(()=>{
    const feachDataSelect = async ()=>{
      try {
        const data = await feriados.findAnoTipo(anosSelect, tipoFeriadoSelect)

        setDados(data.dados) 
      } catch (error) {
        setErro(error.message || "Nenhum feriado foi encontrado")
      }
    }
    feachDataSelect()
  },[anosSelect, tipoFeriadoSelect])
  
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

 
    const createFeriado = async (e)=>{
      e.preventDefault()
      try {
        const data = await feriados.criarFeriado(nomeFeriado, dataInicio, dataFim, tipoFeriado, nacional)
        console.log(data);
        
        setSucesso(data.message)
      } catch (error) {
        setErro(error.message || "Não foi possível criar feriado")
      }
    }

  return (
    <div>
       <NavbarAdm />
       {sucesso && (<Alerta msg={sucesso} tipo={'sucesso'} />) }
       {erro &&  (<Alerta msg={erro} tipo={'erro'} />) }
       <div className="container d-flex justify-content-center align-items-center">
          <div className={`box-horarios ${animeBg ? "anime-bg" : ''}`}>
            <div className="head">
                <div className={ativo == 'Cadastrar'  ? "sub selecionado" : "sub"} onClick={()=> setAtivo('Cadastrar')}><MdFormatListBulletedAdd /> Cadastrar</div>
                <div className={ativo == 'Consultar'  ? "sub selecionado" : "sub"} onClick={()=> setAtivo('Consultar') }><CiBoxList /> Consultar</div>
            </div>
            {ativo === "Cadastrar" ?
              <div> 
                <form onSubmit={createFeriado}>
              <div className="linha">   
                <div className="horarios-linha mt-4">
                  <label className='form-label' >Nome do Feriado:</label>
                  <input type="text" className='form-control feriado' onChange={(e)=> setNomeFeriado(e.target.value)} placeholder='nome do feriado...' id="" required/>
                </div>
               
                <div className="horarios-linha mt-4">
                <label className="form-label">Tipo de Feriado:</label>
                <select className='form-select' name="" id="" onChange={(e)=>{setTipoFeriado(e.target.value)}}>
                      <option value="Nacional">Nacional</option>
                      <option value="Estadual">Estadual</option>
                      <option value="Municipal">Municipal</option>
                      <option value="Regional">Regional</option>
                      <option value="Institucional">Institucional</option>
                </select>
                </div>

              </div>
              <div className="linha">
                <div className="horarios-linha">
                  <label className='form-label'>Data de início:</label>
                  <input className='form-control' onChange={(e)=> setDataInicio(e.target.value)} type="date" required />
                </div>
                
                <div className="horarios-linha">
                <label className='form-label'>Data de fim:</label>
                  <input className='form-control' onChange={(e)=> setDataFim(e.target.value)} type="date" name="" id="" />
                </div>

                <div className="horarios-linha">
                  <label className="form-label">Permanente:</label>
                  <input className='form-check-input check' onChange={(e)=> setNacional(e.target.checked)} type="checkbox" checked={nacional} id="" />
                </div>

              </div>
                <div className="horarios-linha">
                  <button className={"botao-adicionar mt-2"}>Criar Feriado</button>
                </div> 
              </form>
              </div>
            :
            <div>
                <div className="linha">
                <div className="horarios-linha mt-4">
                  <label htmlFor="" className="form-label">Tipo de Feriado:</label>
                   <select className="form-select" name="ano" id="" onChange={(e)=>{setTipoFeriadoSelect(e.target.value)}}>
                      <option value="Nacional">Nacional</option>
                      <option value="Estadual">Estadual</option>
                      <option value="Municipal">Municipal</option>
                      <option value="Regional">Regional</option>
                      <option value="Institucional">Institucional</option>
                    </select>
                </div>

                <div className="horarios-linha mt-4">
                  <label htmlFor="" className="form-label">Ano:</label>
                   <select  className="form-select" name="ano" id="" onChange={(e)=>{setAnosSelect(e.target.value)}}>
                    {anos.map(dados=>( 
                       <option value={dados.ano} key={dados.ano + 1}>{dados.ano}</option>
                    ))}
                    </select>
                </div>
                </div>
  
                <div className="horarios-linha tables">
                      <table>
                        <thead>
                          <tr className="tr-f">
                            <th className="th-f" scope="col">Nome</th>
                            <th className="th-f" scope="col">Data</th>
                            <th className="th-f" scope="col">Tipo</th>
                            <th className="th-f" scope="col">Excluir</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dados.map(feriados=>(
                            <tr key={feriados.id}>
                              <td>{feriados.nome}</td>
                              <td>{feriados.dataInicio}{feriados.dataFim === feriados.dataInicio ? '' : " | "+feriados.dataFim }</td>
                              <td>{feriados.tipoFeriado}</td>
                              <td> <button className="trash-btn" onChange={()=> setIdFeriado(feriados.id)}  ><i className="trash-icon"><FaTrash /></i></button> </td>
                            </tr>
                          ))}
                         
                        </tbody>
                    </table>
                </div>
              </div>
            }
          </div>
        </div>
    </div>
  )
}
