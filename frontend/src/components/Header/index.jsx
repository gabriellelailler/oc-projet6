import '../../styles/header.sass'
import { Link } from 'react-router-dom'
import logo from '../../assets/kasa-red-logo.png'
 
function Header() {
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="Logo Kasa" />
            </Link>
            <div className='menu'>
                <div className='menu__item'>
                    <Link to="/" activeClassName="activeLink">
                        Accueil
                    </Link>
                </div>
                <div className='menu__item'>
                    <Link to="/a-propos" activeClassName="activeLink">
                        A Propos
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header