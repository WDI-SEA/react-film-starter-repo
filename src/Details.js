import './App.css';

function Details(props) {
    const filmInfo = (
        <div className="film-detail is-hydrated">
          <figure className="film-backdrop">
            <img src={`https://image.tmdb.org/t/p/w1280/${props.currentFilm.backdrop_path}`} alt={`Screenshot from the film ${props.currentFilm.title}`} />
            <h1 className="film-title">{props.currentFilm.title}</h1>
          </figure>
      
          <div className="film-meta">
            <h2 className="film-tagline">{props.currentFilm.tagline}</h2>
            <p className="film-detail-overview">
              <img src={`https://image.tmdb.org/t/p/w780/${props.currentFilm.poster_path}`} className="film-detail-poster" alt={props.currentFilm.title} />
              {props.currentFilm.overview}
              <p>Details and Pictures Provided by: <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" style= {{width: "5vw", height: "5vh"}} alt="TMDB Logo"></img></p>
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
      let details = props.currentFilm.id ? filmInfo : emptyInfo
    return (
        <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
           
            {details}
        </div>
    )
}

export default Details