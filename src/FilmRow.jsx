import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow(props) {
    // const handleDetailsClick = (film) => {
    //     console.log('Fetching details for', film.title)
    // }
        return(
            <div className="film-row" onClick={props.handleDetailsClick(props.film)}>
                <Poster 
                poster_url={props.poster_url}
                title={props.film.title}/>

                <div className="film-summary">
                    <h1>{props.film.title}</h1>
                    <p>{props.film.release_date.split('-')[0]}</p>
                    {/* <p>{props.film.release_date.substring(0,4)}</p> */}
                    <Fave 
                    onFaveToggle={() => { props.onFaveToggle(props.film) }} 
                    isFave={props.isFave}/>
                </div>
            </div>
        )
    }