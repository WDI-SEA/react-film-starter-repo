// import React, { Component } from 'react'

// export default class Poster extends Component {
//     render() {
//         return(
//             <img src={this.props.posterSrc} alt={`poster ${this.props.altTag}`} />
//         )
//     }
// }










import React, { Component } from 'react';

function FilmPoster () {

    return (
      <img src={props.poster_path}
          alt={`Poster of the film ${props.title}`}
      />
    );
  }


export default FilmPoster;
