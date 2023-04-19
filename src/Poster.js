import React, { Component } from "react";

export default class Poster extends Component {
    render() {
        const {film} = this.props
        const posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`

        return <img src={posterUrl} alt={film.title}/>
    }
}