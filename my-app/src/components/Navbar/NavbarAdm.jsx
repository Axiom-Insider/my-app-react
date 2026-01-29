import { RxHamburgerMenu } from 'react-icons/rx'
import './Navbar.css'
import {Link, useLocation} from 'react-router-dom'
import { BsBoxArrowRight, BsHouseDoor } from 'react-icons/bs'
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuTreePalm } from 'react-icons/lu'
import { MdControlPoint } from 'react-icons/md'
import { FaRegAddressCard } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext';

const NavbarAdm = ()=> {

  const location = useLocation()
  const {logout} = useAuth()

  const verificadoPagina = (navbar) => {
    return navbar === location.pathname.split('/')[1] ? " ativo" : " "
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
                <Link to={"/monitoramento"}  className={'nav-link' + verificadoPagina('monitoramento')} >
                  <BsHouseDoor className="me-1" />Home
                </Link>
              </li>
              <li className="nav-item">
               <Link to={"/horarios"} className={'nav-link' + verificadoPagina('horarios')} >
                  <MdControlPoint className="me-1" />Controle de Ponto
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/feriados"} className={'nav-link' + verificadoPagina('feriados')} ><LuTreePalm className="me-1" />Feriados</Link>
              </li>
              <li className="nav-item">
                <Link to={"/funcionarios"} className={'nav-link' + verificadoPagina('funcionarios')} ><HiOutlineUserGroup className="me-1" />Funcionários</Link>
              </li>
              <li className="nav-item">
                <Link to={"/cadastro"} className={'nav-link' + verificadoPagina('cadastro')} ><FaRegAddressCard className="me-1" />Registro de Funcionários </Link>
              </li>

              <li className="nav-item">
                <a className={"close nav-link " +  verificadoPagina('sair')} onClick={()=>logout()}>
                  <BsBoxArrowRight className="me-1" />Sair
                  </a>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default NavbarAdm
