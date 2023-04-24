import Poster from "./Poster";
import Fave from "./Fave";

export default function FilmRow(props) {

  const filmYear = props.year.split("-");

  return (
    <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
      <Poster url={props.posterUrl} alt={""} />

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{filmYear[0]}</p>
      </div>
      <Fave
        isFave={props.isFave}
        onFaveToggle={() => props.onFaveToggle(props.film)}
      />
    </div>
  );
}
