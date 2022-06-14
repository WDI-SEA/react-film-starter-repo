
import Poster from './Poster';
import Fave from './Fave';


function FilmRow(props) {


    return (

        <div className="film-row"
        >

            <Poster url={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} alt={`poster of ${props.film.title}`} />

            <div className="film-summary"
                onClick={() => props.handleDetailsClick(props.film)}
            >
                <h1>{props.film.title}</h1>
                <p>{props.film.release_date.split("", 4)}</p>
            </div>
            <Fave
                onFaveToggle={() => { props.onFaveToggle(props.film) }}
                isFave={props.isFave}
            />
        </div>

    )

}

export default FilmRow;