import React from 'react';

const FilmDetails = (props) => {
    //block of markup for current film
    const filmInfo = (
        <div className="film-detail is-hydrated">
            <figure className="film-backdrop">
            <img src={`https://image.tmdb.org/t/p/w1280/${props.current.backdrop_path}`} alt={`Screenshot from the film ${props.current.title}`} />
            <h1 className="film-title">{props.current.title}</h1>
            </figure>

            <div className="film-meta">
                <h2 className="film-tagline">{props.current.tagline}</h2>
                <p className="film-detail-overview">
                <img src={`https://image.tmdb.org/t/p/w780/${props.current.poster_path}`} className="film-detail-poster" alt={props.current.title} />
                {props.current.overview}
                </p>
            </div>
        </div>
    )

    //block of markup for no film
    const emptyInfo = (
        <div className="film-detail">
            <p>
                <i className="material-icons">subscriptions</i>
                <span>No film selected</span>
            </p>
        </div>
    )

    // ternary statement to determine what will render in details
    // if it is an empty object it will not have an id key
    // in ternary statments you can't pass through an empty object 
    // because theu are truthy 
    let details  = props.current.id ? filmInfo : emptyInfo;

        return (
            <div className="film-details">
                <h1 className="section-title">DETAILS</h1>
                {details}
            </div>
        );
    }



export default FilmDetails;