// import React, { Component } from 'react';

// class Details extends Component {
//     render() { 
//         return (
//             <>
//                 <div className="film-details">
//                     <h1 className="section-title">DETAILS</h1>
//                 </div>
//             </>
//         );
//     }
// }
 
// export default Details;





// functional component

export default function Details({current}) {
    const filmInfo = (
        <div className="film-detail is-hydrated">
            <figure className="film-backdrop">
                <img src={`https://image.tmdb.org/t/p/w1280/${current.backdrop_path}`} alt={`Screenshot from the film ${current.title}`} />
                <h1 className="film-title">{current.title}</h1>
            </figure>
      
            <div className="film-meta">
                <h2 className="film-tagline">{current.tagline}</h2>
                <p className="film-detail-overview">
                    <img src={`https://image.tmdb.org/t/p/w780/${current.poster_path}`} className="film-detail-poster" alt={current.title} />
                    {current.overview}
                </p>
            </div>
        </div>
    )
      
    const emptyInfo = (
        <div className="film-detail">
            <p>
                <i className="material-icons">subscriptions</i>
                <span>No film selected</span>
            </p>
        </div>
    )

    let details = current.id ? filmInfo : emptyInfo

    return (
        <>
            <div className="film-details">
                <h1 className="section-title">DETAILS</h1>
                {details}
            </div>
        </>
    )
}