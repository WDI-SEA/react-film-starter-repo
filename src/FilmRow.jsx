import Fave from './Fave'
import Poster from './Poster'

export default function FilmRow (props) {

        return (
            <div className='film-row' onClick={() => props.handleDetailsClick(props.film)}>
                <Poster poster_path={props.film.poster_path} title={props.film.title} />

                <div className="film-summary">
                    
                    <h1>Title: {props.film.title}</h1>
                    {/* split - it splited the array, making every componet of that index("123-256-789") a diff component of a "new array" like: newArray=["123", "456", "789"] */}
                    <p>Year: {props.film.release_date.split('-')[0]}</p>
                </div>
                <Fave 
                    onFaveToggle={() => props.onFaveToggle(props.film)}
                    isFave={props.isFave}
                />
            </div>
        )
}


