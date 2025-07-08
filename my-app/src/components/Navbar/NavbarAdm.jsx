import { RxHamburgerMenu } from 'react-icons/rx'
import './Navbar.css'
import {useLocation, useNavigate} from 'react-router-dom'
import { BsBoxArrowRight, BsHouseDoor } from 'react-icons/bs'
import {ImClock } from 'react-icons/im'
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuTreePalm } from 'react-icons/lu'
import { MdControlPoint } from 'react-icons/md'

const NavbarAdm = ()=> {

  const location = useLocation()

  const verificadoPagina = (navbar) => {
    return navbar === location.pathname.split('/')[2] ? " ativo" : " "
  }

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
          { //Horarios, feriados, funcionarios, cadastro
            }
            <ul className="navbar-nav ms-3">
              <li className="nav-item">
                <a className={'nav-link' + verificadoPagina('home')} href='/administrador/home' >
                  <BsHouseDoor className="me-1" />Home
                </a>
              </li>
              <li className="nav-item">
                <a className={'nav-link' + verificadoPagina('horarios')} href='/administrador/horarios' >
                  <MdControlPoint className="me-1" />Controle de Ponto
                </a>
              </li>
              <li className="nav-item">
                <a className={'nav-link' + verificadoPagina('feriados')} href='/administrador/feriados' >
                <LuTreePalm className="me-1" />Feriados
                </a>
              </li>
              <li className="nav-item">
                <a className={'nav-link' + verificadoPagina('feriados')} href='/administrador/feriados' >
                <HiOutlineUserGroup className="me-1" />Funcionarios
                </a>
              </li>

              <li className="nav-item">
                <a className={"sair nav-link " +  verificadoPagina('sair')} href="/sair">
                  <BsBoxArrowRight className="me-1" />Sair
                </a>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default NavbarAdm
