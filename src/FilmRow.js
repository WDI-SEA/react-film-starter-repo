import React, {Component} from 'react'
import Poster from './Poster'
import Fave from './Fave'
// export default class FilmRow extends Component{
//   handleDetailsClick= film=>{
//     console.log(`printing for ${film}`)
//   }
//     render(){
//         return(
//           <div className='film-row' 
//             onClick={()=>this.handleDetailsClick(this.props.film.title)}
//           >
//             <Poster
//               src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} 
//               alt={this.props.film.title}
//             />
//             <div className='film-summary'>
//             <h1>{this.props.film.title}</h1>
//             <p>{this.props.film.release_date.split('-',1)}</p>
//             </div>
//             <Fave/>
//           </div>
//         )
//     }
// }

export default function FilmRow (props){
return(
  <div className='film-row' 
  onClick={()=>props.handleDetailsClick(props.film)}
>
  <Poster
    src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} 
    alt={props.film.title}
  />
  <div className='film-summary'>
  <h1>{props.film.title}</h1>
  <p>{props.film.release_date.split('-',1)}</p>
  </div>
  <Fave onFaveToggle={() =>  props.handleFaveToggle(props.film)} isFave={props.isFave}  /> 
</div>
)
}