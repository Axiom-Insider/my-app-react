import React, { useEffect, useState } from 'react'
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import { FaCheck, FaRegClock, FaSearch, FaUserEdit, FaUserPlus } from 'react-icons/fa'
import funcionarios from '../funcionarios'
import "./Registro.css"
import { MdPersonSearch } from 'react-icons/md'
import Horarios from '../Horarios/Horarios'

export default function Registro() {

  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [selecionado, setSelecionado] = useState(false);
  const [ativo, setAtivo] = useState('registrar');
  const dados = funcionarios();
  const [funcionarioPesquisar, setFuncionarioPesquisar] = useState();
  const [funcionarioFiltrado, setFuncionarioFiltrado] = useState([]);

  useEffect(() => {

    const resultado = dados.filter(user => user.nome.toLowerCase().includes(funcionarioPesquisar))
    setFuncionarioFiltrado(resultado)
  }, [funcionarioPesquisar])


  const iniciais = (nome) => {
    var dividido = nome.split(' ')
    var primeira = dividido[0].charAt(0).toUpperCase();
    var segunda = dividido[1].charAt(0).toUpperCase();
    return `${primeira}${segunda}`
  }

  const digitando = (event) => {
    setFuncionarioPesquisar(event.target.value)
  }

  const funcionarioSelecionado = (id) => {

    if (selecionado == id) {
      setSelecionado(false)
      setFuncionarioFiltrado(dados)
      setNome('')
      setMatricula('')
      setCargo('')
      setEmpresa('')
    } else {
      setSelecionado(id)
      const fun = funcionarioFiltrado.filter(user => user.id === id);
      setNome(fun[0].nome)
      setMatricula(fun[0].id)
      setCargo(fun[0].cargo)
      setEmpresa(3)
      setFuncionarioFiltrado(fun)
    }

  }

  return (
    <div>
      <NavbarAdm />
      <div className="d-flex justify-content-center align-items-center">
        <div className="box-registro-funcionario">
          <div className="head">
            <div className={ativo == 'registrar' ? "sub selecionado" : "sub"} onClick={() => setAtivo('registrar')}><FaUserPlus /> Registrar</div>
            <div className={ativo == 'editar' ? "sub selecionado" : "sub"} onClick={() => setAtivo('editar')}><FaUserEdit /> Editar</div>
          </div>
          {ativo === "editar" ?
            <div className="body-horarios">
              <div className="horarios-linha">
                <input className='form-control'  onChange={(e) => setNome(e.target.value)} value={nome} type="text" name="nome" id="" />
              </div>
              <div className="linha-registro">
                <div className="horarios-linha editar">
                  <input className='form-control' onChange={(e) => setNome(e.target.value)} type="number" value={matricula} name="matricula" id="" />
                </div>
                <div className="horarios-linha editar">
                  <input className='form-control' onChange={(e) => setNome(e.target.value)} type="text" value={cargo} name="cargo" id="" />
                </div>
              </div>
              <div className="horarios-linha">
                <select className='form-select' name="" id="">
                  <option value="1" selected={empresa == 1}>Nenhum</option>
                  <option value="2" selected={empresa == 2}>Confiança</option>
                  <option value="3" selected={empresa == 3}>PoloUAB</option>
                </select>
              </div>
              {selecionado != false ?
                <div className="horarios-linha">
                  <div className="horarios-linha"><button className='botao-adicionar'>Atualizar Registro</button></div>
                </div> : ''}
              <div className="horarios-linha mt-4">
                <div class="search-container">
                  <input type="text" onChange={digitando} class="form-control search-input" placeholder="Pesquisar..." />
                  <i class="fas fa-search search-icon"><MdPersonSearch /> </i>
                </div>
              </div>
              <div className="horarios-linha">
                {funcionarioFiltrado.map(dados => (
                  <div className={selecionado == dados.id ? 'funcionarios select' : 'funcionarios'} onClick={() => funcionarioSelecionado(dados.id)} key={dados.id}>
                    <div className="icone" >{iniciais(dados.nome)}</div>
                    <div className="nome-horarios">{dados.nome}</div>
                    {selecionado == dados.id ? <div className='func-selecionado'><FaCheck /></div> : ''}</div>
                ))}
              </div>
            </div>
            :
            <div className='body-horarios'>
              <div className="horarios-linha">
                <label htmlFor="" className='form-label'>Nome:</label>
                <input className='form-control' type="text" name="nome" id="" />
              </div>
              <div className="linha-registro">
                <div className="horarios-linha editar">
                  <label htmlFor="" className='form-label'>Matrícula:</label>
                  <input className='form-control' type="number" name="matricula" id="" />
                </div>
                <div className="horarios-linha editar">
                  <label htmlFor="" className='form-label'>Cargo:</label>
                  <input className='form-control' type="text" name="matricula" id="" />
                </div>
              </div>
              <label htmlFor="" className='form-label'>Empresa:</label>
              <div className="horarios-linha">
                <select className='form-select' name="" id="">
                  <option value="PoloUAB">Nenhum</option>
                  <option value="Confianca">Confiança</option>
                </select>
              </div>
              <div className="horarios-linha mt-2"><button className='botao-adicionar'>Registrar Funcionário</button></div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
