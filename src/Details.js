import './App.css';

function Details(props) {
    const filmInfo = (
        <div className="film-detail is-hydrated">
          <figure className="film-backdrop">
            <img src={`https://image.tmdb.org/t/p/w1280/${props.films.backdrop_path}`} alt={`Screenshot from the film ${props.films.title}`} />
            <h1 className="film-title">{props.films.title}</h1>
          </figure>
      
          <div className="film-meta">
            <h2 className="film-tagline">{props.films.tagline}</h2>
            <p className="film-detail-overview">
              <img src={`https://image.tmdb.org/t/p/w780/${props.films.poster_path}`} className="film-detail-poster" alt={props.films.title} />
              {props.films.overview}
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
      let details = props.films.id ? filmInfo : emptyInfo
    return (
        <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            {details}
        </div>
    )
}

export default Details