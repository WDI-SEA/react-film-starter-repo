export default function Post(props)  {
      return (
        <img 
        src={`https://image.tmdb.org/t/p/w780/${props.poster_path}`} 
        alt={`${props.title}`} 
        />  
      );
    }
