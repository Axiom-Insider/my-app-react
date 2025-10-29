import api from "../api"

const criarAusencia = async (dataInicio:string, dataFim:string, tipoAusencia:string, id_funcionario:number)=>{
    try {

        let body = {dataInicio, dataFim, tipoAusencia:formatarTipo(tipoAusencia), id_funcionario}
        if(!dataFim){
        body.dataFim = dataInicio
        }
        const {data} = await api.post("/ausencia", body)
        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao listar funcionarios"}
    }
}

const formatarTipo = (e:string)=>{
    const tipo = ['FERIAS', 'ATESTADO', 'LICENCA', 'OUTRO']
    switch (e) {
        case "Férias":
            return tipo[0]
        case "Atestado":
            return tipo[1]
        case "Licença":
            return tipo[2]
        case "Outro":
            return tipo[3]
        default:
            return tipo[0]
    }
}

export default  {criarAusencia}