import '../../styles/header.sass'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/kasa-red-logo.png'
 
function Header() {
    return (
        <nav>
            <NavLink to="/">
                <img src={logo} alt="Logo Kasa" />
            </NavLink>
            <div className='menu'>
                <div className='menu__item'>
                    <NavLink to="/" activeclassname="activeLink">
                        Accueil
                    </NavLink>
                </div>
                <div className='menu__item'>
                    <NavLink to="/a-propos" activeclassname="activeLink">
                        A Propos
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header