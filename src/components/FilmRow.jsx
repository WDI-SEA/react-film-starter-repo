// import React, { Component } from 'react'
import Poster from '../Poster'
import Fav from './Fav'

export default function FilmRow({film , onFaveToggle, isFave,handleDetailsClick}) {
    
   
    return(
        <>
            <div
                onClick={(e) => {
                    e.stopPropagation()
                    handleDetailsClick(film)
                }}
                className="film-row"
            >
                <Poster
                    url={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}
                    title={film.title}
                />
                <div className="film-summary">
                    <h1>{film.title}</h1>
                    <p>{film.release_date}</p>
                </div>
                <Fav 
                onFaveToggle = {onFaveToggle}
                film = {film}
                isFave = {isFave}
                />
            </div>
        </>
    )
}



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
