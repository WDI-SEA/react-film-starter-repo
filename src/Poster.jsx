// import React, { Component } from 'react';

// class Poster extends Component {
//     render() { 
//         let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.poster_path}`
//         return (
//             <img src={posterUrl} alt="" />
//         );
//     }
// }
 
// export default Poster;

// refactor to functional
export default function Poster({imgUrl, alt}) {
    return (
        <>
            <img src={imgUrl} alt={alt} />
        </>
    )
}