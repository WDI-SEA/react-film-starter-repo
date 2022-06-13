import Poster from "../Poster"
import Fav from "./Fav"

const FilmRow = ({ film }) => {
  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        handleDetailsClick(film)
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
      <Fav />
    </div>
  )
}

export default FilmRow
