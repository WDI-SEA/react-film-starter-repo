

export default function Poster(props) {
  
        return (
            <img 
                src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`}
                alt={`${props.film.title}'s theatrical release poster.`}
            />
        )
    }
