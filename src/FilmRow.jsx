import React, { Component } from 'react';
import Fave from './Fave';
import Poster from './Poster';

class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log(`fetching details for ${film}`)
    }

    render() {
        const posterURL = 'https://image.tmdb.org/t/p/w780/' + [this.props.films.poster_path]
        const date = new Date(this.props.films.release_date)
        const year = date.getFullYear()
        // const newDate = this.props.films.release_date.split("-")
        return (
            <>
                <div className="film-row" onClick={() => this.handleDetailsClick(this.props.films.title)}>
                    <Poster
                        alt={this.props.films.title}
                        url={posterURL}
                    />

                    <div className="film-summary">
                        <Fave />
                        <h1>{this.props.films.title}</h1>
                        <p>{year}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default FilmRow;