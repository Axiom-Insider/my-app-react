import api from "../api"

const criarAusencia = async (dataCriada:string, hora:string, tipo:string, id_funcionario:number)=>{
    try {
        let body = {dataCriada, id_funcionario}
        if(tipo === "entrada"){
            Object.assign(body, {entrada:hora})
        }else if (tipo === "saida"){
            Object.assign(body, {saida:hora})
        }
        
        const {data} = await api.patch("/horarios/editar", body)
        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao listar funcionarios"}
    }
}

export default  {criarAusencia}