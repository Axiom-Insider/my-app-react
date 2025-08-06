import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import "./Funcionarios.css";
import fun  from "./funcionarios";

export default function Funcionarios() {
    const dados = fun(); 
    
    const iniciais = (nome)=>{
    var dividido = nome.split(' ')
    var primeira = dividido[0].charAt(0).toUpperCase();
    var segunda = dividido[1].charAt(0).toUpperCase();
    return `${primeira}${segunda}`
  }   
return (
    <div>
        <NavbarAdm />
         <div className="container d-flex justify-content-center align-items-center">
            <div className="box-funcionarios">
            {dados.map(dados=>(
            <div class="linha-funcionario">
            <div class="icone">{iniciais(dados.nome)}</div>
            <div class="info">
              <div class="nome">{dados.nome}</div>
              <div class="cargo">{dados.cargo}</div>
            </div>
            <div class="botoes-horarios">
             
            </div>
            
          </div>
          ))}
            </div>
         </div>
    </div>
  )
}
