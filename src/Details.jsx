

function Details(props) {

    const filmInfo = (
        <div className="film-detail is-hydrated">
          <figure className="film-backdrop">
            <img src={`https://image.tmdb.org/t/p/w1280/${props.currentFilms.backdrop_path}`} alt={`Screenshot from the film ${props.currentFilms.title}`} />
            <h1 className="film-title">{props.currentFilms.title}</h1>
          </figure>
      
          <div className="film-meta">
            <h2 className="film-tagline">{props.currentFilms.tagline}</h2>
            <p className="film-detail-overview">
              <img src={`https://image.tmdb.org/t/p/w780/${props.currentFilms.poster_path}`} className="film-detail-poster" alt={props.currentFilms.title} />
              {props.currentFilms.overview}
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
   
        let details = props.currentFilms.id ? filmInfo : emptyInfo

        return (
        
        <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            <div>
            {details}

            </div>
        </div>
    
        )
}
export default Details