import api from "../api"



const downloadPoloUAB = async (id_funcionario: number, mes: string, ano: string) => {
    try {
        const response = await api.get(
            `/documento/polouab/${id_funcionario}/${mes}/${ano}`,
            { responseType: "blob" }
        );

        const blob = new Blob([response.data], {
            type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        });

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "relatorio.docx"; // nome do arquivo
        a.click();
        window.URL.revokeObjectURL(url);
        return 'foi?'
    } catch (error) {
        throw error.response?.data || { message: "Erro ao registrar nova senha" }
    }
}



export default { downloadPoloUAB }