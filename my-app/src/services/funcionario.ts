import api from "../api"
import { useAuth } from "../context/AuthContext";

const getAll = async ()=>{
    try {
        const {data} = await api.get("/funcionario")
        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao listar funcionarios"}
    }
}

const getId = async ()=>{
    try {
        const item = localStorage.getItem('funcionario');
        if (!item) return null; 
        const funcionario = JSON.parse(item);
        
        const {data} = await api.get("/funcionario/"+funcionario.id)

        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao listar funcionarios"}
    }
}

export default  {getAll, getId}