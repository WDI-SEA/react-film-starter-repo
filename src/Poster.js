// import React, { Component } from "react"

const Poster = props => (
    <img 
        src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`}
        alt={`${props.film.title}'s theatrical release poster.`}
    />
)

export default Poster

// export default class Poster extends Component {
//     render() {
//         return (
//             <img 
//                 src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`}
//                 alt={`${this.props.film.title}'s theatrical release poster.`}
//             />
//         )
//     }
// }