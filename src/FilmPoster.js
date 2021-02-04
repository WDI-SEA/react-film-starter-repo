import React, { Component } from 'react'
import './App.css'

class FilmPoster extends Component {
    render() {
        return (
            <img width='500px' src={`https://image.tmdb.org/t/p/w780/${this.props.path}`} alt={`Movie poster for ${this.props.title}`} />
        )
    }
}

export default FilmPoster