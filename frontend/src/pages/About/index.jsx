import mountain from '../../assets/mountains.png'
import '../../styles/about.sass'

function About() {
    return (
        <div>
            <div className='title'>
                <img src={mountain} alt="paysage bord de mer" />
            </div>
            <div className='container-about'>
                <div>
                    <p>Fiabilité</p>
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-chevron-up"></i>
                </div>
                <div>
                    <p>Respect</p>
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-chevron-up"></i>
                </div>
                <div>
                    <p>Service</p>
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-chevron-up"></i>
                </div>
                <div>
                    <p>Sécurité</p>
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-chevron-up"></i>
                </div>
            </div>
        </div>
    )
}

export default About