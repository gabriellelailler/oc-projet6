import '../../styles/header.sass'
import { Link } from 'react-router-dom'
import logo from '../../assets/kasa-red-logo.png'
 
function Header() {
    return (
        <nav>
            <img src={logo} alt="Logo Kasa" />
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A Propos</Link>
            </div>
        </nav>
    )
}

export default Header