
import Poster from "./Poster";
import Fave from "./Fave";

// export default class FilmRow extends Component{

//     handleDetailsClicked = (film)=>{
        
//     }

//     render(){

//         return(

//         )
//     }
// }

export default function FilmRow(props) {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                props.onDetailsClick(props.film)
            }}
            className="film-row"
        >
            <Poster
                url={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`}
                title={props.film.title}
            />
            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{props.film.release_date}</p>
            </div>
            <Fave
                onFaveToggle={() => { props.onFaveToggle(props.film) }}
                isFave={props.isFave}
            />
        </div>
    )
}