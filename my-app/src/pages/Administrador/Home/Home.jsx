import { FaClock, FaRegClock, FaUserTie } from "react-icons/fa"
import NavbarAdm from "../../../components/Navbar/NavbarAdm"
import "./Home.css"
import { TfiMoreAlt } from "react-icons/tfi"


function App() {

  const iniciais = (nome)=>{
    var dividido = nome.split(' ')
    var primeira = dividido[0].charAt(0).toUpperCase();
    var segunda = dividido[1].charAt(0).toUpperCase();
    return `${primeira}${segunda}`
  }

  const dados = [
    { nome: 'Francisco Martins Gonçalves Gomes', cargo: 'Técnico de Informática', entrada: '08:04', saida: '13:05' },
    { nome: 'Ana Beatriz Almeida Souza', cargo: 'Assistente Administrativa', entrada: '08:10', saida: '12:30' },
    { nome: 'Carlos Henrique Lopes Silva', cargo: 'Zelador', entrada: '07:45', saida: '11:50' },
    { nome: 'Juliana Ramos de Oliveira', cargo: 'Bibliotecária', entrada: '09:00', saida: '13:00' },
    { nome: 'Rafael Augusto Ferreira', cargo: 'Técnico de Laboratório', entrada: '08:30', saida: '14:00' },
    { nome: 'Larissa Cristina Mendes', cargo: 'Secretária', entrada: '08:00', saida: '12:45' },
    { nome: 'Bruno Moreira Dias', cargo: 'Segurança', entrada: '06:00', saida: '12:00' },
    { nome: 'Tatiane Lopes Ferreira', cargo: 'Coordenadora de Polo', entrada: '09:10', saida: '15:00' },
    { nome: 'Vinícius Rocha Barbosa', cargo: 'Estagiário', entrada: '10:00', saida: '14:00' },
    { nome: 'Mariana Duarte Pinheiro', cargo: 'Assistente Social', entrada: '08:20', saida: '13:20' },
    { nome: 'João Pedro Carvalho Lima', cargo: 'Motorista', entrada: '07:00', saida: '11:00' },
    { nome: 'Renata Silva Tavares', cargo: 'Coordenadora Acadêmica', entrada: '08:00', saida: '12:00' },
    { nome: 'Lucas Matheus da Cruz', cargo: 'Técnico de Suporte', entrada: '08:15', saida: '12:15' },
    { nome: 'Gabriela Lima Moreira', cargo: 'Recepcionista', entrada: '07:50', saida: '12:30' },
    { nome: 'Felipe Araújo Santos', cargo: 'Auxiliar de Serviços Gerais', entrada: '06:45', saida: '11:30' },
    { nome: 'Isabela Fernandes Rocha', cargo: 'Orientadora de Curso', entrada: '09:30', saida: '13:30' },
    { nome: 'Ricardo Menezes Costa', cargo: 'Coordenador Pedagógico', entrada: '08:00', saida: '13:00' },
    { nome: 'Bianca Soares Ferreira', cargo: 'Assistente de Polo', entrada: '08:10', saida: '12:40' },
    { nome: 'Daniel Oliveira Martins', cargo: 'Estagiário de TI', entrada: '09:00', saida: '13:00' },
    { nome: 'Camila Nogueira Barros', cargo: 'Tutora Presencial', entrada: '08:45', saida: '12:45' },
    { nome: 'Thiago Costa Almeida', cargo: 'Manutenção Predial', entrada: '07:30', saida: '11:30' },
    { nome: 'Vanessa Martins Ribeiro', cargo: 'Coordenadora Geral', entrada: '08:00', saida: '14:00' }
  ];

  return (
    <div>
      <NavbarAdm />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="alertas">
          <div className="head-home">
            <div className="titulo-home">
              Status de funcionários 
            </div>
            <div className="data">12/03/2025</div>
          </div>
          <div class="linha-funcionario">
            <div class="icone">FM</div>
            <div class="info">
              <div class="nome">Francisco Martins Gonçalves Gomes</div>
              <div class="cargo">Técnico de Informática</div>
            </div>
            <div class="botoes-horarios">
              <div class="grupo-horario">
                <span class="label">Entrada:</span>
                <span class="horario entrada">08:03</span>
              </div>
              <div class="grupo-horario">
                <span class="label">Saída:</span>
                <span class="horario saida">13:05</span>
              </div>  
            </div>
            <div className="presente">Presente</div>
            <div className="saiu">Saiu</div>
          </div>
          {dados.map(dados=>(
            <div class="linha-funcionario">
            <div class="icone">{iniciais(dados.nome)}</div>
            <div class="info">
              <div class="nome">{dados.nome}</div>
              <div class="cargo">{dados.cargo}</div>
            </div>
            <div class="botoes-horarios">
              <div class="grupo-horario">
                <span class="label">Entrada:</span>
                <span class="horario entrada">{dados.entrada}</span>
              </div>
              <div class="grupo-horario">
                <span class="label">Saída:</span>
                <span class="horario saida">{dados.saida}</span>
              </div>  
            </div>
            <div class="opcoes"><TfiMoreAlt></TfiMoreAlt></div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
