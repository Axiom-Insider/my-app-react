import api from "../api"


const loginDay = async (cpf: string, senha: string) => {
    try {
        const { data } = await api.post("/auth/login", { cpf, senha })
        if (!data.primeiraEntrada) {
            return data
        }
        localStorage.setItem("token", data.token)
        return data
    } catch (error) {
        throw error.response?.data || { message: "Erro ao fazer login" }
    }
}

const loginFirst = async (cpf: string, senha: string, novaSenha: string) => {
    try {
        const { data } = await api.post("/auth/login", { cpf, senha, novaSenha })
        return data
    } catch (error) {
        throw error.response?.data || { message: "Erro ao registrar nova senha" }
    }
}



export { loginDay, loginFirst }