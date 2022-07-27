import React, { Component } from 'react'


class Poster extends Component {
  render() {
    return (
      <>
        <img src={`https://image.tmdb.org/t/p/w780${this.props.poster_path}`} alt="{this.props.title} poster"/>
      </>
    )
  }
}

export default Poster