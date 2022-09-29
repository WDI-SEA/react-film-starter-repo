import Poster from "./Poster";
import Fave from "./Fave";

export default function FilmRow(props) {
    const handleDetailsClick = film => {
        console.log(`info for ${film.title}`)
    }
    return (
        <div className="film-row" onClick={() => handleDetailsClick(props.film)}>
            <Poster 
                url={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} 
                alt={`${props.film.title} poster`} 
            />
            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{props.film.release_date.split("-")[0]}</p>
            </div>
            <Fave onFaveToggle={() => props.onFaveToggle(props.film)} isFave={props.isFave} />
        </div>
    );
}

