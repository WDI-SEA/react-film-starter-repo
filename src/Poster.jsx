export default function Poster (props) {
    const { url, title } = props;
    return (
        <img 
            src={`https://image.tmdb.org/t/p/w780/${url}`}
            alt={`${title}'s theatrical release poster.`}
        />
    )
}
