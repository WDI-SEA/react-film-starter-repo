import React, {Component} from 'react'

class FilmRow extends Component{
    render(){
        const date = new Date (this.props.film.release_date).getFullYear()
        // const releaseDate = date.getFullYear()

        return (
            <div className="film-row">
                <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt="{this.props.film.title}" />

                    <div className="film-summary">
                        <h1>{this.props.film.title}</h1>
                        <p>{date}</p>
                    </div>
            </div>
        )
    }
}

export default FilmRow