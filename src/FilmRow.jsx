import React, { Component } from 'react';
import FilmPoster from './FilmPoster.jsx';
import Fave from './Fave.jsx';

class FilmRow extends Component {
    constructor() {
        super();
        this.handleDetailsClick = (film) => {
            console.log(`Fetching detail for ${film.title}`);
        }
    }
    render() {
        return (
            <div 
                className="film-row"
                onClick={() => this.handleDetailsClick(this.props.film)}
            >
                <FilmPoster film={this.props.film} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.slice(0,4)}</p>
                </div>
                <Fave />
            </div>
        );
    }
}

export default FilmRow;