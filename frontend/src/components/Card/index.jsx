import logements from '../../logements.json'
import '../../styles/card.sass'
import { useParams } from 'react-router-dom'; // hook permettant d'obtenir les paramètres d'URL
import '../../styles/error.sass'
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'


function  Card() {
  const { id } = useParams(); // -> si l'URL est "/article/123", id sera égal à "123".
  const card = logements.find(logement => logement.id === id); // .find() pour rechercher l'article correspondant dans le tableau logements en utilisant l'ID que nous avons extrait des paramètres d'URL. 

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); 
  const handleDescriptionToggle = () => { 
    setIsDescriptionOpen(!isDescriptionOpen); 
  }

  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false); 
  const handleEquipmentsToggle = () => { 
    setIsEquipmentsOpen(!isEquipmentsOpen); 
  }

  // ici index permettant le défilement
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const nextPicture = () => {
    setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % card.pictures.length);
  };

  const prevPicture = () => {
    setCurrentPictureIndex(
      (prevIndex) => (prevIndex - 1 + card.pictures.length) % card.pictures.length
    );
  };

  //ci-dessous compteur des images
  const pictureCount = card.pictures.length;
  const currentPictureNumber = currentPictureIndex + 1;



  if (!card) {
    return (
       <Navigate to="/404" />
    )
  }

  return (
    <div className='card'>
      <div className='carousel'>

        <div className='carousel__button'>
          {pictureCount > 1 && (
            <>
            <i class="fas fa-chevron-left" onClick={prevPicture}></i>
            </>
          )}
        </div>

        <div className='carousel__track-container'>
          <div className='carousel__track'>
              {card.pictures.map((image, index) => (
                <img 
                className={`carousel__slide ${index === currentPictureIndex ? 'active' : 'hidden'}`}
                style={{
                  transform: `translateX(${(index - currentPictureIndex) * 100}%)`,
                }}
                key={index} 
                src={image} 
                alt={card.title}></img>
              ))}
          </div>
        </div> 

        <div className='carousel__button'>
          {pictureCount > 1 && (
            <>
            <i class="fas fa-chevron-right fa-lg" onClick={nextPicture}></i>
            </>
          )}
        </div>
        
        <div className='carousel__button'>
          {pictureCount > 1 && (
            <>
            <p className="image-counter">{`${currentPictureNumber}/${pictureCount}`}</p>
            </>
          )}
        </div>

      </div>

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
        <div className='bloc-3__card'>        
          <div className='bloc-3__title'>
              <h2>Description</h2>
              <i className={`fas fa-chevron-up ${isDescriptionOpen ? 'rotate' : 'rotate2'}`} onClick={handleDescriptionToggle}></i>
          </div>
          <div className={`box ${isDescriptionOpen ? '' : 'close-box'}`}>
          <div className={`bloc-3__description ${isDescriptionOpen ? 'open' : 'close'}`}>
              <p>{card.description}</p>
          </div>
          </div>
        </div>
        <div className='bloc-3__card'>
          <div className='bloc-3__title'>
              <h2>Équipements</h2>
              <i className={`fas fa-chevron-up ${isEquipmentsOpen ? 'rotate' : 'rotate2'}`} onClick={handleEquipmentsToggle}></i>
          </div>
          <div className={`box ${isEquipmentsOpen ? '' : 'close-box'}`}>
            <div className={`bloc-3__description ${isEquipmentsOpen ? 'open' : 'close'}`}>
                <p>
                  {card.equipments.map((equipments, index) => (
                <p key={index} className='tag'>{equipments}</p>
                ))}</p>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
    
  }
  
  export default Card