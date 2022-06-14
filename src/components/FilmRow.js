import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow(props) {
    
    const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`
    const releaseDate = `${props.film.release_date}`
    return (
        <>
            <Poster posterSrc={posterUrl} altTag={props.film.title}/>

            <div 
            className="film-summary"
            onClick={()=>props.handleDetailsClick(props.film)}
            >
                <h1>{props.film.title}</h1>
                <p>{releaseDate.substring(0, 4)}</p>
            </div>
            <Fave 
            onFaveToggle={()=>{props.onFaveToggle(props.film)}}
            isFave={props.isFave}
            />
        </>
)
}


// export default class FilmRow extends Component {

//     handleDetailsClick = (film) => {
//         console.log(`Fetching details for ${film.title}`)
//     }

//     render() {
//         const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
//         const releaseDate = `${this.props.film.release_date}`
//         return (
//             <>
//                 <Poster posterSrc={posterUrl} altTag={this.props.film.title}/>

//                 <div 
//                 className="film-summary"
//                 onClick={() => this.handleDetailsClick(this.props.film)}
//                 >
//                     <h1>{this.props.film.title}</h1>
//                     <p>{releaseDate.substring(0, 4)}</p>
//                 </div>
//                 <Fave />
//             </>
//     )
//   }
// }
