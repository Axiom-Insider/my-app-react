import { useEffect, useState } from "react";
import "./alerta.css"

function Alerta({msg, tipo}) {
       
  var alerta
  switch (tipo) {
    case 'sucesso':
        alerta = "sucesso"      
      break;
    case 'erro':
        alerta = "erro"
      break;
    case 'aviso':
        alerta = "aviso"      
      break;
      default:
        
        break;
  }
  return (
    <div>
        <div className={"alerta alerta-" + alerta}>
          <strong>{msg}</strong>
        </div>  
    </div>
  )
}

export default Alerta