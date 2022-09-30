

function Details (props) {
    const filmInfo = (
      <div className="film-details">
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
      
    const emptyInfo = (
        <div className="film-detail">
          <p>
            <i className="material-icons">subscriptions</i>
            <span>No film selected</span>
          </p>
        </div>
      )    

    const favesCheck = (
      <div className="film-meta">
          <p>
          <i className="material-icons">subscriptions</i>
          <span>This movie is in your Faves!</span>
          </p>
        </div>
    )

    let details = props.film.id ? filmInfo : emptyInfo
    let favesDisplay = props.isFave ? favesCheck : null
    

    return (
        <div className="film-detail is-hydrated">
        <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        {favesDisplay}
        {details}
        <h3>Reviews:</h3>
        {props.reviews.map((review, id) => {
          return (
            <div key={`review${id}`}>            
            <p>{review.author} ({review.created_at})</p>
            <p>{review.content}</p>
            </div>
          )
        })}
        </div>
        </div>
    )
 
}

export default Details;