import Poster from "./Poster"
import Fave from "./Fave"

export default function FilmRow(props) {

    const { film } = props;
    const year = film.release_date.split('-')

    return (
        <div className="film-row" onClick={() => { props.handleDetailsClick(props.film) }}>
            <Poster url={film.poster_path} title={film.title} />

            <div className='film-summary'>
                <h1>{film.title}</h1>
                <p>{year[0]}</p>
            </div>

            <Fave
                onFaveToggle={() => { props.onFaveToggle(props.film) }}
                isFave={props.isFave}
            />
        </div>
    )
}
