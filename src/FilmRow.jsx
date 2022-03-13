import Fave from './Fave';
import Poster from './Poster';
import './App.css';


function FilmRow(props) {


  return ( 
    <div onClick={()=>{props.handleDetailsClick(props.WholeFilm)}} className="film-row">
    <div>
      <Poster
        url={
          'https://image.tmdb.org/t/p/w780/' +
          props.WholeFilm.poster_path
        }
      />
    </div>
    <div className="film-summary">
      <h1>{props.WholeFilm.title}</h1>
      <h1 className="subtitle">
        {props.WholeFilm.release_date.split('-')[0]}
      </h1>
    </div>
    <Fave isFave={props.isFave}  onFaveToggle={()=>{props.onFaveToggle(props.WholeFilm)}}/>
  </div>
   );
}

export default FilmRow;



// class FilmRow extends Component {
//   state = {};

//     handleDetailsClick=(film)=>{

//         console.log(`fetching details for ${film}`)
//     }


//   render() {
//     return (
//       <div onClick={()=>{this.handleDetailsClick(this.props.WholeFilm.title)}} className="film-row">
//         <div>
//           <Poster
//             url={
//               'https://image.tmdb.org/t/p/w780/' +
//               this.props.WholeFilm.poster_path
//             }
//           />
//         </div>
//         <div className="film-summary">
//           <h1>{this.props.WholeFilm.title}</h1>
//           <h1 className="subtitle">
//             {this.props.WholeFilm.release_date.split('-')[0]}
//           </h1>
//         </div>
//         <Fave />
//       </div>
//     );
//   }
// }

// export default FilmRow;
