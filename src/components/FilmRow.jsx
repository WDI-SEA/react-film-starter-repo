// import React, { Component } from 'react';
import Poster from './Poster'
import Fave from './Fave'

// class FilmRow extends Component {

//     handleDetailsClick = (film) => {
//       console.log('gettin them DEETS for', this.props.film.title)
//     }

//     render() {
//         const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
//         const year = new Date(this.props.film.release_date)
//         return (
//             <>
//             <div className="film-row" onClick={this.handleDetailsClick}>
//             <Poster url={posterUrl} title={this.props.film.title}/>
          
//             <div className="film-summary">
//               <h1>{this.props.film.title}</h1>
//               <h3>{year.getFullYear()}</h3>
//             </div>

//             <Fave />

//           </div></>
//         )
//     }
// }

const FilmRow = (props) => {
  //     const handleDetailsClick = (film) => {
  //         console.log(`details click for ${film.title}`)
  //     }
    return (
        <div onClick={(e) => {
              e.stopPropagation()
              // handleDetailsClick(props.film)
              props.handleDetailsClick(props.film) 
          }}
              className="film-row" >

          <Poster url={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`}
                  title={props.film.title} />

          <div className="film-summary">
              <h1>{props.film.title}</h1>
              <p>{props.film.release_date}</p>
          </div>
              <Fave onFaveToggle={() => { props.onFaveToggle(props.film) }}
                   isFave={props.isFave} />
        </div>
      )
}

export default FilmRow