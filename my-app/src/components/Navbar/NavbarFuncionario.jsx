import { BsHouseDoor, BsPencil, BsCalendar3, BsBoxArrowRight } from 'react-icons/bs';
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css"
import { useLocation } from 'react-router-dom';

function NavbarFuncionario() {
  const location = useLocation()

  const verificadoPagina = (navbar) =>{
    return navbar === location.pathname.split('/')[2] ? " ativo" : " "
  }

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
              <a className={'nav-link' + verificadoPagina('home')} href='/funcionario/home' >            
                <BsHouseDoor className="me-1" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className={'nav-link' + verificadoPagina('registro')} href='/funcionario/registro'>
                <BsPencil className="me-1" /> Registrar Horário
              </a>
            </li>
            <li className="nav-item">
              <a className={'nav-link' + verificadoPagina('historico')}  href='/funcionario/historico'>
                <BsCalendar3 className="me-1" /> Histórico
              </a>
            </li>
            <li className="nav-item">
              <a className={'nav-link' + verificadoPagina('sair')} href="/sair">
                <BsBoxArrowRight className="me-1" /> Sair
              </a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default NavbarFuncionario

