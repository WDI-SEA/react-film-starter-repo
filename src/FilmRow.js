import Poster from './Poster'
import Fave from './Fave';

function FilmRow (props) {
  
    const date = new Date(props.film.release_date)
    return (
        <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
        <Poster 
        url={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`}
        alt={`${props.film.title}'s movie poster`}
        />

        <div className="film-summary">
        <Fave 
        onFaveToggle={() => props.onFaveToggle(props.film)}
        isFave={props.isFave}
        />
        <h1>{props.film.title}</h1>
        <p>{date.getFullYear()}</p>
        </div>
        </div>


    )
}

export default FilmRow;