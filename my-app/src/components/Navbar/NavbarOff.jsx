import { MdLogin } from 'react-icons/md'
import './Navbar.css'
import {useNavigate} from 'react-router-dom'


const NavbarOff = ()=> {

  const navigate = useNavigate()

  return (
    <div className='navbarOff'>
      <nav className="navbar">
        <ul className='menuLogo'>
            <span className='logo'>PoloUAB</span>
        </ul>
        <ul className="menu">
            <li onClick={()=> navigate("/login")}><MdLogin  className='icone-hover'/> <span className='text-icone'> Login</span></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavbarOff