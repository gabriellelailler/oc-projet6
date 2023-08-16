import mountain from '../../assets/mountains.png'
import '../../styles/about.sass'

function About() {
    return (
        <div>
            <div className='title'>
                <img src={mountain} alt="paysage bord de mer" />
            </div>
            <div className='container-about'>
                <div className='container-about-card'>
                    <div className='container-about-title'>
                        <h2>Fiabilité</h2>
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-chevron-up"></i>
                    </div>
                    <div className='container-about-description'>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </div>
                </div>
                
                <div className='container-about-card'>
                    <div className='container-about-title'>
                        <h2>Respect</h2>
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-chevron-up"></i>
                    </div>
                    <div className='container-about-description'>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>

                <div className='container-about-card'>
                    <div className='container-about-title'>
                        <h2>Service</h2>
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-chevron-up"></i>
                    </div>
                    <div className='container-about-description'>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>

                <div className='container-about-card'>
                    <div className='container-about-title'>
                        <h2>Sécurité</h2>
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-chevron-up"></i>
                    </div>
                    <div className='container-about-description'>
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissan une note aussi bien à l'hôte au'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About