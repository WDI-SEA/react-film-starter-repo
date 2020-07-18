import React from 'react';

const FilmDetails = (props) => {
     //block of markup for current film
     const filmInfo = (
        <div className="film-detail is-hydrated">
          <figure className="film-backdrop">
            <img src={`https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`} alt={`Screenshot from the film ${props.film.title}`} />
            <h1 className="film-title">{props.film.title}</h1>
          </figure>
      
          <div className="film-meta">
            <h2 className="film-tagline">{props.film.tagline}</h2>
            <p className="film-detail-overview">
              <img src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} className="film-detail-poster" alt={props.film.title} />
              {props.film.overview}
            </p>
          </div>
        </div>
      )
        //blick of markup for no film
        const emptyInfo = (
            <div className="film-detail">
              <p>
                <i className="material-icons">subscriptions</i>
                <span>No film selected</span>
              </p>
            </div>
          )
        //ternary statement to determine what will render in details
        let details = props.film.id ? filmInfo : emptyInfo;
    return (
       
        <div>
            <div className="film-details">
                <h1 className="section-title">DETAILS</h1>
                {details}

            </div>
        </div>
    );
}

export default FilmDetails;