import React, { Component } from 'react' 
import Poster from "./Poster"
import Fave from "./Fave"

class FilmRow extends Component {
    // we want to pass down the filterValue
    // we also want to pass down the handleFilterChange
    render() {
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        const date = new Date (this.props.film.release_date).getFullYear()
        
        return (
            <div className="film-row">
                <Poster posterUrl={posterUrl} alt={this.props.title}/>

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{date}</p>
                </div>

                <Fave />
            </div>
    )}
}

export default FilmRow