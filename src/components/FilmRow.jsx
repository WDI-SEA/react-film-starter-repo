import Poster from "../Poster"
import Fav from "./Fav"

const FilmRow = ({ film, onFaveToggle, isFave, onDetailsClick }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        onDetailsClick(film)
      }}
      className="film-row"
    >
      <Poster
        url={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}
        title={film.title}
      />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{film.release_date}</p>
      </div>
      <Fav onFaveToggle={() => onFaveToggle(film)} isFave={isFave} />
    </div>
  )
}

export default FilmRow
