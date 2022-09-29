// import React, { Component} from 'react'
import {useState} from 'react'
import Poster from './Poster'
import Fave from './Fave'
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers'

export default function FilmRow(props) {
    

    return(
        <div className="film-row" 
            onClick={()=>props.handleDetailsClick(props.film)}
        >
        <Poster 
            film={props.film}
            posterUrl={props.film.poster_path}
        />

        <div className="film-summary">
            <h1>{props.film.title}</h1>
                <p>{props.film.release_date.split('-')[0]}</p>
        </div>

        <Fave 
            onFaveToggle={() => props.onFaveToggle(props.film)}
            isFave={props.isFave}
        />
    </div>

    )
}



// export default class FilmRow extends Component {
//     handleDetailsClick = film => {
//         console.log('fetching details for:', film.title)
//     }

//     render() {
//         // const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`

//         return (
//             <div className="film-row" key={`film-${this.props.index}`} onClick={()=>this.handleDetailsClick(this.props.film)}>
//                 <Poster 
//                     film={this.props.film}
//                     posterUrl={this.props.film.poster_path}
//                 />

//                 <div className="film-summary">
//                     <h1>{this.props.film.title}</h1>
//                         <p>{this.props.film.release_date.split('-')[0]}</p>
//                 </div>

//                 <Fave />
//             </div>
//         )
//     }
// }