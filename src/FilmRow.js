import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {
    constructor(props) {
        super(props)
        this.handleDetailsClick = this.handleDetailsClick.bind(this)
    }
    handleDetailsClick(film) {
        console.log(`Fetiching details for: ${film}`)
    }
    render() {
        const fullyear = this.props.year.split("-", 1)
        return (
        <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
          <FilmPoster poster={this.props.poster}/>
          <div className="film-summary">
            <h1>{this.props.film}</h1>
            <p>{fullyear}</p>
          </div>
          <Fave onFaveToggle={() => { this.props.onFaveToggle(this.props.film)}} isFave={this.props.isFave}/>
        </div>
        );
    }
}

export default FilmRow;