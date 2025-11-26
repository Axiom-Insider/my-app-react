import api from "../api"

const editarHorarios = async (dataCriada:string, hora:string, tipo:string, id_funcionario:number)=>{
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
        throw error.response?.data || {message: "Erro ao editar horario"}
    }
}

const verificarAll = async ()=>{
    try {
       const {data} = await api.get("/horarios/verificarDia")
        console.log(data);
        
       return data
   } catch (error) {
       throw error.response?.data || {message: "Erro ao editar horario"}
   }
}

const verificar = async ()=>{
    try {
         const item = localStorage.getItem('funcionario');
        if (!item) return null; 
        const {id} = JSON.parse(item);

        const {data} = await api.get("/horarios/verificar/"+ id)

        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao editar horario"}
    }
}

const entrada = async ()=>{
    try {
         const item = localStorage.getItem('funcionario');
        if (!item) return null; 
        const {id} = JSON.parse(item);
        const body = {id_funcionario:id}
        
        const {data} = await api.post("/horarios/entrada/", body)

        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao editar horario"}
    }
}

const saida = async ()=>{
    try {
         const item = localStorage.getItem('funcionario');
        if (!item) return null; 
        const {id} = JSON.parse(item);
        const body = {id_funcionario:id}
        const {data} = await api.post("/horarios/saida/", body)

        return data
    } catch (error) {
        throw error.response?.data || {message: "Erro ao editar horario"}
    }
}

const historicoFuncionario = async (mes:string, ano:string)=>{
    try {
         const item = localStorage.getItem('funcionario');
        if (!item) return null; 
        const {id} = JSON.parse(item);
        console.log(id, mes, ano);
        const mesNumber = +mes;

        const {data} = await api.get(`/horarios/historico/${id}/${mesNumber + 1}/${ano}`)

        return data;
    } catch (error) {
        throw error.response?.data || {message: "Erro ao editar horario"}
    }
}

const historicoFuncionarioAdm = async (id:number, mes:string, ano:string)=>{
      try {
        const mesNumber = +mes;
        console.log(id, mes, ano);
        
        const {data} = await api.get(`/horarios/historico/${id}/${mesNumber + 1}/${ano}`)
        console.log(data);
        
        return data;
    } catch (error) {
        throw error.response?.data || {message: "Erro ao editar horario"}
    }
}

const anoAdm = async (id:number)=>{
    try {
       const {data} = await api.get(`/horarios/ano/${id}`)

       return data;
   } catch (error) {
       throw error.response?.data || {message: "Erro ao editar horario"}
   }
}


const ano = async ()=>{
    try {
        const item = localStorage.getItem('funcionario');
       if (!item) return null; 
       const {id} = JSON.parse(item);
       
       const {data} = await api.get(`/horarios/ano/${id}`)

       return data;
   } catch (error) {
       throw error.response?.data || {message: "Erro ao editar horario"}
   }
}



export default  {anoAdm, editarHorarios, verificar, entrada, saida, verificarAll, historicoFuncionario, ano, historicoFuncionarioAdm}