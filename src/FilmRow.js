import { Component } from "react"
import Fave
 from "./Fave"
export default class FilmRow extends Component {
    state = {
        
    }
    handleDetailsClick = (film) => {
        console.log(`fetching details for ${film}`)
    }
    render() {
        return (
            <div className="film-row" onClick={()=>this.handleDetailsClick(this.props.film.title)}>
                <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt="" />

                <div className="film-summary">
                    <Fave />
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date}</p>
                </div>
            </div>
        )
    }
}
