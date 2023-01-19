import Fave from "./Fave"
import Poster from './Poster'

export default function FilmRow (props) {

    return (
        <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>

        <Poster
            url={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} alt={props.film.title}
        />
            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{props.film.release_date.substring(0, 4)}</p>
            </div>
                <Fave
                handleFaveToggle={ () => {props.handleFaveToggle(props.film)}}
                isFave={props.isFave}
                />
        </div>
    );
}