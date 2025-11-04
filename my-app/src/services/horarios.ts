import api from "../api"

const editarHorarios = async (dataCriada:string, hora:string, tipo:string, id_funcionario:number)=>{
    try {
        let body = {dataCriada, id_funcionario}
        if(tipo === "entrada"){
            Object.assign(body, {entrada:null})
        }else if (tipo === "saida"){
            Object.assign(body, {saida:hora})
        }
        
        const {data} = await api.patch("/horarios/editar", body)
        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao editar horario"}
    }
}

const verificar = async ()=>{
    try {
        const {data} = await api.get("/horarios/verificar")

        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao editar horario"}
    }
}

export default  {editarHorarios, verificar}