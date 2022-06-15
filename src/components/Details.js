import React, { Component } from "react";

// export default class Details extends Component {
//   render() {
//     return (
//       <>
//         <div className="film-details">
//           <h1 className="section-title">DETAILS</h1>
//         </div>
//         ;
//       </>
//     );
//   }
// }

const Details = ({ film }) => {
  const filmInfo = (
    <div className="film-detail is-hydrated">
      <figure className="film-backdrop">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`}
          alt={`Screenshot from the film ${film.title}`}
        />
        <h1 className="film-title">{film.title}</h1>
      </figure>

      <div className="film-meta">
        <h2 className="film-tagline">{film.tagline}</h2>
        <p className="film-detail-overview">
          <img
            src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}
            className="film-detail-poster"
            alt={film.title}
          />
          {film.overview}
        </p>
      </div>
    </div>
  );

  const emptyInfo = (
    <div className="film-detail">
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
    </div>
  );

  let details = film.id ? filmInfo : emptyInfo;

  return (
    <div className="film-details">
      <h1 className="section-title">Details</h1>
      {details}
    </div>
  );
};

export default Details;
