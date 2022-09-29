import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow(props) {

    const handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film}`)
    }

    const date = new Date(props.film.release_date)
    return (
        <div className="film-row" onClick={() => handleDetailsClick(`${props.film.title}`)}>
            <Poster
                path={props.film.poster_path}
                title={props.film.title}
            />

            <div className="film-summary">
                <Fave />
                <h1>{props.film.title}</h1>
                <p>{date.getFullYear()}</p>
            </div>
        </div>
    )

}