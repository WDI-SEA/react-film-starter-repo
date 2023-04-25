import Poster from "./Poster";
import Fave from "./Fave"

export default function FilmRow (props) {

    const film = props.film
    const posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`
    const year = new Date (film.release_date).getFullYear()

    return(
        <div className="film-row" onClick={()=>props.handleDetailsClick(film)}>
            <Poster 
                film = {film}
            />

            <div className="film-summary">
                <h1>{film.title}</h1>
                <p>{year}</p>
            </div>
            <Fave 
                onFaveToggle={() => { props.onFaveToggle(film)}}
                isFave={props.isFave}
            />
        </div>
    )
}