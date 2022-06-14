
import Poster from './Poster';
import Fave from './Fave';


function FilmRow (props) {
    const handleDetailsClick = (film) => {
        console.log("Fetching details for", film.title)
      
    }
    
        return (
            
            <div className="film-row"
                 onClick={()=>handleDetailsClick(props.film)}>

                <Poster url = {`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} alt={`poster of ${props.film.title}`} />

                <div className="film-summary">
                    <h1>{props.film.title}</h1>
                    <p>{props.film.release_date.split("", 4)}</p>
                </div>
                <Fave 
                onFaveToggle={()=>{props.onFaveToggle(props.film)}}
                isFave={props.isFave}
                />
            </div>

        )
    
}

export default FilmRow;