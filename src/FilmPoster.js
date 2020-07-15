import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {

        let posterUrl = "https://image.tmdb.org/t/p/w780" + this.props.poster_path
        let altTag = `${this.props.title} movie poster.`

        return (
            <div>
                <img src={posterUrl} alt={altTag} />
            </div>
        );
    }
}

export default FilmPoster;