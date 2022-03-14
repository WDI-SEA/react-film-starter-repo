import Poster from './Poster';
import Fave from './Fave';

export default function FilmRow({ film, onFaveToggle, isFave, handleDetailsClick }) {

    let imagePath = `https://image.tmdb.org/t/p/w780/${film.poster_path}`

    return(
        <div className="film-row">
            <Poster imgUrl={imagePath} alt={`Movie poster for ${film.title}`}/>
             
            <div onClick={()=>handleDetailsClick(film)} className="film-summary">
                <Fave 
                    onFaveToggle = {() => { onFaveToggle(film) }}
                    isFave = {isFave}
                />
                <h1>Title: {film.title}</h1>
                <p>Year: {film.release_date.substring(0,4)}</p>
            </div>
        </div>
    )
}