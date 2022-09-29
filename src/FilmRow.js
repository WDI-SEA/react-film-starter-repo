import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow(props) {

    return (
        <div
            className='film-row'
            onClick={() => props.handleDetailsClick(props.film)}
        >
            <Poster
                posterPath={props.film.poster_path}
                title={props.film.title}
            />

            <div className='film-summary'>
                <h1>{props.film.title}</h1>
                <p>{props.film.release_date.split('-', 1)}</p>
            </div>

            <Fave
                onFaveToggle={() => props.onFaveToggle(props.film)}
                isFave={props.isFave}    
            />
        </div>
    )
}