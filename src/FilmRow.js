import React, { Component } from 'react';
import FilmPoster from './FilmPoster'

class FilmRow extends Component {
    
    render() {

        return (
            <div className="film-row">
                <FilmPoster poster_path = {this.props.film.poster_path} title={this.props.film.title} />
            <div className="film-summary">
                <h1>{this.props.film.title}</h1>
                <p>{this.props.film.release_date.split("-", 1)}</p>
            </div>
        </div>
        );
    }
}

export default FilmRow;