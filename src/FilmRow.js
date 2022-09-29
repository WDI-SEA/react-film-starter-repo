import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow(props) {

    return (
        <div className='film-row'
            onClick={() => props.handleDetailsClick(props.film)}
        >
            <Poster 
                poster_path={props.film.poster_path}
                title={props.film.title}
            />

            <div className='film-summary'>
                <h1>{props.film.title}</h1>

                {/* <p>{props.film.release_date.split('-')[0]}</p> */}
                {/* <p>{new Date(this.props.film.release_date).getFullYear()}</p> */}
                <p>{props.film.release_date.substring(0, 4)}</p>
            </div>

            <Fave 
                onFaveToggle={() => props.onFaveToggle(props.film)}
                isFave={props.isFave}
            />
        </div>
    )
}