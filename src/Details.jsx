export default function Details(props) {
  const inputReview = (
    <div className="reviews">
    <label htmlFor="user-review">Review this film:</label>
    <textarea
      id="user-review"
      value={props.review}
      onChange={props.handleInputChange}
    />

    <button
      onClick={props.handleReviewPost}
    >
      Post
    </button>
  </div>
  )

  const displayReview = (
    <div>
      <h3>My Review:</h3>

      <p>{props.film.review}</p>
    </div>
  )

  let review = props.film.review ? displayReview : inputReview


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
        <p>{props.isFave ? 'Favorited ⭐' : ''}</p>
        {review}
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

  let details = props.film.id ? filmInfo : emptyInfo

  return (
    <div className='film-details'>
      <h1 className='section-title'>DETAILS</h1>
      {details}
    </div>
  )
}