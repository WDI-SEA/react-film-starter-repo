import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {

        const altText = `Movie poster for ${this.props.film.title}`

        return (
            <img src={this.props.posterImg} alt={altText} />  
        );
    }
}

export default FilmPoster;