import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow(props) {
  const releaseDate = new Date(props.film.release_date)
  const year = releaseDate.getFullYear()

  return (
    <div className="film-row" onClick={
      () => props.handleDetailsClick(props.film)
    }>
      <Poster posterPath={props.film.poster_path} alt={props.film.title} />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{year}</p>
      </div>
      <Fave
        onFaveToggle={() => props.handleFaveToggle(props.film)}
        isFave={props.isFave}
      />
    </div>
  )
}
