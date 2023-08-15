import '../../styles/error.sass'

function Error() {
    return (
        <div className="error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas</h2>
            <p><a href="/">Retourner sur la page d'accueil</a></p>
        </div>
    )
}
 
export default Error