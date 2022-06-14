
import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow (props) {
   
        const posterUrl = `https://image.tmdb.org/t/p/w780${props.film.poster_path}`
        const year = new Date(props.film.release_date)
        return (
            <div className="film-row" onClick={()=>{ props.handleDetailsClick(props.film)}}>
                <Poster url={posterUrl} title={props.film.title} />

                <div className="film-summary">
                    <Fave 
                    onFaveToggle={()=>{ props.onFaveToggle(props.film)}}
                    isFave={props.isFave}/>
                    <h1>{props.film.title}</h1>
                    <p>{year.getFullYear()}</p>
                    </div>
            </div>
        )
}