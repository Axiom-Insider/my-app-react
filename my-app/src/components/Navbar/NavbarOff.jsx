import { MdLogin } from 'react-icons/md'
import './Navbar.css'


const NavbarOff = ()=> {
  return (
    <div >
      <nav className="navbar">
        <ul className='menuLogo'>
            <span className='logo'>PoloUAB</span>
        </ul>
        
        <ul className="menu">
            <li><MdLogin  className='icone-hover'/> <span className='text-icone'> Login</span></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavbarOff