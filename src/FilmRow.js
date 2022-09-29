import Poster from "./Poster";
import Fave from "./Fave";

export default function FilmRow(props) {
  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`);
  };

  let date = props.film.release_date.substring(0, 4);
  return (
    <div
      className="film-row"
      onClick={() => {
        handleDetailsClick(`${props.film.title}`);
      }}
    >
      <Poster URL={props.film.poster_path} title={props.film.title} />

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{date}</p>
      </div>
      <Fave />
    </div>
  );
}
