import logements from '../../logements.json'
import '../../styles/card.sass'
import { useParams } from 'react-router-dom'; // hook permettant d'obtenir les paramètres d'URL
import '../../styles/error.sass'

function  Card() {
  const { id } = useParams(); // -> si l'URL est "/article/123", id sera égal à "123".
  const card = logements.find(logement => logement.id === id); // .find() pour rechercher l'article correspondant dans le tableau logements en utilisant l'ID que nous avons extrait des paramètres d'URL. 

  if (!card) {
    return (
      <div className="error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas</h2>
            <p><a href="/">Retourner sur la page d'accueil</a></p>
        </div>
    )
    
  }

  return (
    <div className='card'>
      <img src={card.cover} alt={card.title} />

      <div className='bloc-desktop-1'>
        <div>
          <h2>{card.title}</h2>
          <p>{card.location}</p>
        </div>
        <div className='host'>
          <p>{card.host.name}</p>
          <img src ={card.host.picture} alt={card.host.name} />
        </div>
      </div>

      <div className='bloc-mobile-1'>
          <h2>{card.title}</h2>
          <p>{card.location}</p>
          <div className='tags'>
          {card.tags.map((tag, index) => (
            <p key={index} className='tag'>{tag}</p>
          ))}
        </div>
      </div>


      <div className='bloc-desktop-2'>
        <div className='tags'>
          {card.tags.map((tag, index) => (
            <p key={index} className='tag'>{tag}</p>
          ))}
        </div>
        <div className='stars'>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index}>
              {index < card.rating ? (
                  <i className="fas fa-star" style={{ color: '#ff6060' }}></i>
              ) : (
                  <i className="far fa-star" style={{ color: '#ff6060' }}></i>
              )}
          </span>
        ))}
        </div>
      </div>
      

      <div className='bloc-mobile-2'>
        <div className='stars'>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index}>
              {index < card.rating ? (
                  <i className="fas fa-star" style={{ color: '#ff6060' }}></i>
              ) : (
                  <i className="far fa-star" style={{ color: '#ff6060' }}></i>
              )}
          </span>
        ))}
        </div>
        <div className='host'>
          <p>{card.host.name}</p>
          <img src ={card.host.picture} alt={card.host.name} />
        </div>
      </div>

      <div className='bloc-3'>
        <div>        
          <div className='bloc-3-title'>
              <h2>Description</h2>
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-chevron-up"></i>
          </div>
          <div className='bloc-3-description'>
              <p>{card.description}</p>
          </div>
        </div>
        <div>
          <div className='bloc-3-title'>
              <h2>Équipements</h2>
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-chevron-up"></i>
          </div>
          <div className='bloc-3-description'>
              <p>
                {card.equipments.map((equipments, index) => (
              <p key={index} className='tag'>{equipments}</p>
              ))}</p>
          </div>
        </div>
        </div>
      {/* Affichez les autres détails de la carte */}
    </div>
  );
    
  }
  
  export default Card