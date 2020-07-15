import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log("Fetching details for " + film)
    }
    
    render() {

        return (
            <div onClick = {() => this.handleDetailsClick(this.props.film.title)} className="film-row">
                <FilmPoster poster_path = {this.props.film.poster_path} title={this.props.film.title} />
            <div className="film-summary">
                <h1>{this.props.film.title}</h1>
                <p>{this.props.film.release_date.split("-", 1)}</p>
            </div>
            <Fave />
        </div>
        );
    }
}

export default FilmRow;