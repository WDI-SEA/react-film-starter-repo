import React from 'react';

const FilmDetails = (props) => {

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
      

    // block of markup for current film
    // const filmInfo = (
    //     <div>
    //         <h1>The current film is {props.film.title}</h1>
    //     </div>
    // )
    // block of markup for no film
    const emptyInfo = (
        <div>
            <h1>No film selected 🥺</h1>
        </div>
    )

    // ternary statement to determine what will render in details
    let details = props.film.id ? filmInfo : emptyInfo;
    
    return (
    <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        {details}
    </div>
    );
}

export default FilmDetails;