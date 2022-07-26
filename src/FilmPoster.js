import React, { Component } from 'react'
 

class FilmPoster extends Component {
    render() {
        return (
            <>
                <img src={this.props.posterUrl} alt={this.props.alt} />
            </>
    )}
}

export default FilmPoster