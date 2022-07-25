import React, { Component } from 'react'


class Poster extends Component {
  render() {
    return (
      <div className='film-row'>
        <img src={`https://image.tmdb.org/t/p/w780/${this.props.poster_path}`} alt="{this.props.title} poster"/>
        </div>
    )
  }
}

export default Poster