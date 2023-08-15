import '../../styles/home.sass'
import logements from '../../logements.json'
import see from '../../assets/see.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
      <div>
        <div className='title'>
          <img src={see} alt="paysage bord de mer" />
          <h1>Chez vous, <br />partout et ailleurs</h1>
        </div>
        <div className='cards-container'>
          {logements.map(logement => (
            <Link to={`/article/${logement.id}`} key={logement.id}>
            <article key ={logement.id}>
              <h2>{logement.title}</h2>
              <img src={logement.cover} alt={logement.title} />
            </article>
            </Link>
          ))}
        </div>
      </div>
    )
  }
  
  export default Home