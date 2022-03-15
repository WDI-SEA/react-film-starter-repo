import React from "react";

// FUNCTION IT UP
export default function Poster(props) {
    return (
        <img src={props.poster_path}
        alt={`movie poster ${props.title}`}
        />
    )
}

// import React, { Component } from 'react';


// export default class Poster extends Component {
//     state = {};
//     render() {
//         return (
//             <img src={this.props.url} alt="movie-poster"/>
//         );
//      }
//   }  