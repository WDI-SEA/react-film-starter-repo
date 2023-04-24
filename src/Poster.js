export default function Poster(props) {
    const { film } = props;
    const posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;

    return <img src={posterUrl} alt={film.title}  />;
}
