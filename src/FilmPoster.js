import React, { Component } from 'react'

let divStyle = {minWidth: '10vw'}

class FilmPoster extends Component {
    render() {
        return (
            <img className="film-poster" style={divStyle} src={`https://image.tmdb.org/t/p/w780/${this.props.path}`} alt={`Movie poster for ${this.props.title}`} />
        )
    }
}

export default FilmPoster