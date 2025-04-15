import './Navbar.css'
import { MdLogin } from 'react-icons/md'
import { RxHamburgerMenu } from "react-icons/rx";
import {useNavigate} from 'react-router-dom'


const NavbarOff = ()=> {

  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg gap-3">
    <a className="navbar-logo" href="#">PoloUAB</a>
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
          <a className="nav-link" href="/funcionario/home">
            <MdLogin className="me-1" /> Login
          </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default NavbarOff