import React from 'react';

// FUNCTION IT UP
export default function Details(props) {
// TASK 5 : ADDING FILM DETAILS

// render the film  details from the current state
// store the mark up foreach of the scenarios in their own constant variable

    // POPULATED FILM SELECTED SCENARIO
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

    //   STEP 1 of TASK 5--NO FILM SELECTED SCENARIO 
      const emptyInfo = (
        <div className="film-detail">
          <p>
            <i className="material-icons">subscriptions</i>
            <span>No film selected</span>
          </p>
        </div>
      ) 
    //   STEP 2 OF TASK 5 -- conditionally render the current film: asisg depending on whther or not there's afilm object passed in thorugh the props
    // create a new var to hold on to DOM tree
    let details = props.film.id ? filmInfo : emptyInfo
    
    return (
        <div className="film-details">
          <h1 className="section-title">Details</h1>
          {details}
        </div>
      )
    }

