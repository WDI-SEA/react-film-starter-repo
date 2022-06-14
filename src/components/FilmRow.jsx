import Poster from '../Poster'
import Fav from './Fav'

// export default class FilmRow extends Component {
//     handleDetailsClick = (film) => {
//         console.log(`Fetching details for ${film.title}`)
//     }
//     render() {
//         return (
//             <div
//                 onClick={(e) => {
//                     e.stopPropagation()
//                     this.handleDetailsClick(this.props.film)
//                 }}
//                 className="film-row"
//             >
//                 <Poster
//                     url={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`}
//                     title={this.props.film.title}
//                 />
//                 <div className="film-summary">
//                     <h1>{this.props.film.title}</h1>
//                     <p>{this.props.film.release_date}</p>
//                 </div>
//                 <Fav />
//             </div>
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
            <Fav
                onFaveToggle={() => { props.onFaveToggle(props.film) }}
                isFave={props.isFave}
            />
        </div>
    )
}

