import './header.scss'
import { Link, NavLink } from "react-router-dom"
import Logo from '../../assets/header-logo.png'

export default function Header() {

    return (
        <header className='header'>
            <div className="company">
                <Link to="/home"><img src={Logo} alt="Logo de SportSee" className="header-logo" /></Link>
                <h1>SportSee</h1>
            </div>
            <nav className='navbar'>
                <NavLink
                    to="/home"
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                    Profil
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                    Réglage
                </NavLink>
                <NavLink
                    to="/community"
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                    Communauté
                </NavLink>
            </nav>
        </header>
    )
}