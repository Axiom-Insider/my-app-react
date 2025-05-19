import { FaClock, FaRegClock, FaUserTie } from "react-icons/fa"
import NavbarAdm from "../../../components/Navbar/NavbarAdm"
import "./Home.css"
import { TfiMoreAlt } from "react-icons/tfi"


function App() {

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
            <div className="clock"><FaRegClock /> </div>
            <div className="titulo-home">
              Funcionários que já bateram o ponto
            </div>
            <div className="data">12/03/2025</div>
          </div>
            <div className="row alinhado">
              <div className="col"><div className="icone">FM</div> </div>
              <div className="col"><div className="info">Francisco Martins Gonçalves Gomes</div></div>
              <div className="col">Tecnico de Informatica</div>
              <div className="col"><div className="entrada">Entrada: 08:03</div></div>
              <div className="col"><div className="saida">Saída: 13:05</div></div>
              <div className="col"><div className="grupo3"><TfiMoreAlt /></div></div>
            </div>

            {dados.map(dados=>( 
                <div className="linha">
            <div className="grupo">
              <div className="icone">FM</div> 
              <div className="info">{dados.nome}</div>
              <div className="cargo">{dados.cargo}</div> 
            </div>
            <div className="grupo2">
             <div className="entrada">Entrada: {dados.entrada}</div> <div className="saida">Saída: {dados.saida}</div> 
            </div>
            <div className="grupo3">
            <TfiMoreAlt />
            </div>
          </div>
            ))}
        

        </div>
      </div>
    </div>
  )
}

export default App
