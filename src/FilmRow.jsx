// import React, { Component } from 'react'
import Fave from './Fave'
import { useState } from 'react'
// import Poster from './Poster'


export default function FilmRow(props) {

    const [isFave, setIsFave] = useState(false)

    // const handleDetailsClick = (film) => {
    //     console.log('Fetching details for', film.title)
    // }

    return (
        <div className='film-row' onClick={() => props.handleDetailsClick(props.film)}>
            <img src={'https://image.tmdb.org/t/p/w780/'+ props.film.poster_path} alt={props.film.title} />

            <div className="film-summary">
                <h1>Title: {props.film.title}</h1>
                <p>Year: {props.film.release_date.split('-')[0]}</p>
            </div>

            <Fave
            onFaveToggle={() => {props.onFaveToggle(props.film)}}
            isFave={props.isFave}
            setIsFave={setIsFave}
            />
        </div>        
    )
}




// export default class FilmRow extends Component {

    // handleDetailsClick = (film) => {
    //     console.log('Fetching details for', film.title)
    // }

//     render() {
//         return (
//             <div className='film-row' onClick={() => this.handleDetailsClick(this.props.film)}>
//                 <img src={'https://image.tmdb.org/t/p/w780/'+ this.props.film.poster_path} alt={this.props.film.title} />

//                 <div className="film-summary">
//                     <h1>Title: {this.props.film.title}</h1>
//                     <p>Year: {this.props.film.release_date.split('-')[0]}</p>
//                 </div>

//                 <Fave />
//             </div>
//         )
//     }
// }