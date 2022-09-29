// import React, { Component } from 'react'
import {useState} from 'react'

export default function Poster(props) {
    return (
        <img 
            src={`https://image.tmdb.org/t/p/w780/${props.poster_path}`} alt={`${props.title}'s movie poster`} 
        />
    )
}


// export default class Poster extends Component {
//     render() {
//         return (
//             <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt={this.props.film.title} />
//         )
//     }
// }