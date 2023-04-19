import React, { Component } from 'react'

export default class Poster extends Component {
    render() {
        const posterUrl = this.props.url
        const title = this.props.title
        return (
            <img src={`https://image.tmdb.org/t/p/w780/${posterUrl}`} alt={`Poster for ${title}`} />
        )
    }
}