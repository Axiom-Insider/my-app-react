import './Navbar.css'
import { MdLogin } from 'react-icons/md'
import { RxHamburgerMenu } from "react-icons/rx";
import {useNavigate} from 'react-router-dom'


const NavbarOff = ()=> {

  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg gap-3">
    <div className="navbar-logo" href="#">
        <span style={{ animationDelay: '0s' }}>P</span>
        <span style={{ animationDelay: '0.1s' }}>o</span>
        <span style={{ animationDelay: '0.2s' }}>l</span>
        <span style={{ animationDelay: '0.3s' }}>o</span>
        <span style={{ animationDelay: '0.4s' }}>U</span>
        <span style={{ animationDelay: '0.5s' }}>A</span>
        <span style={{ animationDelay: '0.6s' }}>B</span>
      </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="menu"><RxHamburgerMenu /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-3">
        <li className="nav-item">
          <a className="nav-link ativo" href="/funcionario/home">
            <MdLogin className="me-1" /> Login
          </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default NavbarOff