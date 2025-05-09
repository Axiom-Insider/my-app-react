import { GiExitDoor, GiPalmTree } from 'react-icons/gi'
import './Navbar.css'
import { FaClock, FaHome } from 'react-icons/fa'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'

const NavbarAdm = ()=> {

  const nagation = useNavigate()

  return (
    <div>
      <nav className="navbar">
        <ul className='menuLogo'>
        <div className="navbar-logo" href="#">
        <span style={{ animationDelay: '0s' }}>P</span>
        <span style={{ animationDelay: '0.1s' }}>o</span>
        <span style={{ animationDelay: '0.2s' }}>l</span>
        <span style={{ animationDelay: '0.3s' }}>o</span>
        <span style={{ animationDelay: '0.4s' }}>U</span>
        <span style={{ animationDelay: '0.5s' }}>A</span>
        <span style={{ animationDelay: '0.6s' }}>B</span>
      </div>
        </ul>
        
        <ul className="menu">
            <li onClick={() => nagation("/")}><FaHome className='icone-hover'/> <span className='text-icone'> Home</span></li>
            <li><FaClock className='icone-hover '/> <span className="text-icone"> Horários</span></li>
            <li><GiPalmTree className='icone-hover'/> <span className="text-icone"> Feriados</span></li>
            <li><BsFillPersonVcardFill className='icone-hover'/> <span className="text-icone"> Funcionários</span></li>
            <li><GiExitDoor  className='icone-hover'/> <span className="text-icone"> Sair</span></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavbarAdm
