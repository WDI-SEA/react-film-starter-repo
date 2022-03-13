import Poster from './Poster';
import Fave from './Fave';

function FilmRow(props) {
    return (
        <div className='film-row' onClick={() => {props.handleDetailsClick(props.film)}}>
            <Poster poster={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} alt={`${props.film.title} Poster`}/>
            <div className="film-summary">
                <Fave onFaveToggle={()=>{props.onFaveToggle(props.film)}} isFave={props.isFave}/>
                <h1>{props.film.title}</h1>
                <p>{props.film.release_date.substring(0,4)}</p>
          </div>
        </div>
        
    )
}

export default FilmRow;
// class FilmRow extends Component {
//     handleDetailsClick = (film) => {
//         console.log("Fetching details for " + this.props.film.title)
//     }

//     render() { 
//         return (
//             <div className="film-row" onClick={this.handleDetailsClick}>
//                 <Poster poster={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt={`${this.props.film.title} Poster`}/>

//                 <div className="film-summary">
//                     <Fave />
//                     <h1>{this.props.film.title}</h1>
//                     <p>{this.props.film.release_date.substring(0,4)}</p>
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default FilmRow;