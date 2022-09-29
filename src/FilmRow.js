import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow(props) {
    const date = new Date(props.film.release_date)
    return (
        <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
            <Poster
                path={props.film.poster_path}
                title={props.film.title}
            />

            <div className="film-summary">
                <Fave 
                    onFaveToggle={() => {props.onFaveToggle(props.film)}}
                    isFave={props.isFave}
                />
                <h1>{props.film.title}</h1>
                <p>{date.getFullYear()}</p>
            </div>
        </div>
    )

}