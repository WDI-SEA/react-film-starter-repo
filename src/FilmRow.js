import Fave from './Fave'
import Poster from './Poster'

function FilmRow(props) {

    let handleDetailsClick = (film) => {
        console.log('fetch details', film.title)
    }

    return( 
        <div className="film-row" onClick={() => handleDetailsClick(props.film)}>
            <Poster 
                poster_path={props.film.poster_path}
                title={props.film.title}
            />

            <div className="film-summary">
                <h1>Title: {props.film.title}</h1>
                <p>Year: {props.film.release_date.split('-')[0]}</p>
            </div>

            <Fave 

            />
        </div>
    )
    
}

export default FilmRow