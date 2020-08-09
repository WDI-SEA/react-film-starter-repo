import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {
    render() {
        const fullyear = this.props.year.split("-", 1)
        return (
        <div className="film-row">
          <FilmPoster poster={this.props.poster}/>
          <div className="film-summary">
            <h1>{this.props.film}</h1>
            <p>{fullyear}</p>
          </div>
          <Fave />
        </div>
        );
    }
}

export default FilmRow;