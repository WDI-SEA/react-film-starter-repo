import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {

        const altText = `Movie poster for ${this.props.film.title}`

        return (
            <div className="film-row">
                <img src={this.props.posterImg} alt={altText} />
            </div>
        );
    }
}

export default FilmPoster;