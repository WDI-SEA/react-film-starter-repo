import React, { Component } from 'react'

class FilmPoster extends Component {
    render(){
        console.log(this.props, "poster url")
        return (
            <img src={`https://image.tmdb.org/t/p/w780${this.props.image}`} />
        )
    }
}

export default FilmPoster