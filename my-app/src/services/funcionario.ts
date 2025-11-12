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
        const {id} = JSON.parse(item);
        
        const {data} = await api.get("/funcionario/"+id)

        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao listar funcionarios"}
    }
}

const resetarSenha = async (id:number)=>{
    try {
        const body = {primeiraEntrada:false, senha:'123'}
        const {data} = await api.patch("/funcionario/"+id, body)

        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao listar funcionarios"}
    }
}

const buscar = async (nome:string)=>{
    try {
        const {data} = await api.get("/funcionario/buscar/" + nome)
        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao listar funcionarios"}
    }
}

export default  {getAll, getId, resetarSenha, buscar}