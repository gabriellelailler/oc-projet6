import '../../styles/footer.sass'
import logo from '../../assets/kasa-white-logo.png'
function Footer() {
    return (
        <div className='footer'>
                <img src={logo} alt="Logo Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer