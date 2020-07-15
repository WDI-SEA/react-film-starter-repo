import React, { Component } from 'react';

class FilmPoster extends Component {
    render() {
        return (
            <img src={this.props.poster_path} alt={this.props.alt_text}>
            
            </img>
        );
    }
}

export default FilmPoster;