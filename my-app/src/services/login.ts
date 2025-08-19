import api from "../api"

  const loginDay = async (matricula:string, senha:string)=>{
    try {
        const {data} = await api.post("/auth/login", {matricula:parseInt(matricula), senha})
        console.log(data);
        
        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao fazer login"}
    }
}

    const loginFirst = async (matricula:string, senha:string, novaSenha:string)=>{
        try {
            const data = await api.post("/auth/login", {matricula:parseInt(matricula), senha, novaSenha})
            return data
        } catch (error) {
            throw error.response?.data || {message: "Erro ao registrar nova senha"}
        }
    }



export {loginDay, loginFirst}