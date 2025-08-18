import api from "../api"

const getAll = async ()=>{
    try {
        const {data} = await api.get("/funcionario")
        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao listar funcionarios"}
    }
}

export default  {getAll}