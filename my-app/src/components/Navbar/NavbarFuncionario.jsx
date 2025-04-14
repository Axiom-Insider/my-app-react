import './Navbar.css'
import { useNavigate} from 'react-router-dom'
import { FaBusinessTime, FaHome } from 'react-icons/fa'
import { MdTimer } from 'react-icons/md'
import { GiExitDoor } from 'react-icons/gi'

export default function NavbarFuncionario() {

    const navigate = useNavigate()

  return (
    <div>
       <div className='navbarOff'>
            <nav className="navbar">
              <ul className='menuLogo'>
                  <span className='logo'>PoloUAB</span>
              </ul>
              <ul className="menu">
                  <li onClick={()=> navigate("/funcionario/home")}><FaHome  className='icone-hover'/> <span className='text-icone'> Home</span></li>
                  <li onClick={()=> navigate("/registro")}><MdTimer  className='icone-hover'/> <span className='text-icone'> Registrar</span></li>
                  <li onClick={()=> navigate("/funcionario/historico")}><FaBusinessTime  className='icone-hover'/> <span className='text-icone'> Histórico</span></li>
                  <li><GiExitDoor  className='icone-hover'/> <span className="text-icone"> Sair</span></li>
              </ul>
            </nav>
          </div>
    </div>
  )
}
