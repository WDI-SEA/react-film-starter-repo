import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {
    render() {
        return (
        <div className="film-row" onClick={() => {this.props.handleDetailsClick(this.props.film)}}>
          <FilmPoster poster={this.props.poster}/>
          <div className="film-summary">
            <h1>{this.props.film}</h1>
            <p>{this.props.year}</p>
          </div>
          <Fave onFaveToggle={() => { this.props.onFaveToggle(this.props.film)}} isFave={this.props.isFave}/>
        </div>
        );
    }
}

export default FilmRow;