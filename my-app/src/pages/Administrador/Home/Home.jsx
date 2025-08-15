import { FaClock, FaRegClock, FaUserTie } from "react-icons/fa"
import NavbarAdm from "../../../components/Navbar/NavbarAdm"
import "./Home.css"
import { TfiMoreAlt } from "react-icons/tfi"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"


function App() {

  const [data] = useState(new Date())
  const location = useLocation()
  const [sucesso, setSucesso] = useState(false)

  useEffect(()=>{
    if(location.state && location.state.mensagem)setSucesso(location.state.mensagem)
  })

  const iniciais = (nome)=>{
    var dividido = nome.split(' ')
    var primeira = dividido[0].charAt(0).toUpperCase();
    var segunda = dividido[1].charAt(0).toUpperCase();
    return `${primeira}${segunda}`
  }

  const status = (horarios)=>{
    if(horarios != null){
      return "horario entrada"
    }
    return "horario ausente"
  }

  const dados = [
    { nome: 'Francisco Martins Gonçalves Gomes', cargo: 'Técnico de Informática', entrada: null, saida: null },
    { nome: 'Ana Beatriz Almeida Souza', cargo: 'Assistente Administrativa', entrada: '08:10', saida: '12:30' },
    { nome: 'Carlos Henrique Lopes Silva', cargo: 'Zelador', entrada: '07:45', saida: '11:50' },
    { nome: 'Juliana Ramos de Oliveira', cargo: 'Bibliotecária', entrada: '09:00', saida: '13:00' },
    { nome: 'Rafael Augusto Ferreira', cargo: 'Técnico de Laboratório', entrada: '08:30', saida: null },
    { nome: 'Larissa Cristina Mendes', cargo: 'Secretária', entrada: '08:00', saida: '12:45' },
    { nome: 'Bruno Moreira Dias', cargo: 'Segurança', entrada: '06:00', saida: '12:00' },
    { nome: 'Tatiane Lopes Ferreira', cargo: 'Coordenadora de Polo', entrada: '09:10', saida: null },
    { nome: 'Vinícius Rocha Barbosa', cargo: 'Estagiário', entrada: '10:00', saida: '14:00' },
    { nome: 'Mariana Duarte Pinheiro', cargo: 'Assistente Social', entrada: '08:20', saida: null },
    { nome: 'João Pedro Carvalho Lima', cargo: 'Motorista', entrada: '07:00', saida: null },
    { nome: 'Renata Silva Tavares', cargo: 'Coordenadora Acadêmica', entrada: '08:00', saida: '12:00' },
    { nome: 'Lucas Matheus da Cruz', cargo: 'Técnico de Suporte', entrada: '08:15', saida: '12:15' },
    { nome: 'Gabriela Lima Moreira', cargo: 'Recepcionista', entrada: '07:50', saida: '12:30' },
    { nome: 'Felipe Araújo Santos', cargo: 'Auxiliar de Serviços Gerais', entrada: '06:45', saida: null },
    { nome: 'Isabela Fernandes Rocha', cargo: 'Orientadora de Curso', entrada: '09:30', saida: '13:30' },
    { nome: 'Ricardo Menezes Costa', cargo: 'Coordenador Pedagógico', entrada: '08:00', saida: '13:00' },
    { nome: 'Bianca Soares Ferreira', cargo: 'Assistente de Polo', entrada: null, saida: null },
    { nome: 'Daniel Oliveira Martins', cargo: 'Estagiário de TI', entrada: '09:00', saida: null },
    { nome: 'Camila Nogueira Barros', cargo: 'Tutora Presencial', entrada: '08:45', saida: '12:45' },
    { nome: 'Thiago Costa Almeida', cargo: 'Manutenção Predial', entrada: '07:30', saida: '11:30' },
    { nome: 'Vanessa Martins Ribeiro', cargo: 'Coordenadora Geral', entrada: '08:00', saida: null }
  ];

  return (
    <div>
      <NavbarAdm />
      {sucesso && ('FOI PORRRA SUCESSO')}
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
