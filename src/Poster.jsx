export default function Poster(props) {
    return (
        <img
            src={`https://image.tmdb.org/t/p/w780/${props.posterPath}`}
            alt={`Poster for ${props.title}`}
        />
    )
}