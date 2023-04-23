
import Poster from "./Poster"
import Fave from "./Fave"

export default function FilmRow(props) {

//   const  handleDetailsClick = film => {
//         console.log(`fetching details for ${film.title}`)
//     }

        return (
            <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
                <Poster film={props.film} />

                <div className="film-summary">
                    <h1>{props.film.title}</h1>
                    <p>{props.film.release_date.split('-')[0]}</p>
                </div>

                <Fave 
                onFaveToggle={() => {props.onFaveToggle(props.film)}}
                isFave={props.isFave}/>
            </div>
        )
    }
