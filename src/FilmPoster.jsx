import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {
        return (
            <img 
                src={`http://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`}
                alt={`Poster for ${this.props.film.title}`}
                
            />
        );
    }
}

export default FilmPoster;