import { useEffect, useState } from 'react';
import NavbarAdm from '../../../components/Navbar/NavbarAdm';
import "./Historico.css"
import horarios from '../../../services/horarios'
import documentos from '../../../services/documentos'
import { GrDocumentPdf } from 'react-icons/gr';
import { useParams } from 'react-router-dom';
import Alerta from '../../../components/Alertas/Alerta';
import { FaTrash } from 'react-icons/fa';
import Loading from '../../../components/Loading/Loading';

export default function Historico() {

  const [dados, setDados] = useState([])
  const [mesSelect, setMesSelect] = useState(new Date().getMonth())
  const [anoSelect, setAnoSelect] = useState(new Date().getFullYear())
  const [anos, setAnos] = useState([])
  const { id } = useParams()

  const [faltas, setFaltas] = useState('')
  const [tempoTrabalhado, setTempoTrabalhado] = useState('')

  const [alerta, setAlerta] = useState(false)
  const [tipoAlerta, setTipoAlerta] = useState('')
  const [close, setClose] = useState(false)

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchAnos = async () => {
      try {
        const { dados } = await horarios.anoAdm(id);

        setAnos(dados)
      } catch (error) {
        setAlerta(error.message || "Falha ao trazer dados")
      setTipoAlerta("erro")
      }finally{
        setLoading(false)
      }
    };

    fetchAnos();
  }, []);


  const feachtDate = async () => {
    try {
      setLoading(true)
      const dados = await horarios.historicoFuncionarioAdm(id, mesSelect, anoSelect)
      setDados(dados.historico)
    } catch (error) {
      setAlerta(error.message || "Falha ao trazer dados")
      setTipoAlerta("erro")
    }finally{
      setLoading(false)
    }
  }

  const estastisticas = async () => {
    try {
      setLoading(true)
      const dados = await horarios.estatisticas(id, mesSelect, anoSelect)

      setFaltas(dados.faltas)
      setTempoTrabalhado(dados.totalHorasTrabalhada)
    } catch (error) {
      setAlerta(error.message || "Falha ao trazer dados")
      setTipoAlerta("erro")
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    feachtDate()
    estastisticas()
  }, [id, mesSelect, anoSelect])

  const downloadPoloUAB = async () => {
    try {
      await documentos.downloadPoloUAB(id, mesSelect, anoSelect)
    } catch (error) {
      setAlerta(error.message || "Falha ao fazer download do documento")
      setTipoAlerta("erro")
    }
  }

  const downloadConfianca = async () => {
    try {
      await documentos.downloadConfianca(id, mesSelect, anoSelect)
    } catch (error) {
      setAlerta(error.message || "Falha ao fazer download do documento")
      setTipoAlerta("erro")
    }
  }

  const apagarHorario = async (id) => {
    try {
      const dados = await horarios.apagarHorarios(id)
      setAlerta(dados.message)
      setTipoAlerta("sucesso")
      feachtDate()
    estastisticas()
    } catch (error) {
      setAlerta(error.message || "Falha ao apagar horario")
      setTipoAlerta("erro")
    }
  }


  const mes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  //alerta
  useEffect(() => {
    if (alerta) {
      const t1 = setTimeout(() => {
        setClose(true);
      }, 1500);

      const t2 = setTimeout(() => {
        setAlerta(false)
        setClose(false)
      }, 2000)

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [alerta]);

  if(loading){
    return <Loading />
  }

  return (
    <div>
      <NavbarAdm />
      {alerta && (<Alerta msg={alerta} tipo={tipoAlerta} close={close} />)}
      <div className="container d-flex justify-content-center align-items-center">
        <div className="box-historico w-100">
          <div className="summary-cards d-flex align-items-center gap-3 mb-3">
            <div className="card-hour" title="Total de horas trabalhadas no mês">Horas Trabalhadas: {tempoTrabalhado}H</div>
            <div className="card-extra" title="Total">Faltas ou Ausências: {faltas}</div>
          </div>
          <div className="row g-3 mt-4">
            <div className="col-2 ">
              <label className='form-label' htmlFor="ano">Mes:</label>
              <select className="form-select" id="mes" value={mesSelect} onChange={(e) => { setMesSelect(e.target.value) }} aria-label="Selecionar mês">
                {mes.map((nome, index) => (
                  <option key={index} value={index}>{nome}</option>
                ))}
              </select>
            </div>
            <div className="col-2 ">
              <label className='form-label' htmlFor="ano">Ano:</label>
              <select className="form-select" id="ano" onChange={(e) => { setAnoSelect(e.target.value) }} aria-label="Selecionar ano" >
                {anos.map(ano => (
                  <option key={ano.ano} value={ano.ano}>{ano.ano}</option>
                ))}
              </select>
            </div>
            <div className="col-3 col-pdf">
              <label className='form-label' htmlFor="ano"></label>
              <button className='btn btn-info pdf' onClick={downloadPoloUAB}>
                <i className='icon-h'><GrDocumentPdf /> </i> Ponto PoloUAB
              </button>
            </div>
            <div className="col-3">
              <label className='form-label' htmlFor="ano"></label>
              <button className='btn btn-info pdf' onClick={downloadConfianca}>
                <i className='icon-h'><GrDocumentPdf /> </i> Ponto Confiança
              </button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="table-responsive">
              <table className="tabela">
                <thead>
                  <tr>
                    <th className='th-h'>Data</th>
                    <th className='th-h'>Ferias/Ausência</th>
                    <th className='th-h'>Feriados</th>
                    <th className='th-h'>Horário de Entrada</th>
                    <th className='th-h'>Horário de Saída</th>
                    <th className="th-h">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((item) => (
                    <tr key={item.dia} className="dados trHover">
                      <td className='data-historico'>{item.dia} - {item.nomeDia}</td>
                      <td>{item.ausencia}</td>
                      <td>{item.feriado}</td>
                      <td>{item.entrada}</td>
                      <td>{item.saida}</td>
                      {item.entrada != ':' ? <td><button className="trash-btn" onClick={()=> apagarHorario(item.id)}  ><i className="trash-icon"><FaTrash /></i></button></td> : <td></td> }
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
