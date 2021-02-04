import React, { Component } from 'react'
import FilmPoster from './FilmPoster'

class FilmRow extends Component{
    render(){
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        return(
            <div>
                <div className="film-row">
                    <FilmPoster poster_path={posterUrl} title={this.props.film.title}/>
                    <h1>{this.props.film.title}</h1>
                </div>
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow