import Fave from './Fave.jsx';


const FilmRow = ({film, posterUrl, onFaveToggle, faveDisplay, detailsClickHandler, isFave}) => {
  
    let releaseYear= film.release_date.substr(0, film.release_date.indexOf("-"))
    return(
        <div onClick={() => {detailsClickHandler(film)}} className="film-row">
            <img 
                src={`https://image.tmdb.org/t/p/w780/${posterUrl}`} 
                alt="" 
            />
          
            <div className="film-summary">
                <h1>{film.title}</h1>
                <p>{releaseYear}</p>
            </div>
            <Fave 
                onFaveToggle={() => { onFaveToggle(film)}}
                faveDisplay={faveDisplay}
                isFave={isFave}
            />
        </div>       
    )
}
export default FilmRow;