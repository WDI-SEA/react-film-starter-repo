import Fave from "./Fave";
import Poster from './Poster'

export default function FilmRow(props) {
    
    const handleDetailsClick = film => {
        console.log(film)
    }

    return(
        <div 
            className="film-row" 
            onClick={() => handleDetailsClick(props.film)}
        >
            
            <Poster 
                poster_path = {props.film.poster_path}
                title= {props.film.title}
            />
            <div className="film-summary">
                <h1>{props.film.title}</h1>
                
                {/* <p>{props.film.release_date.split('-')[0]}<p> */}
                {/* <p>{new Date(props.film.release_date).getFullYear()}</p> */}
                <p>{props.film.release_date.substring(0,4)}</p>
            </div>

            <Fave />
        </div> 
    )
}
