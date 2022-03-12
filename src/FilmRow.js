import Fave from "./Fave"
export default function FilmRow (props) {
    const handleDetailsClick = (film) => {
        console.log(`fetching details for ${film}`)
    }
        return (
            <div className="film-row" onClick={()=>handleDetailsClick(props.film.title)}>
                <img src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} alt="" />

                <div className="film-summary">
                    <Fave 
                        onFaveToggle={()=>{ props.onFaveToggle(props.film)}}
                        isFave={props.isFave}
                    />
                    <h1>{props.film.title}</h1>
                    <p>{props.film.release_date}</p>
                </div>
            </div>
        )
}
