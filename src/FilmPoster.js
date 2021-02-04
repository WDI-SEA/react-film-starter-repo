import React, { Component } from 'react'

class FilmPoster extends Component {
    render() {
        return(
            <div>
                {/* <img src={this.props.poster}/> */}
                <img src={`https://image.tmdb.org/t/p/w780/${this.props.poster}`} />
            </div>
        )
    }
}

export default FilmPoster