import './Navbar.css'
import { FaHome, FaUserPlus, FaUserShield } from 'react-icons/fa'

const Navbar = ()=> {
  return (
    <div >
      <nav className="navbar">
        <ul className=''>
            <span className='logo'>PoloUAB</span>
        </ul>
        
        <ul className="menu">
            <li><FaUserPlus className='icone-hover' /> <span className='text-icone'>Cadastro</span></li>
            <li><FaHome className='icone-hover'/>  <span className='text-icone'>Home</span></li>
            <li><FaUserShield  className='icone-hover'/> <span className='text-icone'>Login</span></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
