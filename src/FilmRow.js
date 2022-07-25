import React, { Component } from 'react';
import Poster from './Poster';

//const posterURL = 'https://image.tmdb.org/t/p/w780/' + {this.props.film.poster_path}

class FilmRow extends Component {
    render() {
        return (
            <div className="film-row">
                <Poster 
                    url={this.props.film.poster_path}
                    title={this.props.film.title}
                />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.substring(0,4)}</p>
                </div>
            </div>
        );
    }
}

export default FilmRow;
