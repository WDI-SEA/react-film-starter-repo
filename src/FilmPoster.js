import React, { Component } from 'react'

class FilmPoster extends Component {
  render() {
    return(
      <div>
        <img src={`https://image.tmdb.org/t/p/w780/${this.props.poster}`} alt={this.props.alt}/>
      </div>
    )
  }
}

export default FilmPoster