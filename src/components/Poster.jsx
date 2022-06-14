


export default function Poster (props)  {
   
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w780/${props.url}`} alt={`${props.title} movie poster`} />
        </div>
    )

}