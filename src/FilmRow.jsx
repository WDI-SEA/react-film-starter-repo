import Poster from "./Poster";
import Fave from "./Fave";

function FilmRow (props){
    
        const date = new Date(props.film.release_date)
        return(
            <div className="film-row" 
                onClick={()=>props.handleDetailsClick(props.film)}
                >
                <Poster
                    poster_path={props.film.poster_path}
                    title={props.film.title}
                />

                <div className="film-summary">
                    <h1 key ={props.key}> {props.film.title} </h1>
                    <p> {date.getFullYear()} </p>
                </div>

                <Fave 
                    onFaveToggle={()=>{props.onFaveToggle(props.film)}}
                    isFave = {props.isFave}
                />
            

            </div> 
                
    
        )
    }
export default FilmRow