import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow(props){

        return(
            <div 
                className="film-row" 
                onClick={() => props.handleDetailsClick(props.film)}
            >
                <Poster url={props.film.poster_path}/>

                <div className="film-summary">
                    <Fave 
                        onFaveToggle={() => {props.onFaveToggle(props.film)}}
                        isFave={props.isFave}
                    />
                    <h1>{props.film.title}</h1>
                    <p>{props.film.release_date.split('-')[0]}</p>
                </div>
            </div>
        )
    
}