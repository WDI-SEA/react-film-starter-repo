import React, { Component } from 'react'
import FilmPoster from './FilmPoster'

class FilmRow extends Component{
    render(){
        let releaseDate = this.props.film.release_date;
        releaseDate = releaseDate.split('-');
        releaseDate.splice(1,2)
        return(
            <div className="film-row">
                <FilmPoster poster={this.props.film.poster_path} title={this.props.film.title} />


                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{releaseDate}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow