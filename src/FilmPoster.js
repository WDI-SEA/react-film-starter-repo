import React, { Component } from 'react'

class FilmPoster extends Component {
    render(){
        return(
            <div>
                <img src={this.props.poster_path} alt={this.props.title} />
            </div>
        )
    }
}

export default FilmPoster