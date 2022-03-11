import React, { Component } from 'react';
import Poster from './Poster'
import Fave from './Fave'

class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log('Fetching details for' + this.props.film.title)
    }

    render() { 
        const poster = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`

        return (
            <>
                <div onClick={this.handleDetailsClick} className="film-row">
                    <Poster url={poster} title={this.props.film.title} />
                    <div className="film-summary">
                        <h1>{this.props.film.title}</h1>
                        <p>{this.props.film.release_date.substring(0,4)}</p>
                    </div>
                    <Fave />
                </div>
            </>
        );
    }
}
 
export default FilmRow;