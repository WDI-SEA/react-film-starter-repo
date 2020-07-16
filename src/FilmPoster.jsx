import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {
        return (
             <img src={this.props.poster_path} alt={`Poster for ${this.props.title}`}/>
        );
    }
}

export default FilmPoster;