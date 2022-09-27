import React, { Component } from 'react'

export default class Poster extends Component {
    render() {
        return (
            <img
                src={`https://image.tmdb.org/t/p/w780/${this.props.posterPath}`}
                alt={`Poster for ${this.props.title}`}
            />
        )
    }
}