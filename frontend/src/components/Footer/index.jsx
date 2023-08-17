import '../../styles/footer.sass'
import logo from '../../assets/kasa-white-logo.png'
function Footer() {
    return (
        <div className='footer-container'>
            <div className='spacer'></div>
            <div className='footer'>
                <img src={logo} alt="Logo Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer