import axios from "axios"
import api from "../api"

export  const login = async (matricula:string, senha:string)=>{
    try {
        const {data} = await api.post("/auth/login", {matricula:parseInt(matricula), senha})
        console.log("Login feito:", data)
    } catch (error) {
        throw error.response?.data || {message: "Erro ao fazer login"}
    }
}