import mountain from '../../assets/mountains.png'
import '../../styles/about.sass'
import React, { useState } from 'react';


function About() {

    // ci-dessous 2 constantes pour gérer l'ouverture des descriptions déroulantes

    const [isFiabiliteOpen, setIsFiabiliteOpen] = useState(false); 
    // isOpen = variable d'état indiquant l'état d'ouverture de la description
    // setIsOpen = fonction permettant de mettre à jour cet état
    // useState = hook permettant de changer un état
    // paramètres initiaux : 
    // isOpen est faux, chevron up est display, chevron down + description en non display
    
    const handleFiabiliteToggle = () => { 
        setIsFiabiliteOpen(!isFiabiliteOpen); 
    };
    // fonction handleToggle utilisée pour inverser la valeur de isOpen -> "!isOpen" change isOpen de false à true ou de true à false, selon son état actuel

    const [isRespectOpen, setIsRespectOpen] = useState(false);
    const handleRespectToggle = () => { 
        setIsRespectOpen(!isRespectOpen); 
    };
    const [isServiceOpen, setIsServiceOpen] = useState(false);
    const handleServiceToggle = () => { 
        setIsServiceOpen(!isServiceOpen); 
    };
    const [isSecuriteOpen, setIsSecuriteOpen] = useState(false);
    const handleSecuriteToggle = () => { 
        setIsSecuriteOpen(!isSecuriteOpen); 
    };



    return (
        <div>
            <div className='title'>
                <img src={mountain} alt="paysage bord de mer" />
            </div>
            <div className='container-about'>
                <div className='container-about-card'>
                    <div className='container-about-title'>
                        <h2>Fiabilité</h2>

                        {isFiabiliteOpen ? (
                            <i className={`fas fa-chevron-down ${isFiabiliteOpen ? 'open' : ''}`} onClick={handleFiabiliteToggle}></i>
                            // si la description est ouverte, au clic le chevron up change d'état (= apparaît)
                            // la classe "open" perment de faire apparaître le chevron down lorsque le chevron "up" est cliqué
                        ) :
                        (
                            <i className={`fas fa-chevron-up ${isFiabiliteOpen ? 'open' : ''}`} onClick={handleFiabiliteToggle}></i>
                            // si la description est fermée, au clic le chevron up change d'état (= disparaît)
                        )}
                    </div>
                    <div className={`container-about-description ${isFiabiliteOpen ? 'open' : ''}`}>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </div>
                </div>
                
                <div className='container-about-card'>
                    <div className='container-about-title'>
                        <h2>Respect</h2>
                        {isRespectOpen ? (
                            <i className={`fas fa-chevron-down ${isRespectOpen ? 'open' : ''}`} onClick={handleRespectToggle}></i>
                        ) :
                        (
                            <i className={`fas fa-chevron-up ${isRespectOpen ? 'open' : ''}`} onClick={handleRespectToggle}></i>
                        )}
                    </div>
                    <div className={`container-about-description ${isRespectOpen ? 'open' : ''}`}>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>

                <div className='container-about-card'>
                    <div className='container-about-title'>
                        <h2>Service</h2>
                        {isRespectOpen ? (
                            <i className={`fas fa-chevron-down ${isServiceOpen ? 'open' : ''}`} onClick={handleServiceToggle}></i>
                        ) :
                        (
                            <i className={`fas fa-chevron-up ${isServiceOpen ? 'open' : ''}`} onClick={handleServiceToggle}></i>
                        )}
                    </div>
                    <div className={`container-about-description ${isServiceOpen ? 'open' : ''}`}>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>

                <div className='container-about-card'>
                    <div className='container-about-title'>
                        <h2>Sécurité</h2>
                        {isSecuriteOpen ? (
                            <i className={`fas fa-chevron-down ${isSecuriteOpen ? 'open' : ''}`} onClick={handleSecuriteToggle}></i>
                        ) :
                        (
                            <i className={`fas fa-chevron-up ${isSecuriteOpen ? 'open' : ''}`} onClick={handleSecuriteToggle}></i>
                        )}
                    </div>
                    <div className={`container-about-description ${isSecuriteOpen ? 'open' : ''}`}>
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissan une note aussi bien à l'hôte au'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About