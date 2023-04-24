import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow(props){

        const {film} = props
        const posterUrl= `https://image.tmdb.org/t/p/w780/${film.poster_path}` 
        const year = new Date (film.release_date).getFullYear() 
        return (
            <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
                <Poster url= {posterUrl} alt={`${film.title} released on ${year}`}
                film={film}/> 
                <div className="film-summary">

                <h1>{film.title}</h1>
                <p>{year}</p>
                </div> 
                <div>
                    <Fave 
                    handleFaveToggle= {()=>props.handleFaveToggle(props.film)}
                    isFave= {props.isFave}
                    
                    />
                </div>
            </div>
        )

}