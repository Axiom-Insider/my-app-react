import api from "../api"

const criarFeriado = async (nome:string, dataInicio:string, dataFim:string, tipoFeriado:string, nacional:boolean)=>{
    try {
        const body = {nome, dataInicio, dataFim, tipoFeriado, nacional}
        if(!dataFim){
            body.dataFim = dataInicio
        }
        const {data} = await api.post("/feriados", body)
        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao criar feriado"}
    }
}

const lerFeriado = async ()=>{
    try {
        const {data} = await api.get("/feriados")
        return data    
    } catch (erro){

    } 
}

const findAnoTipo = async ()=>{
    try {
        
    } catch (error) {
        
    }
}

export default  {criarFeriado, lerFeriado}