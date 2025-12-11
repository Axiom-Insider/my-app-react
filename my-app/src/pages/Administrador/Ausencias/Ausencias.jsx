/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import NavbarAdm from '../../../components/Navbar/NavbarAdm'
import "./Ausencias.css";
import { useEffect, useState } from 'react';
import ausencias from '../../../services/ausencias';
import Alerta from '../../../components/Alertas/Alerta';
import { FaTrash } from 'react-icons/fa';

export default function Ausencias() {
    const { id } = useParams()
    const [anos, setAnos] = useState([])
    const [mesSelect, setMesSelect] = useState(new Date().getMonth())
    const [anoSelect, setAnoSelect] = useState(new Date().getFullYear())
    const [dados, setDados] = useState([])

    const [alerta, setAlerta] = useState(false)
    const [tipoAlerta, setTipoAlerta] = useState('')
    const [close, setClose] = useState(false)

    const mes = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    useEffect(() => {
        const fetchAnos = async () => {
            try {
                const { dados } = await ausencias.ano(id);
                console.log(dados);
                
                setAnos(dados)
            } catch (error) {
                console.error("Erro ao buscar anos:", error);
            }
        };

        fetchAnos();
    }, []);

    const excluir = async (id) => {
        try {
            const data = await ausencias.excluir(id)
            setAlerta(data)
            setTipoAlerta("sucesso")
            buscarDados()
        } catch (error) {
            setAlerta(error.message || "Falha ao excluir ausência")
            setTipoAlerta("erro")
        }
    }



    const buscarDados = async () => {
        try {
            const dados = await ausencias.listarAusencia(id, mesSelect, anoSelect)

            setDados(dados)
        } catch (error) {
            setAlerta(error.message || "Falha ao listar ausências")
            setTipoAlerta("erro")
        }
    }

    useEffect(() => {
        buscarDados()
    }, [mesSelect, anoSelect])


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


    return (
        <div>
            <NavbarAdm />
            {alerta && (<Alerta msg={alerta} tipo={tipoAlerta} close={close} />)}
            <div className="container d-flex justify-content-center align-items-center">

                <div className="tabela-funcionarios">
                    <div className="card-funcionario">
                        <div className="icone">FM</div>
                        <div>
                            <h2 className='nome-ausencia'>Francisco Martins Gonçalves Gomes</h2>
                        </div>
                    </div>
                    <div className="row">
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
                    </div>
                    <div className="row tabela-titulo ">
                        <div className="col">Tipo</div>
                        <div className="col">Data Início</div>
                        <div className="col">Data Fim</div>
                        <div className="col text-center">Excluir</div>
                    </div>
                    {dados.map((item) => (
                        <div className="row tabela-body align-items-center" key={item.id}>
                            <div className="col">{item.tipoAusencia}</div>
                            <div className="col">{item.dataInicio}</div>
                            <div className="col">{item.dataFim}</div>
                            <div className="col text-center">
                                <button className="btn trash-btn" onClick={()=> excluir(item.id)}  ><i className="trash-icon"><FaTrash /></i></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
