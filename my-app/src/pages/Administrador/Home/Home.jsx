import NavbarAdm from "../../../components/Navbar/NavbarAdm"
import "./Home.css"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Alerta from "../../../components/Alertas/Alerta"
import { PiNumberSquareSix } from "react-icons/pi"
import horarios from "../../../services/horarios"
import Loading from "../../../components/Loading/Loading"


function App() {

  const [data] = useState(new Date())
  const location = useLocation()
  const [dados, setDados] = useState([])
  const [loading, setLoading] = useState(true)

  const [alerta, setAlerta] = useState(false)
  const [tipoAlerta, setTipoAlerta] = useState('')
  const [close, setClose] = useState(false)

  useEffect(()=>{
    if(location.state && location.state.mensagem){
      setAlerta(location.state.mensagem)
      setTipoAlerta('sucesso')
    }
  }, [location.state])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await horarios.verificarAll();
        const result = data;
        
        setDados(result.funcionarios);
      } catch (err) {
        setAlerta(err.message);
        setTipoAlerta('erro')
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

  if (loading) {
    return <Loading />
  }

  const iniciais = (nome)=>{
    var dividido = nome.split(' ')
    var primeira = dividido[0].charAt(0).toUpperCase();
    var segunda = dividido[1] ? dividido[1].charAt(0).toUpperCase() : '';
    if(!segunda){
      return primeira
    }
    if(dividido[1].toLowerCase() === 'do' || dividido[1].toLowerCase() === 'de'){
      segunda = dividido[2].charAt(0).toUpperCase()
    }
    return `${primeira}${segunda}`
  }

  const status = (horarios)=>{
    if(horarios != null){
      return "horario entrada"
    }
    return "horario ausente"
  }

  return (
    <div>
      <NavbarAdm />
      {alerta && (<Alerta msg={alerta} tipo={tipoAlerta} close={close} />) }
      <div className="container d-flex justify-content-center align-items-center">
        <div className="alertas">
          <div className="head-home">
            <div className="titulo-home">
              Status de Funcionários 
            </div>
            <div className="data">{data.toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</div>
          </div>
          {dados.map(dados=>(
            <div key={dados.nome} className="linha-funcionario">
            <div className="icone">{iniciais(dados.nome)}</div>
            <div className="info">
              <div className="nome">{dados.nome}</div>
              <div className="cargo">{dados.cargo}</div>
            </div>
            <div className="botoes-horarios">
              <div className="grupo-horario">
                <span className="label"></span>
                <span className={status(dados.entrada)}  >{dados.entrada == null ? "--:--" : dados.entrada}</span>
              </div>
              <div className="grupo-horario">
                <span className="label"></span>
                <span className={status(dados.saida)} >{dados.saida == null ? "--:--" : dados.saida}</span>
              </div> 
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
