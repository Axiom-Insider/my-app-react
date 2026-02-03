import "./alerta.css"
import { TbAlertSquareRoundedFilled } from "react-icons/tb"
import { FaUserCheck } from "react-icons/fa"
import { BiSolidError } from "react-icons/bi"

function Alerta({msg, tipo, close}) {
  const alerta = ['erro', 'sucesso', 'aviso', 'sair']     
  const classe = alerta.includes(tipo) ? tipo : 'aviso'
  const icone = {
    erro:<BiSolidError />,
    sucesso:<FaUserCheck />,
    aviso:<TbAlertSquareRoundedFilled />
  }
  return (
    <div>
        <div className={close ? 'alerta alerta-'+classe + ' sair' : "alerta alerta-" + classe }>
          <strong><i className="icone-alerta">{icone[classe]}</i> {msg}</strong>
        </div>  
    </div>
  )
}

export default Alerta