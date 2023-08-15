import logements from '../../logements.json'
import '../../styles/card.sass'
import { useParams } from 'react-router-dom'; // hook permettant d'obtenir les paramètres d'URL


function  Card() {
  const { id } = useParams(); // -> si l'URL est "/article/123", id sera égal à "123".
  const card = logements.find(logement => logement.id === id); // .find() pour rechercher l'article correspondant dans le tableau logements en utilisant l'ID que nous avons extrait des paramètres d'URL. 

  if (!card) {
    return <div>Désolé, l'appartement recherché ne semble plus disponible ...</div>;
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
              <h3>Description</h3>
            </div>
            <div>
              <h3>Équipements</h3>
            </div>
      </div>
      {/* Affichez les autres détails de la carte */}
    </div>
  );
    
  }
  
  export default Card